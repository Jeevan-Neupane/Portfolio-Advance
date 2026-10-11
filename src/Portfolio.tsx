import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiArrowLeft,
  FiArrowDown,
  FiGithub,
  FiDownload,
  FiMenu,
  FiX,
  FiCopy,
  FiCheck,
  FiMapPin,
} from "react-icons/fi";
import {
  FaGithub,
  FaKaggle,
  FaLinkedinIn,
  FaMedium,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import {
  projects,
  experience,
  skills,
  achievements,
  linkedinUrl,
  inspanPostUrl,
  paperUrl,
  fieldPhotos,
  recentWork,
  internationalPrograms,
  apieGlanceUrl,
  mediumUrl,
  socialLinks,
} from "./portfolio-data";
import { AllProjects } from "./data/AllProjects";
import { ArticleBody, useMediumPosts } from "./medium";
import "./portfolio.css";

const email = "jeevan.neupane003@gmail.com";
const external = { target: "_blank", rel: "noopener noreferrer" };
const socialIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  medium: FaMedium,
  kaggle: FaKaggle,
  x: FaXTwitter,
  youtube: FaYoutube,
};
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === "/"
        ? "Jeevan Neupane | AI/ML & Software Engineer"
        : `${pathname.startsWith("/projects/") ? projects.find((p) => pathname.endsWith(p.slug))?.title || "Project" : pathname.split("/")[1].replace(/^./, (c) => c.toUpperCase())} | Jeevan Neupane`;
    if (hash)
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        }),
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, hash]);
  return null;
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className={scrolled ? "header-bar scrolled" : "header-bar"}>
      <header className="header">
        <Link className="brand" to="/" aria-label="Jeevan Neupane home">
          <span className="brand-mark">jn.</span>
          <span className="brand-name">Jeevan Neupane</span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav id="navigation" className={open ? "nav open" : "nav"}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <Link className="nav-contact" to="/#contact">
            Get in touch <FiArrowUpRight />
          </Link>
        </nav>
      </header>
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      className={`project-card project-${project.slug}`}
      to={`/projects/${project.slug}`}
    >
      <div
        className={project.image ? "project-image" : "project-image no-image"}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            width="900"
            height="600"
          />
        ) : (
          <span className="repo-path">
            {project.url?.replace("https://", "")}
          </span>
        )}
        <span className="project-number">{project.category}</span>
        <span className="circle-arrow">
          <FiArrowUpRight />
        </span>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
