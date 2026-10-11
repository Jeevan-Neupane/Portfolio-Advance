import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import { build } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";

await build({
  entryPoints: [
    "src/Portfolio.tsx",
    "src/portfolio-data.ts",
    "src/data/AllProjects.ts",
  ],
  outdir: "node_modules/.cache/portfolio-qa",
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  packages: "external",
  loader: { ".css": "empty" },
  outExtension: { ".js": ".cjs" },
});
const require = createRequire(import.meta.url);
const {
  PortfolioContent,
} = require("../node_modules/.cache/portfolio-qa/Portfolio.cjs");
const {
  projects,
} = require("../node_modules/.cache/portfolio-qa/portfolio-data.cjs");
const {
  AllProjects,
} = require("../node_modules/.cache/portfolio-qa/data/AllProjects.cjs");
const routes = [
  "/",
  "/projects",
  "/about",
  "/research",
  "/archive",
  ...projects.map((p) => `/projects/${p.slug}`),
  ...AllProjects.filter((p) => p.projectTitle !== "VITON").map(
    (p) => `/works/archive/${encodeURIComponent(p.projectTitle)}`,
  ),
];
assert.equal(
  new Set(projects.map((p) => p.slug)).size,
  projects.length,
  "Project slugs must be unique",
);
for (const route of routes) {
  const html = renderToStaticMarkup(
    React.createElement(
      StaticRouter,
      { location: route },
      React.createElement(PortfolioContent),
    ),
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: exactly one primary heading`,
  );
  assert(
    !html.includes("404 / A SMALL DETOUR"),
    `${route}: real page resolves`,
  );
  assert(html.includes('id="main"'), `${route}: skip-link target exists`);
  assert(
    !/href="(?:undefined|null|#)"/.test(html),
    `${route}: no placeholder links`,
  );
  for (const [, source] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    if (source.startsWith("/"))
      assert(
        (await stat(`public${source}`)).size > 0,
        `${route}: ${source} exists`,
      );
  }
  if (process.env.CHECK_HTTP) {
    const response = await fetch(`http://127.0.0.1:5173${route}`);
    assert(response.ok, `${route}: HTTP success`);
    assert(
      (await response.text()).includes('id="root"'),
      `${route}: SPA entry served`,
    );
  }
}
for (const path of [
  "/not-a-page",
  "/projects/not-a-project",
  "/works/archive/missing",
]) {
  const html = renderToStaticMarkup(
    React.createElement(
      StaticRouter,
      { location: path },
      React.createElement(PortfolioContent),
    ),
  );
  assert(
    html.includes("404 / A SMALL DETOUR"),
    `${path}: safe not-found state`,
  );
}
const cv = await readFile("public/Jeevan-Neupane-CV.pdf");
assert.equal(cv.subarray(0, 5).toString(), "%PDF-", "CV is a valid PDF file");
try {
  const source = await readFile("../Jeevan_Neupane_Updated_CV.pdf");
  assert.equal(
    createHash("sha256").update(cv).digest("hex"),
    createHash("sha256").update(source).digest("hex"),
    "Download matches the updated CV",
  );
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
for (const project of projects) {
  assert(
    project.alt && project.contributions.length && project.overview,
    `${project.slug}: complete detail content`,
  );
  if (project.url) assert.equal(new URL(project.url).protocol, "https:");
}
console.log(
  `PASS: ${routes.length} rendered routes, 3 not-found states, local images, project metadata, and CV download.${process.env.CHECK_HTTP ? " HTTP routes also passed." : ""}`,
);
