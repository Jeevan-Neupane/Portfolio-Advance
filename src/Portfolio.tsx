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
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiMenu,
  FiX,
  FiCopy,
  FiCheck,
  FiMapPin,
} from "react-icons/fi";
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
} from "./portfolio-data";
import { AllProjects } from "./data/AllProjects";
import "./portfolio.css";

const email = "jeevan.neupane003@gmail.com";
const external = { target: "_blank", rel: "noopener noreferrer" };
function PageEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === "/"
        ? "Jeevan Neupane — AI / ML & Software Engineer"
        : `${pathname.startsWith("/projects/") ? projects.find((p) => pathname.endsWith(p.slug))?.title || "Project" : pathname.slice(1).replace(/^./, (c) => c.toUpperCase())} — Jeevan Neupane`;
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
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
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
        <Link className="nav-contact" to="/#contact">
          Get in touch <FiArrowUpRight />
        </Link>
      </nav>
    </header>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link
      className={`project-card project-${project.slug}`}
      to={`/projects/${project.slug}`}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width="900"
          height="600"
        />
        <span className="project-number">
          0{index + 1} / {project.category}
        </span>
        <span className="circle-arrow">
          <FiArrowUpRight />
        </span>
        {project.illustration && (
          <span className="image-caption">Concept illustration</span>
        )}
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
      {experience.map((item, i) => (
        <article className="experience-item" key={item.company}>
          <span className="experience-index">0{i + 1}</span>
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
      <Label>CONTACT</Label>
      <div className="contact-heading">
        <h2>
          Let’s talk <em>about the work.</em>
        </h2>
        <a
          className="contact-orb"
          href={`mailto:${email}`}
          aria-label="Email Jeevan"
        >
          <FiArrowUpRight />
        </a>
      </div>
      <p className="contact-intro">
        For engineering roles, research collaborations, or a conversation about
        healthcare AI — send me a note.
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
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <Link className="brand" to="/">
        jn<span>.</span>
      </Link>
      <p>AI, software, and things I’m working on.</p>
      <div>
        <a href="https://github.com/Jeevan-Neupane" {...external}>
          GitHub <FiArrowUpRight />
        </a>
        <a href={linkedinUrl} {...external}>
          LinkedIn <FiArrowUpRight />
        </a>
        <span>© {new Date().getFullYear()} Jeevan Neupane</span>
      </div>
    </footer>
  );
}
function ActivitySection() {
  return (
    <section id="field-notes" className="section field-notes reveal">
      <div className="section-heading">
        <div>
          <Label>05 / PEOPLE & PLACES</Label>
          <h2>
            Away from <em>the desk.</em>
          </h2>
        </div>
        <a className="text-link" href={linkedinUrl} {...external}>
          More on LinkedIn <FiArrowUpRight />
        </a>
      </div>
      <div className="field-story">
        <div>
          <span className="project-kicker">
            IN-SPAN COHORT 2 · CHENNAI, 2026
          </span>
          <h3>Eight weeks at IIT Madras.</h3>
        </div>
        <div>
          <p>
            I represented A.I. Lab at the IN-SPAN program, from sessions on
            building a business to time with Deepaarogya AI, AI4Bharat, and
            Agnikul. It gave me more to think about: the people using our
            software, their workflows, and what it takes to run a healthcare
            startup.
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
              aria-label={`${photo.caption} — view original LinkedIn post`}
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
          <Label>AI / ML & SOFTWARE ENGINEER</Label>
          <h1>
            Hi, I’m Jeevan<span className="accent">.</span>
          </h1>
          <p className="hero-lead">
            I work on AI that has
            <br />a job to do.
          </p>
          <p className="hero-intro">
            Right now, that means helping turn Nepali-English clinical
            conversations into medical notes. I’m the co-founder & CTO of A.I
            Lab, based in Kathmandu.
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
          <div className="hero-social">
            <a href="https://github.com/Jeevan-Neupane" {...external}>
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
            <a href={linkedinUrl} {...external}>
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </a>
          </div>
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
            <span>At IIT Madras · 2026</span>
            <span>
              <FiMapPin /> Kathmandu, Nepal
            </span>
          </figcaption>
          <span className="portrait-note">नमस्ते, nice to meet you.</span>
        </figure>
        <div className="hero-footnote">
          <span>
            <span className="status-dot" /> Currently building{" "}
            <Link to="/projects/shruti">
              Shruti at A.I Lab <FiArrowUpRight />
            </Link>
          </span>
          <span>Computer Engineering · Pulchowk Campus ’26</span>
        </div>
      </section>
      <section id="work" className="section work-section reveal">
        <div className="section-heading">
          <div>
            <Label>01 / SELECTED WORK</Label>
            <h2>
              A few things I’ve <em>worked on.</em>
            </h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <FiArrowUpRight />
          </Link>
        </div>
        <Link className="featured-project" to="/projects/shruti">
          <div
            className="shruti-diagram"
            aria-label="Shruti workflow: Nepali-English conversation, speech recognition and diarization, then structured clinical notes"
          >
            <div className="diagram-heading">
              <span>
                श्रुति <span>/ shruti</span>
              </span>
              <span>WORKFLOW STUDY</span>
            </div>
            <div className="audio-block">
              <span className="diagram-label">01 / THE CONVERSATION</span>
              <div className="waveform" aria-hidden="true">
                {Array.from({ length: 48 }, (_, i) => (
                  <i
                    key={i}
                    style={{ height: `${10 + Math.sin(i * 1.7) ** 2 * 47}px` }}
                  />
                ))}
              </div>
              <span className="audio-caption">
                Nepali + English · Doctor + patient
              </span>
            </div>
            <div className="diagram-connector">
              <span />
              <FiArrowDown />
              <span>Speech recognition & diarization</span>
            </div>
            <div className="note-block">
              <span className="diagram-label">
                02 / STRUCTURED CLINICAL NOTES
              </span>
              <div aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>LLM note generation</span>
            </div>
            <span className="diagram-caption">
              A simplified view of the system I’m building.
            </span>
          </div>
          <div className="featured-copy">
            <span className="project-kicker">CURRENT WORK · HEALTHCARE AI</span>
            <h3>Shruti</h3>
            <p className="featured-description">
              From clinical conversations
              <br />
              to structured notes.
            </p>
            <p>
              I’m working on the speech models, note-generation pipelines, and
              backend that connect the two, including deployment and pilot
              testing with healthcare partners.
            </p>
            <div className="tags">
              <span>Medical ASR</span>
              <span>LLM pipelines</span>
              <span>Backend APIs</span>
            </div>
            <span className="feature-link">
              See what I’m building <FiArrowUpRight />
            </span>
            <span className="project-status">
              In development & pilot testing · 2025–present
            </span>
          </div>
        </Link>
        <div className="project-grid home-projects">
          {projects.slice(1, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </section>
      <section id="about" className="section about-section reveal">
        <div>
          <Label>02 / A BIT OF BACKGROUND</Label>
          <h2>
            From medical images
            <br />
            to <em>spoken language.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I’m a Computer Engineering graduate from Pulchowk Campus. My work
            spans machine learning research and the software around it.
          </p>
          <p>
            At NAAMII, I worked on reconstructing 3D bone shapes from X-rays and
            classifying retinal disease. At Fusemachines, I helped build the
            learning platform for the Fuse AI Fellowship.
          </p>
          <p>
            Now at A.I Lab, I’m working with a different kind of data: the
            Nepali-English conversations between doctors and patients.
          </p>
          <Link className="text-link" to="/about">
            More about me <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <section id="experience" className="section experience-section reveal">
        <div className="section-heading">
          <div>
            <Label>03 / EXPERIENCE</Label>
            <h2>
              Where I’ve <em>contributed.</em>
            </h2>
          </div>
          <a className="text-link" href="/Jeevan-Neupane-CV.pdf" download>
            Full CV <FiDownload />
          </a>
        </div>
        <Experience />
      </section>
      <section className="research-banner reveal">
        <div>
          <Label>04 / RESEARCH</Label>
          <h2>
            A closer look at
            <br />
            <em>medical imaging.</em>
          </h2>
          <p>
            Alongside engineering, I’ve worked on deep learning for medical
            images and 3D reconstruction.
          </p>
          <Link className="text-link" to="/research">
            Research details <FiArrowUpRight />
          </Link>
        </div>
        <div className="paper-note">
          <span>ACCEPTED POSTER · MIRASOL 2026</span>
          <h3>
            Large-Scale Pretraining for Improving Deep Learning-Based Geometric
            Distortion Correction of Diffusion-Weighted Imaging.
          </h3>
          <p>MICCAI Workshop · 2026</p>
          <a className="text-link" href={paperUrl} {...external}>
            Read the paper <FiArrowUpRight />
          </a>
          <span className="paper-mark" aria-hidden="true">
            ↗
          </span>
        </div>
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
        <Label>THE PROJECT COLLECTION</Label>
        <h1>
          Selected <em>projects.</em>
        </h1>
        <p className="page-intro">
          A selection of healthcare AI, computer vision, and full-stack
          projects. Explore the problem, my contribution, and the technology
          behind each one.
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
            <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
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
          ← Back to all work
        </Link>
        <Label>
          {p.category.toUpperCase()} / {p.year}
        </Label>
        <h1>
          {p.title}
          <span className="accent">.</span>
        </h1>
        <p className="page-intro">{p.summary}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <figure className="detail-image">
          <img src={p.image} alt={p.alt} width="900" height="600" />
          {p.illustration && (
            <figcaption>
              Concept illustration of the project’s focus; not a product
              screenshot or research result.
            </figcaption>
          )}
        </figure>
        <div className="detail-content">
          <aside>
            <span className="eyebrow">PROJECT CONTEXT</span>
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
            <h2>Engineering focus</h2>
            <p>{p.focus}</p>
          </div>
        </div>
        <Link className="next-project" to={`/projects/${next.slug}`}>
          <span>UP NEXT</span>
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
          <div>
            <Label>ABOUT ME / JEEVAN NEUPANE</Label>
            <h1>
              Hi, I’m <em>Jeevan.</em>
            </h1>
            <p className="page-intro">
              I’m Jeevan, an AI and software engineer from Kathmandu. These
              days, I’m building healthcare AI at A.I. Lab.
            </p>
            <p>
              I studied Computer Engineering at Pulchowk Campus. My work has
              taken me from medical imaging research at NAAMII to full-stack
              development at Fusemachines and clinical speech recognition at
              A.I. Lab, where I’m co-founder and CTO.
            </p>
            <p>
              There’s also the part that doesn’t fit neatly into a project card:
              helping students in an AI lab, learning networking in Indonesia,
              and spending two months with founders and researchers in Chennai.
              Those experiences belong here too.
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
          <figure className="about-photo">
            <img
              className="about-portrait"
              src="/images/linkedin/inspan-1.webp"
              alt="Jeevan Neupane beside the IIT Madras emblem during IN-SPAN 2026"
              width="900"
              height="1200"
            />
            <figcaption>IIT Madras, Chennai · IN-SPAN 2026</figcaption>
          </figure>
        </div>
        <dl className="about-facts">
          <div>
            <dt>HOME BASE</dt>
            <dd>Kathmandu, Nepal</dd>
          </div>
          <div>
            <dt>EDUCATION</dt>
            <dd>Computer Engineering · Pulchowk ’26</dd>
          </div>
          <div>
            <dt>CURRENT FOCUS</dt>
            <dd>Nepali-English healthcare AI</dd>
          </div>
        </dl>
        <nav className="about-jump-links" aria-label="About page sections">
          <span>ON THIS PAGE</span>
          <a href="#international">
            Indonesia & India <FiArrowDown />
          </a>
          <a href="#work-and-teaching">
            Work & teaching <FiArrowDown />
          </a>
          <a href="#toolkit">
            Tools <FiArrowDown />
          </a>
          <a href="#community">
            Community & awards <FiArrowDown />
          </a>
        </nav>
      </section>
      <section id="international" className="section about-travels reveal">
        <div className="section-heading">
          <div>
            <Label>01 / LEARNING ABROAD</Label>
            <h2>
              Learning in Indonesia
              <br />
              <em>and India.</em>
            </h2>
          </div>
          <p className="section-aside">
            From the networks behind the internet to the work behind a
            healthcare startup.
          </p>
        </div>
        <div className="travel-stories">
          {internationalPrograms.map((trip, index) => (
            <article
              className={`travel-story travel-${trip.id}`}
              id={trip.id}
              key={trip.id}
            >
              <div className="travel-location">
                <span className="travel-number">0{index + 1}</span>
                <div>
                  <h3>{trip.country}</h3>
                  <p>
                    <FiMapPin /> {trip.city}
                  </p>
                </div>
                <time>{trip.dates}</time>
              </div>
              <figure className="travel-photo">
                <img
                  src={trip.image}
                  alt={trip.alt}
                  width={trip.width}
                  height={trip.height}
                  loading="lazy"
                />
                <figcaption>
                  <a href={trip.url} {...external}>
                    {trip.caption} <FiArrowUpRight />
                  </a>
                </figcaption>
              </figure>
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
          <div>
            <Label>02 / WORK & TEACHING</Label>
            <h2>
              Work & <em>teaching.</em>
            </h2>
          </div>
          <p className="section-aside">
            Research, product engineering, and hands-on teaching at Nepal AI
            School.
          </p>
        </div>
        <Experience />
      </section>
      <section id="toolkit" className="section reveal">
        <Label>03 / MY TOOLKIT</Label>
        <h2>
          The tools behind <em>the work.</em>
        </h2>
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
        <Label>04 / BEYOND THE CODE</Label>
        <h2>
          Community & <em>a few milestones.</em>
        </h2>
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
        <Label>05 / EDUCATION & CERTIFICATIONS</Label>
        <h2>
          What I’ve <em>studied.</em>
        </h2>
        <div className="skills-grid">
          <article>
            <h3>Bachelor of Computer Engineering</h3>
            <p>
              Pulchowk Campus, Tribhuvan University
              <br />
              April 2022 – April 2026
            </p>
          </article>
          <article>
            <h3>Artificial Intelligence</h3>
            <p>
              Samsung Innovation Campus · December 2025
              <br />
              Fusemachines AI Microdegree · December 2025
            </p>
          </article>
          <article>
            <h3>Networks & open source</h3>
            <p>
              Operating the Internet — Keio University & APIE · November 2024
              <br />
              Introduction to Open Source — IBM · September 2024
            </p>
          </article>
          <article>
            <h3>Cloud & networking</h3>
            <p>
              Cisco Networking Basics · January 2025
              <br />
              AWS Cloud Quest: Cloud Practitioner · December 2024
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
        <Label>RESEARCH & PUBLICATION</Label>
        <h1>
          Research in <em>medical AI.</em>
        </h1>
        <p className="page-intro">
          My research interests connect medical imaging, computer vision, and
          deep learning — with a focus on translating images into useful
          representations.
        </p>
        <article className="publication">
          <span className="publication-icon">↗</span>
          <div>
            <span className="eyebrow">
              ACCEPTED POSTER PAPER · MIRASOL 2026
            </span>
            <h2>
              Large-Scale Pretraining for Improving Deep Learning-Based
              Geometric Distortion Correction of Diffusion-Weighted Imaging.
            </h2>
            <p>MICCAI Workshop · 2026</p>
            <p className="muted">
              Co-author · Preprint available on arXiv, September 2026.
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
            <Label>AT NAAMII / FEB 2025 – JAN 2026</Label>
            <h2>
              Areas I’ve <em>worked in.</em>
            </h2>
          </div>
        </div>
        <div className="research-topics">
          <article>
            <span>01 / 3D RECONSTRUCTION</span>
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
            <span>02 / RETINAL IMAGING</span>
            <h3>Retinal disease classification</h3>
            <p>
              Developed models with EfficientNet, ResNet, and ensemble methods
              for multi-label and multi-class prediction during my research
              internship.
            </p>
          </article>
          <article>
            <span>03 / SPEECH & LANGUAGE</span>
            <h3>Understanding clinical conversations</h3>
            <p>
              Current work at A.I Lab spans Nepali-English medical speech
              recognition, diarization, and LLM pipelines for structured
              clinical notes.
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
      <Label>THE EARLIER CHAPTERS</Label>
      <h1>
        The project <em>archive.</em>
      </h1>
      <p className="page-intro">
        A collection of web applications, AI prototypes, and college projects
        from my earlier portfolio.
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
        Back to selected projects <FiArrowUpRight />
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
          ← Back to project archive
        </Link>
        <Label>FROM THE PROJECT ARCHIVE</Label>
        <h1>
          {p.projectTitle}
          <span className="accent">.</span>
        </h1>
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
function NotFound() {
  return (
    <section className="section page-top not-found">
      <Label>404 / A SMALL DETOUR</Label>
      <h1>
        Page <em>not found.</em>
      </h1>
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
