# Jeevan Neupane portfolio

A responsive React + TypeScript portfolio based on `Jeevan_Neupane_Updated_CV.pdf`. The design uses a warm paper background, editorial serif headings, restrained rust and olive accents, and the existing portrait. Copy centers on specific work and contributions from the CV.

## Run locally

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npx tsc --noEmit -p tsconfig.app.json
node scripts/check-portfolio.mjs
npm run build
```

`dist/` is the production output. `public/_redirects` provides SPA route fallback for Netlify; other static hosts must rewrite unknown routes to `/index.html`.

## Content and routes

- `/`: complete single-page overview, work, about, experience, research, and contact.
- `/projects`: filterable selected projects.
- `/projects/:slug`: individual project stories.
- `/about`: personal introduction, Indonesia APIE Camp and Chennai IN-SPAN stories, work and teaching experience, skills, community, education, and certifications. Section links provide quick navigation within the page.
- `/research`: accepted poster and research themes.
- `/writing`: Medium articles, loaded live from the `@jeevan.neupane003` feed (via rss2json, since Medium's RSS has no CORS). The homepage shows the latest three.
- `/writing/:slug`: the full article, read on the site. Medium's HTML is rebuilt from a tag allowlist rather than injected, and each article links back to Medium. If the feed can't load, the page offers a retry and a link to Medium.
- `/archive`: earlier projects, retaining `/works/:projectType/:projectName` URLs.
- Unknown routes display a recoverable not-found page.

Social links (GitHub, LinkedIn, Medium, Kaggle, X, YouTube) live in `socialLinks` in `src/portfolio-data.ts` and appear in the homepage hero, the contact section, and the footer. Edit `src/portfolio-data.ts` for CV-based content; `src/Portfolio.tsx` contains page components and `src/portfolio.css` contains the visual system. Earlier project content remains in `src/data/AllProjects.ts`.

## Images and documents

The hero and About portraits and homepage photo gallery use images from Jeevan's public LinkedIn IN-SPAN post, stored locally as WebP. The About hero collage and Indonesia story also use official APIE Camp #06 photos from SOI Asia, credited on the page. `LINKEDIN-SOURCES.md` records the verified additions and `scripts/linkedin-image-sources.json` records image provenance. The earlier portrait remains available; the VITON screenshot comes from the original portfolio. Project images are real: Shruti's note screen is a frame from A.I. Lab's "Shruti in action" video (the video's doctor and patient scenes are AI-generated and are not used), the X-ray image combines the outputs in the Xray3D-Reconstruction repository, and the LOCUS image is a screenshot of the live registration page. Human action recognition has no image yet, so its card shows the repository link. Download links use `public/Jeevan-Neupane-CV.pdf`.

`scripts/prepare-assets.py` can regenerate these assets. It requires Pillow, network access to the original image URLs, and the updated CV in the parent workspace directory. Normal development and production builds do not need Python or those external image services. Archive screenshots retain their original Cloudinary URLs.

## Interactions and accessibility

Responsive navigation with Escape dismissal and focus return, project category filters with result counts, copy-email feedback with fallback, working mail and social links, keyboard focus states, skip navigation, and reduced-motion support. Subtle entrance reveals and project hover states use CSS and IntersectionObserver.

The contact action opens the visitor's email application; no message-submission service or credentials are needed. Google Fonts are optional with system font fallbacks.
