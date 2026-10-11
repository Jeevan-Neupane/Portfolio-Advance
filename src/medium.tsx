import { createElement, Fragment, useEffect, useState } from "react";
import type { ReactNode } from "react";

// Medium's RSS feed has no CORS headers, so it is read through rss2json.
const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  "https://medium.com/feed/@jeevan.neupane003",
)}`;

export type MediumPost = {
  slug: string;
  title: string;
  url: string;
  date: string;
  categories: string[];
  cover?: string;
  excerpt: string;
  minutes: number;
  body: HTMLElement;
};

type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  content: string;
  categories?: string[];
};

function safeUrl(value: string | null) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

function isTrackingPixel(src: string) {
  return src.includes("medium.com/_/stat");
}

function toPost(item: FeedItem): MediumPost {
  const url = new URL(item.link);
  url.search = "";
  const body = new DOMParser().parseFromString(item.content, "text/html").body;
  const images = Array.from(body.querySelectorAll("img"))
    .map((img) => safeUrl(img.getAttribute("src")))
    .filter((src): src is string => !!src && !isTrackingPixel(src));
  const paragraphs = Array.from(body.querySelectorAll("p"), (p) =>
    (p.textContent || "").trim(),
  );
  const excerpt =
    paragraphs.find((text) => text.length > 60) || paragraphs[0] || "";
  const words = (body.textContent || "").split(/\s+/).filter(Boolean).length;
  return {
    slug: url.pathname.split("/").filter(Boolean).pop() || "",
    title: item.title,
    url: url.href,
    date: new Date(`${item.pubDate.replace(" ", "T")}Z`).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" },
    ),
    categories: item.categories || [],
    cover: safeUrl(item.thumbnail || null) || images[0],
    excerpt:
      excerpt.length > 190 ? `${excerpt.slice(0, 187).trim()}…` : excerpt,
    minutes: Math.max(1, Math.round(words / 230)),
    body,
  };
}

let cache: MediumPost[] | undefined;
let request: Promise<MediumPost[]> | undefined;

function loadPosts() {
  request ??= fetch(feedUrl)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Feed request failed: ${response.status}`);
      return response.json();
    })
    .then((data: { status: string; items: FeedItem[] }) => {
      if (data.status !== "ok") throw new Error("Feed unavailable");
      cache = data.items.map(toPost);
      return cache;
    })
    .catch((error) => {
      request = undefined;
      throw error;
    });
  return request;
}

export function useMediumPosts() {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<{
    status: "loading" | "ready" | "error";
    posts: MediumPost[];
  }>(() =>
    cache
      ? { status: "ready", posts: cache }
      : { status: "loading", posts: [] },
  );
  useEffect(() => {
    let active = true;
    loadPosts()
      .then((posts) => active && setState({ status: "ready", posts }))
      .catch(() => active && setState({ status: "error", posts: [] }));
    return () => {
      active = false;
    };
  }, [attempt]);
  return {
    ...state,
    retry: () => {
      setState({ status: "loading", posts: [] });
      setAttempt((n) => n + 1);
    },
  };
}

// Rebuild the article from an allowlist instead of injecting Medium's HTML.
const allowedTags = new Set([
  "p",
  "h3",
  "h4",
  "figure",
  "figcaption",
  "strong",
  "em",
  "b",
  "i",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
]);
const droppedTags = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "form",
  "noscript",
  "svg",
  "math",
  "template",
]);

function renderNode(node: Node, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const element = node as Element;
  const tag = element.tagName.toLowerCase();
  if (droppedTags.has(tag)) return null;
  const children = Array.from(element.childNodes, (child, i) =>
    renderNode(child, `${key}.${i}`),
  );
  if (tag === "br" || tag === "hr") return createElement(tag, { key });
  if (tag === "img") {
    const src = safeUrl(element.getAttribute("src"));
    if (!src || isTrackingPixel(src)) return null;
    return (
      <img
        key={key}
        src={src}
        alt={element.getAttribute("alt") || ""}
        loading="lazy"
      />
    );
  }
  if (tag === "a") {
    const href = safeUrl(element.getAttribute("href"));
    return href ? (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Fragment key={key}>{children}</Fragment>
    );
  }
  if (allowedTags.has(tag)) return createElement(tag, { key }, children);
  return <Fragment key={key}>{children}</Fragment>;
}

export function ArticleBody({ post }: { post: MediumPost }) {
  return (
    <div className="article-body">
      {Array.from(post.body.childNodes, (node, i) => renderNode(node, `${i}`))}
    </div>
  );
}