function Experience() {
  return (
    <div className="experience-list">
      {experience.map((item) => (
        <article className="experience-item" key={item.company}>
          <div>
            <h3>{item.role}</h3>
            <p className="company">
              {item.company} <span> / {item.type}</span>
            </p>
            <p>{item.description}</p>
          </div>
          <time>{item.dates}</time>
        </article>
      ))}
    </div>
  );
}
function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2500);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <section id="contact" className="contact section reveal">
      <div className="contact-heading">
        <h2>Contact</h2>
        <a
          className="contact-orb"
          href={`mailto:${email}`}
          aria-label="Email Jeevan"
        >
          <FiArrowUpRight />
        </a>
      </div>
      <p className="contact-intro">
        For engineering roles, research collaborations or questions about
        healthcare AI, email me.
      </p>
      <div className="contact-bottom">
        <div>
          <a className="email-link" href={`mailto:${email}`}>
            {email}
          </a>
          <button
            className="copy-button"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {copied ? <FiCheck /> : <FiCopy />}
          </button>
          <span className="copy-status" role="status">
            {copied
              ? "Copied!"
              : copyError
                ? "Please select and copy the email above."
                : ""}
          </span>
        </div>
        <span>
          <FiMapPin /> Kathmandu, Nepal
        </span>
      </div>
      <div className="contact-social">
        <span>ELSEWHERE</span>
        <SocialLinks className="social-pills" />
      </div>
    </section>
  );
}
function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      {socialLinks.map(({ id, label, url }) => {
        const Icon = socialIcons[id];
        return (
          <a key={id} href={url} {...external}>
            <Icon aria-hidden="true" /> {label}
          </a>
        );
      })}
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <Link className="brand" to="/">
        jn<span>.</span>
      </Link>
      <div>
        {socialLinks.map(({ id, label, url }) => (
          <a key={id} href={url} {...external}>
            {label} <FiArrowUpRight />
          </a>
        ))}
        <span>© {new Date().getFullYear()} Jeevan Neupane</span>
      </div>
    </footer>
  );
}
function PostList({ limit }: { limit?: number }) {
  const { status, posts, retry } = useMediumPosts();
  if (status === "loading")
    return (
      <div className="post-list" aria-busy="true">
        {Array.from({ length: limit ?? 3 }, (_, i) => (
          <div className="post-row post-skeleton" key={i} aria-hidden="true">
            <i />
            <div>
              <i />
              <i />
            </div>
          </div>
        ))}
        <span className="sr-only" role="status">
          Loading articles from Medium…
        </span>
      </div>
    );
  if (status === "error" || !posts.length)
    return (
      <div className="post-empty">
        <p>
          {status === "error"
            ? "My Medium articles couldn’t load just now."
            : "No articles yet."}
        </p>
        {status === "error" && (
          <button className="button secondary" onClick={retry}>
            Try again
          </button>
        )}
        <a className="text-link" href={mediumUrl} {...external}>
          Read on Medium <FiArrowUpRight />
        </a>
      </div>
    );
  return (
    <div className="post-list">
      {posts.slice(0, limit).map((post) => (
        <Link className="post-row" to={`/writing/${post.slug}`} key={post.slug}>
          <div className="post-meta">
            <time>{post.date}</time>
            <span>{post.minutes} min read</span>
          </div>
          <div className="post-copy">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="tags">
              {post.categories.slice(0, 3).map((c) => (
                <span key={c}>{c.replace(/-/g, " ")}</span>
              ))}
            </div>
          </div>
          {post.cover ? (
            <img
              className="post-thumb"
              src={post.cover}
              alt=""
              loading="lazy"
            />
          ) : (
            <span className="post-thumb" aria-hidden="true" />
          )}
        </Link>
      ))}
    </div>
  );
}
function ActivitySection() {
  return (
    <section id="field-notes" className="section field-notes reveal">
      <div className="section-heading">
        <h2>Programs and events</h2>
        <a className="text-link" href={linkedinUrl} {...external}>
          More on LinkedIn <FiArrowUpRight />
        </a>
      </div>
      <div className="field-story">
        <div>
          <span className="project-kicker">
            IN-SPAN COHORT 2, CHENNAI, 2026
          </span>
          <h3>Eight weeks at IIT Madras</h3>
        </div>
        <div>
          <p>
            I represented A.I. Lab at IN-SPAN, an eight-week startup program at
            IIT Madras Pravartak. We had sessions on business and fundraising,
            and I spent time with Deepaarogya AI, AI4Bharat and Agnikul.
          </p>
          <a className="text-link" href={inspanPostUrl} {...external}>
            My notes from Chennai <FiArrowUpRight />
          </a>
        </div>
      </div>
      <div className="field-gallery">
        {fieldPhotos.map((photo) => (
          <figure key={photo.image}>
            <a
              href={inspanPostUrl}
              {...external}
              aria-label={`${photo.caption}, view the original LinkedIn post`}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
            </a>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="community-list">
        {recentWork.map((item) => (
          <article key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a className="text-link" href={item.url} {...external}>
              {item.linkLabel} <FiArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Label>AI/ML AND SOFTWARE ENGINEER</Label>
          <h1>Hi, I’m Jeevan.</h1>
          <p className="hero-lead">I build AI for healthcare.</p>
          <p className="hero-intro">
            I’m co-founder and CTO of A.I. Lab in Kathmandu. We’re building
            Shruti, which turns Nepali-English conversations between doctors and
            patients into medical notes.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/#work">
              See my work <FiArrowDown />
            </Link>
            <a
              className="button secondary"
              href="/Jeevan-Neupane-CV.pdf"
              download
            >
              Download CV <FiDownload />
            </a>
          </div>
          <SocialLinks className="hero-social" />
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img
              src="/images/linkedin/portrait.webp"
              alt="Jeevan Neupane at IIT Madras during the IN-SPAN program"
              width="400"
              height="400"
              loading="eager"
            />
          </div>
          <figcaption>
            <span>IIT Madras, 2026</span>
            <span>
              <FiMapPin /> Kathmandu, Nepal
            </span>
          </figcaption>
        </figure>
        <div className="hero-footnote">
          <span>
            Now building{" "}
            <Link to="/projects/shruti">
              Shruti at A.I. Lab <FiArrowUpRight />
            </Link>
          </span>
          <span>Computer Engineering, Pulchowk Campus, 2026</span>
        </div>
      </section>
      <section id="work" className="section work-section reveal">
        <div className="section-heading">
          <h2>Projects</h2>
          <Link className="text-link" to="/projects">
            All projects <FiArrowUpRight />
          </Link>
        </div>
        <Link className="featured-project" to="/projects/shruti">
          <figure className="featured-image">
            <img
              src="/images/shruti-emr.webp"
              alt="Shruti's note screen in a demo clinic, showing a generated assessment and treatment plan"
              width="720"
              height="480"
              loading="lazy"
            />
            <figcaption>
              Shruti’s note screen, from A.I. Lab’s demo video.
            </figcaption>
          </figure>
          <div className="featured-copy">
            <span className="project-kicker">CURRENT WORK</span>
            <h3>Shruti</h3>
            <p className="featured-description">
              Turns doctor-patient conversations into structured clinical notes.
            </p>
            <p>
              I work on the speech recognition models, the note generation
              pipeline and the backend, and help with deployment and pilot
              testing with healthcare partners.
            </p>
            <div className="tags">
              <span>Medical ASR</span>
              <span>LLM pipelines</span>
              <span>Backend APIs</span>
            </div>
            <span className="feature-link">
              Read more <FiArrowUpRight />
            </span>
            <span className="project-status">
              In pilot testing, 2025 to present
            </span>
          </div>
        </Link>
        <div className="project-grid home-projects">
          {projects.slice(1, 4).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section id="about" className="section about-section reveal">
        <div>
          <h2>About</h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I studied Computer Engineering at Pulchowk Campus. I’ve worked on
            machine learning research and on software engineering.
          </p>
          <p>
            At NAAMII, I worked on reconstructing 3D bone shapes from X-rays and
            classifying retinal disease. At Fusemachines, I helped build the
            learning platform for the Fuse AI Fellowship.
          </p>
          <p>
            At A.I. Lab, I work with Nepali-English conversations between
            doctors and patients.
          </p>
          <Link className="text-link" to="/about">
            More about me <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <section id="experience" className="section experience-section reveal">
        <div className="section-heading">
          <h2>Experience</h2>
          <a className="text-link" href="/Jeevan-Neupane-CV.pdf" download>
            Full CV <FiDownload />
          </a>
        </div>
        <Experience />
      </section>
      <section className="research-banner reveal">
        <div>
          <h2>Research</h2>
          <p>
            I’ve worked on deep learning for medical images and 3D
            reconstruction.
          </p>
          <Link className="text-link" to="/research">
            Research details <FiArrowUpRight />
          </Link>
        </div>
        <div className="paper-note">
          <span>ACCEPTED POSTER, MIRASOL 2026</span>
          <h3>
            Large-Scale Pretraining for Improving Deep Learning-Based Geometric
            Distortion Correction of Diffusion-Weighted Imaging.
          </h3>
          <p>MICCAI Workshop, 2026</p>
          <a className="text-link" href={paperUrl} {...external}>
            Read the paper <FiArrowUpRight />
          </a>
        </div>
      </section>
      <section id="writing" className="section writing-section reveal">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link className="text-link" to="/writing">
            All articles <FiArrowUpRight />
          </Link>
        </div>
        <PostList limit={3} />
      </section>
      <ActivitySection />
      <Contact />
    </>
  );
}
function Projects() {
  const [filter, setFilter] = useState("All work");
  const filtered = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  return (
    <>
      <section className="section page-top">
        <h1>Projects</h1>
        <p className="page-intro">
          Healthcare AI, computer vision and web projects I’ve worked on.
        </p>
        <div className="filters" aria-label="Filter projects">
          {["All work", "Healthcare AI", "Computer vision", "Full-stack"].map(
            (f) => (
              <button
                key={f}
                className={f === filter ? "selected" : ""}
                aria-pressed={f === filter}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ),
          )}
        </div>
        <p className="result-count" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        <div className="project-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}
function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((project) => project.slug === slug);
  if (!p) return <NotFound />;
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <section className="section page-top detail">
        <Link className="text-link back" to="/projects">
          <FiArrowLeft /> All projects
        </Link>
        <Label>
          {p.category.toUpperCase()}, {p.year.toUpperCase()}
        </Label>
        <h1>{p.title}</h1>
        <p className="page-intro">{p.summary}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {p.image && (
          <figure className="detail-image">
            <img src={p.image} alt={p.alt} width="900" height="600" />
            {p.caption && <figcaption>{p.caption}</figcaption>}
          </figure>
        )}
        <div className="detail-content">
          <aside>
            <span className="eyebrow">CONTEXT</span>
            <h3>{p.context}</h3>
            <p>{p.year}</p>
            {p.url && (
              <a className="button primary" href={p.url} {...external}>
                {p.linkLabel} <FiArrowUpRight />
              </a>
            )}
          </aside>
          <div>
            <h2>Overview</h2>
            <p>{p.overview}</p>
            <h2>My contribution</h2>
            <ul>
              {p.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link className="next-project" to={`/projects/${next.slug}`}>
          <span>NEXT PROJECT</span>
          <h2>
            {next.title} <FiArrowUpRight />
          </h2>
        </Link>
      </section>
      <Contact />
    </>
  );
}
function About() {
  return (
    <>
      <section className="section page-top about-intro" id="my-story">
        <div className="about-page-hero">
          <div className="about-hero-copy">
            <h1>About me</h1>
            <p className="page-intro">
              I’m an AI and software engineer from Kathmandu, and co-founder and
              CTO of A.I. Lab.
            </p>
            <p>
              I studied Computer Engineering at Pulchowk Campus. My work has
              included medical imaging research at NAAMII, full-stack
              development at Fusemachines and now clinical speech recognition at
              A.I. Lab.
            </p>
            <p>
              I also attended{" "}
              <a href="#indonesia">APIE Camp #06 in Malang, Indonesia</a>, and
              spent eight weeks at <a href="#india">IIT Madras in Chennai</a>{" "}
              with the IN-SPAN program. In Nepal, I was a teaching assistant at
              Nepal AI School.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="/Jeevan-Neupane-CV.pdf"
                download
              >
                Download my CV <FiDownload />
              </a>
              <a className="text-link" href={linkedinUrl} {...external}>
                Find me on LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="about-collage">
            <div className="collage-stack">
              <figure className="collage-print collage-main">
                <img
                  src="/images/linkedin/inspan-1.webp"
                  alt="Jeevan Neupane beside the IIT Madras emblem during IN-SPAN 2026"
                  width="900"
                  height="1200"
                />
                <figcaption>
                  <span>IIT Madras</span>
                  <span>2026</span>
                </figcaption>
              </figure>
              <figure className="collage-print collage-apie">
                <img
                  src="/images/apie-cohort.webp"
                  alt="The APIE Camp #06 participants and organizers together at Universitas Brawijaya in Malang"
                  width="1400"
                  height="760"
                />
                <figcaption>
                  <span>APIE Camp #06, Malang</span>
                  <span>2025</span>
                </figcaption>
              </figure>
            </div>
            <a className="collage-credit" href={apieGlanceUrl} {...external}>
              Cohort photo: SOI Asia <FiArrowUpRight />
            </a>
          </div>
        </div>
        <dl className="about-facts">
          <div>
            <dt>HOME BASE</dt>
            <dd>Kathmandu, Nepal</dd>
          </div>
          <div>
            <dt>EDUCATION</dt>
            <dd>Computer Engineering, Pulchowk Campus, 2026</dd>
          </div>
          <div>
            <dt>LEARNING ABROAD</dt>
            <dd>
              APIE Camp, Indonesia, 2025
              <br />
              IN-SPAN, India, 2026
            </dd>
          </div>
          <div>
            <dt>CURRENT FOCUS</dt>
            <dd>Nepali-English healthcare AI</dd>
          </div>
        </dl>
        <nav className="about-jump-links" aria-label="About page sections">
          <span>ON THIS PAGE</span>
          <a href="#international">
            APIE Camp & IN-SPAN <FiArrowDown />
          </a>
          <a href="#work-and-teaching">
            Work & teaching <FiArrowDown />
          </a>
          <a href="#toolkit">
            Skills <FiArrowDown />
          </a>
          <a href="#community">
            Community & awards <FiArrowDown />
          </a>
        </nav>
      </section>
      <section id="international" className="section about-travels reveal">
        <div className="section-heading">
          <h2>Programs abroad</h2>
        </div>
        <div className="travel-stories">
          {internationalPrograms.map((trip) => (
            <article
              className={`travel-story travel-${trip.id}`}
              id={trip.id}
              key={trip.id}
            >
              <div className="travel-location">
                <div>
                  <h3>{trip.country}</h3>
                  <p>
                    <FiMapPin /> {trip.city}
                  </p>
                </div>
                <time>{trip.dates}</time>
              </div>
              <div className="travel-media">
                {trip.photos.map((photo, photoIndex) => (
                  <figure
                    className={
                      photoIndex === 0 ? "travel-photo" : "travel-thumb"
                    }
                    key={photo.image}
                  >
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                    />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
                <a
                  className="travel-credit"
                  href={trip.creditUrl}
                  {...external}
                >
                  {trip.credit} <FiArrowUpRight />
                </a>
              </div>
              <div className="travel-copy">
                <span className="project-kicker">{trip.program}</span>
                <h3>{trip.title}</h3>
                <p>{trip.description}</p>
                <p>{trip.detail}</p>
                <div className="tags">
                  {trip.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
                <a className="text-link" href={trip.url} {...external}>
                  {trip.linkLabel} <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="work-and-teaching" className="section reveal">
        <div className="section-heading">
          <h2>Work and teaching</h2>
        </div>
        <Experience />
      </section>
      <section id="toolkit" className="section reveal">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <article key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.items}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="community" className="section reveal">
        <h2>Community and awards</h2>
        <div className="achievement-list">
          {achievements
            .filter(
              (a) =>
                a.category !== "international" && a.category !== "teaching",
            )
            .map((a) => (
              <article key={a.title}>
                <time>{a.date}</time>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  {a.source && (
                    <a
                      className="text-link achievement-source"
                      href={a.source}
                      {...external}
                    >
                      On LinkedIn <FiArrowUpRight />
                    </a>
                  )}
                </div>
                <FiArrowUpRight />
              </article>
            ))}
        </div>
      </section>
      <section className="section reveal">
        <h2>Education and certifications</h2>
        <div className="skills-grid">
          <article>
            <h3>Bachelor of Computer Engineering</h3>
            <p>
              Pulchowk Campus, Tribhuvan University
              <br />
              April 2022 to April 2026
            </p>
          </article>
          <article>
            <h3>Artificial Intelligence</h3>
            <p>
              Samsung Innovation Campus, December 2025
              <br />
              Fusemachines AI Microdegree, December 2025
            </p>
          </article>
          <article>
            <h3>Networks & open source</h3>
            <p>
              Operating the Internet, Keio University and APIE, November 2024
              <br />
              Introduction to Open Source, IBM, September 2024
            </p>
          </article>
          <article>
            <h3>Cloud & networking</h3>
            <p>
              Cisco Networking Basics, January 2025
              <br />
              AWS Cloud Quest: Cloud Practitioner, December 2024
            </p>
            <a className="text-link" href={linkedinUrl} {...external}>
              LinkedIn credentials <FiArrowUpRight />
            </a>
          </article>
        </div>
      </section>
      <Contact />
    </>
  );
}
function Research() {
  return (
    <>
      <section className="section page-top">
        <h1>Research</h1>
        <p className="page-intro">
          My research is in medical imaging and computer vision with deep
          learning.
        </p>
        <article className="publication">
          <div>
            <span className="eyebrow">ACCEPTED POSTER PAPER, MIRASOL 2026</span>
            <h2>
              Large-Scale Pretraining for Improving Deep Learning-Based
              Geometric Distortion Correction of Diffusion-Weighted Imaging.
            </h2>
            <p>MICCAI Workshop, 2026</p>
            <p className="muted">
              Co-author. Preprint on arXiv, September 2026.
            </p>
            <a
              className="text-link"
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on arXiv <FiArrowUpRight />
            </a>
          </div>
        </article>
        <div className="section-heading">
          <div>
            <Label>AT NAAMII, FEB 2025 TO JAN 2026</Label>
            <h2>Research areas</h2>
          </div>
        </div>
        <div className="research-topics">
          <article>
            <span>3D RECONSTRUCTION</span>
            <h3>X-rays to bone shapes</h3>
            <p>
              DRR generation, mesh deformation, CNNs, and transformer-based
              approaches to reconstructing 3D bone shapes from X-ray images.
            </p>
            <Link className="text-link" to="/projects/xray-3d">
              Explore project <FiArrowUpRight />
            </Link>
          </article>
          <article>
            <span>RETINAL IMAGING</span>
            <h3>Retinal disease classification</h3>
            <p>
              Developed models with EfficientNet, ResNet, and ensemble methods
              for multi-label and multi-class prediction during my research
              internship.
            </p>
          </article>
          <article>
            <span>SPEECH AND LANGUAGE</span>
            <h3>Understanding clinical conversations</h3>
            <p>
              At A.I. Lab I work on Nepali-English medical speech recognition,
              diarization and LLM pipelines for structured clinical notes.
            </p>
            <Link className="text-link" to="/projects/shruti">
              Explore Shruti <FiArrowUpRight />
            </Link>
          </article>
        </div>
      </section>
      <Contact />
    </>
  );
}
function Archive() {
  return (
    <section className="section page-top">
      <h1>Older projects</h1>
      <p className="page-intro">
        Web apps, AI prototypes and college projects from my earlier portfolio.
      </p>
      <div className="achievement-list">
        {AllProjects.map((p) => (
          <Link
            className="archive-row"
            key={p.id}
            to={
              p.projectTitle === "VITON"
                ? "/projects/viton"
                : `/works/archive/${encodeURIComponent(p.projectTitle)}`
            }
          >
            <span>{String(p.id).padStart(2, "0")}</span>
            <div>
              <h3>{p.projectTitle}</h3>
              <p>{p.projectTagline}</p>
            </div>
            <FiArrowUpRight />
          </Link>
        ))}
      </div>
      <Link className="text-link" to="/projects">
        Back to projects <FiArrowUpRight />
      </Link>
    </section>
  );
}
function LegacyProject() {
  const { projectName } = useParams();
  if (projectName === "VITON") return <Navigate to="/projects/viton" replace />;
  const p = AllProjects.find((item) => item.projectTitle === projectName);
  if (!p) return <NotFound />;
  const cover = p.mediaData.find((m) => m.type === "image");
  return (
    <>
      <section className="section page-top detail">
        <Link className="text-link back" to="/archive">
          <FiArrowLeft /> Older projects
        </Link>
        <Label>OLDER PROJECT</Label>
        <h1>{p.projectTitle}</h1>
        <p className="page-intro">{p.projectTagline}</p>
        <div className="tags">
          {p.technologies.map((t) => (
            <span key={t.name}>{t.name}</span>
          ))}
        </div>
        {cover && (
          <figure className="detail-image">
            <img
              src={cover.url}
              alt={`${p.projectTitle} project screenshot`}
              width="900"
              height="600"
            />
          </figure>
        )}
        <div className="detail-content">
          <aside>
            <h3>Explore the project</h3>
            <a
              className="button primary"
              href={p.projectLinks.github}
              {...external}
            >
              View source <FiGithub />
            </a>
          </aside>
          <div>
            <h2>Overview</h2>
            <p>{p.paragraphOne}</p>
            <p>{p.paragraphTwo}</p>
            <h2>Features</h2>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
function Writing() {
  return (
    <>
      <section className="section page-top">
        <h1>Writing</h1>
        <p className="page-intro">
          Articles I’ve written on Medium about deep learning and databases. You
          can read them here or on Medium.
        </p>
        <a className="text-link" href={mediumUrl} {...external}>
          Follow me on Medium <FiArrowUpRight />
        </a>
        <PostList />
      </section>
      <Contact />
    </>
  );
}
function Article() {
  const { slug } = useParams();
  const { status, posts, retry } = useMediumPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];
  const next = posts.length > 1 ? posts[(index + 1) % posts.length] : null;
  useEffect(() => {
    if (post) document.title = `${post.title} | Jeevan Neupane`;
  }, [post]);
  if (status === "ready" && !post) return <NotFound />;
  return (
    <>
      <article className="section page-top article">
        <div className="article-shell">
          <Link className="text-link back" to="/writing">
            <FiArrowLeft /> All articles
          </Link>
          {post ? (
            <>
              <Label>
                {post.date.toUpperCase()}, {post.minutes} MIN READ
              </Label>
              <h1>{post.title}</h1>
              <div className="tags">
                {post.categories.map((c) => (
                  <span key={c}>{c.replace(/-/g, " ")}</span>
                ))}
              </div>
              <ArticleBody post={post} />
              <div className="article-end">
                <p>This article was first published on Medium.</p>
                <div className="hero-actions">
                  <a className="button primary" href={post.url} {...external}>
                    Read on Medium <FiArrowUpRight />
                  </a>
                  <Link className="button secondary" to="/writing">
                    More articles <FiArrowRight />
                  </Link>
                </div>
              </div>
            </>
          ) : status === "error" ? (
            <>
              <h1>This article didn’t load</h1>
              <p className="page-intro">
                Medium didn’t respond just now. Try again, or read it on Medium
                directly.
              </p>
              <div className="hero-actions">
                <button className="button primary" onClick={retry}>
                  Try again
                </button>
                <a className="button secondary" href={mediumUrl} {...external}>
                  Open Medium <FiArrowUpRight />
                </a>
              </div>
            </>
          ) : (
            <>
              <h1 className="article-loading">Loading article…</h1>
              <div className="article-skeleton" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </>
          )}
        </div>
        {post && next && (
          <Link
            className="next-project article-next"
            to={`/writing/${next.slug}`}
          >
            <span>NEXT ARTICLE</span>
            <h2>
              {next.title} <FiArrowUpRight />
            </h2>
          </Link>
        )}
      </article>
      <Contact />
    </>
  );
}
function NotFound() {
  return (
    <section className="section page-top not-found">
      <Label>404</Label>
      <h1>Page not found</h1>
      <Link className="button primary" to="/">
        Back to home <FiArrowRight />
      </Link>
    </section>
  );
}
export function PortfolioContent() {
  return (
    <>
      <PageEffects />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <>
                <Projects />
                <div className="archive-cta">
                  <Link className="text-link" to="/archive">
                    Explore the earlier project archive <FiArrowUpRight />
                  </Link>
                </div>
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/archive" element={<Archive />} />
          <Route
            path="/works/:projectType/:projectName"
            element={<LegacyProject />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default function Portfolio() {
  return (
    <BrowserRouter>
      <PortfolioContent />
    </BrowserRouter>
  );
}
