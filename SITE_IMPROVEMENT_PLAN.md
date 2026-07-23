# DeFi Collective Site Improvement Plan

Audit date: 2026-07-23
Implementation completed: 2026-07-23

## Purpose

This plan covers targeted improvements that complement the recent content
simplification. It does not propose a redesign, framework migration, or broad
dependency modernization.

Effort labels:

- **Low:** up to roughly four engineering hours
- **Medium:** roughly half a day to two days, including validation

## Executive recommendation

The site does not need an overhaul. Its identity is clear, the core layouts are
coherent, the content build is fast, and the dependency audit is clean. The
highest-value work is concentrated in three release blockers:

1. Make the deployment environment compatible with the committed Hugo config.
2. Fix mobile overflow in the new financial report and Support page.
3. Preserve or deliberately replace URLs removed during simplification.

After those are addressed, a compact second pass should improve semantics,
content discovery, and page weight. Broad theme, Tailwind, or Hugo module
upgrades should be deferred because they carry more regression risk than user
value for this repository.

## Audit snapshot

The following observations establish the priority order.

| Area | Finding | Consequence |
| --- | --- | --- |
| Deployment | The workflow pins Hugo `0.136.4`, which fails on `/:slugorcontentbasename/`. This permalink token was introduced in Hugo `0.144.0`. An official Hugo `0.164.0` build succeeds. | The six local commits cannot deploy through the current workflow. |
| Hugo config | Top-level `paginate = 3` is deprecated and ignored by current Hugo. The homepage currently renders 10 full article cards. | The simplified homepage is much longer than intended, especially on mobile. |
| Responsive layout | The H1 2026 report has four tables wider than the viewport. At 360 px, the document is approximately 370 px too wide. The Support page wallet address also overflows. | Core new content is difficult to read on mobile and creates horizontal page scrolling. |
| URL continuity | Removed `/impact/`, `/policies/`, `/media/`, and `/defi-protocol-guidelines/` routes still have internal references. They currently return 200 in production but will disappear after deployment. | Existing inbound and internal links will become 404s. |
| Link integrity | A local crawl also found an already-broken article URL, a malformed relative `bit.ly` link, and links to removed routes. | Readers encounter avoidable dead ends. |
| HTML and accessibility | Shared blog cards contain nested anchors and invalid paragraph nesting. Some page templates omit an `h1`; the mobile menu trigger is not a keyboard-operable button; card links lack accessible names; article tag contrast fails. | Keyboard, screen-reader, and general navigation quality are reduced. |
| Content discovery | Related articles are selected from nearly every other article, shuffled, then truncated to three. | Results are random and frequently unrelated to the article being read. |
| Media delivery | The homepage transfers about 5.5 MB in the local mobile Lighthouse run. Large originals are used for card thumbnails and 24 px avatars; 39 images are requested. | The main content is unnecessarily expensive on mobile connections. |
| Runtime payload | The global bundle includes Swiper, GLightbox, gallery, accordion, tabs, and other code with no corresponding site content. Lighthouse estimates about 179 KB of unused JavaScript. | Every page downloads and evaluates features it does not use. |
| Search | The generated search index is about 516 KB raw; full article bodies account for about 79% of it, and it is requested on every page load. | Search adds a site-wide transfer cost before a visitor opens it. |
| Social metadata | The global description is only "The DeFi Collective." The default social image is SVG, which the current SEO module does not emit as an image meta tag, and the configured Twitter creator is invalid. | Homepage link previews are incomplete or inconsistent. |
| Maintenance | `npm audit` reports zero vulnerabilities. Available Tailwind and Hugo module updates are mostly major or broad changes. The current build emits two module deprecation warnings. | There is no security reason for a broad upgrade; narrow maintenance is sufficient. |

Lighthouse numbers above are synthetic local measurements, useful for relative
comparison rather than a promise about production timing. Production caching
and compression differ from the local server.

## Prioritized task list

### P0 - Complete before publishing the current content changes

#### [x] 1. Align the Hugo build and restore intended pagination

**Value:** Critical  
**Effort:** Low  
**Primary files:** `.github/workflows/main.yml`, `hugo.toml`

Implementation:

- Pin CI to Hugo `0.164.0`, matching the verified successful build.
- Replace `npm install` with `npm ci` so CI uses the committed lockfile exactly.
- Run the build for pull requests as well as deployment pushes, while restricting
  the deploy step to the intended branch.
- Replace top-level `paginate = 3` with:

  ```toml
  [pagination]
    pagerSize = 3
  ```

- Keep the version pin explicit. Automated "latest Hugo" upgrades are not
  appropriate for this old theme and module stack.

Acceptance criteria:

- The exact CI toolchain builds successfully from a clean checkout.
- Pull requests receive a build result without deploying.
- The homepage shows three recent article cards and working pagination.
- A failed build cannot proceed to deployment.

#### [x] 2. Make wide content usable on small screens

**Value:** Critical  
**Effort:** Low  
**Primary files:** a local Markdown table render hook, content typography CSS,
`content/english/support.md`

Implementation:

- Add a Hugo table render hook that wraps Markdown tables in a constrained,
  horizontally scrollable region.
- Give the region an accessible label and keyboard focus so non-pointer users can
  scroll it.
- Add `max-width: 100%` and touch-friendly horizontal overflow styles without
  shrinking table text to an unreadable size.
- Allow long identifiers and URLs in article content to wrap. Present the Support
  page wallet address as a linked code-like value or abbreviate its visible label
  while retaining the full destination.

Acceptance criteria:

- At 320, 360, and 390 px widths, document `scrollWidth` equals viewport width on
  the H1 report and Support page.
- Each report table remains readable and scrolls inside its own region.
- The table regions can be reached and scrolled with a keyboard.
- Desktop table presentation is unchanged or improved.

#### [x] 3. Preserve public URL continuity and repair broken links

**Value:** High  
**Effort:** Medium  
**Primary files:** surviving content front matter, small archival landing pages
where needed, affected Markdown articles

Implementation:

- Define a deliberate successor for every removed public route:
  - Redirect `/defi-protocol-guidelines/` to the surviving protocol guidelines
    article and update that article's references.
  - Preserve `/policies/` as a minimal policy index, or redirect only after a
    destination representing all policies is chosen. Redirecting it to one policy
    would be misleading.
  - Preserve `/impact/` as a small archival notice linking to the Turtle Mode and
    PermaLP unwind updates. This is more accurate than silently redirecting it to
    the homepage.
  - Redirect `/media/` to the article archive or provide a small archive notice.
- Use Hugo aliases when one surviving page is a true replacement. Use a minimal
  tombstone/index page when the removed route represented several resources.
- Update all internal references to use the chosen current destinations.
- Fix the malformed `bit.ly/MAV-BP106` link by giving it an explicit `https://`
  scheme.
- Resolve or remove the existing `/blog/make-defi-decentralized-again/` reference
  after checking the surrounding article context.

Acceptance criteria:

- Each previously published route returns a useful page or redirect, not a 404.
- A crawl of the generated site reports zero broken internal links.
- No current article links to a removed route through an obsolete URL.

### P1 - High-value follow-up

#### [x] 4. Make related content deterministic and genuinely related

**Value:** High  
**Effort:** Low  
**Primary files:** `themes/hugoplate/layouts/blog/single.html`, Hugo related-content
configuration if needed

Implementation:

- Remove the union of all other articles and the final `shuffle`.
- Use Hugo's related-content result based on shared tags and categories.
- Use recent articles only as a deterministic fallback when fewer than three
  related items exist.
- Exclude the current page and avoid duplicate results.

Acceptance criteria:

- Reloading an article does not change its recommendations.
- Related items share taxonomy with the current article whenever matches exist.
- The fallback order is explicit and testable.

#### [x] 5. Repair shared semantics and keyboard navigation

**Value:** High  
**Effort:** Medium  
**Primary files:** shared blog-card partials, header partial, single/list templates,
theme-switcher partial, focused CSS

Implementation:

- Remove nested anchors from both blog-card partials. Use one clear link for the
  title and meaningful accessible names for linked images.
- Render summaries without placing an existing HTML paragraph inside another
  paragraph.
- Give About, Support, and other standalone pages one `h1`. Make card heading
  levels follow their surrounding section instead of jumping to `h5`.
- Replace the hidden-checkbox mobile menu trigger with a real button carrying
  `aria-expanded` and `aria-controls`, while preserving the current visual design.
- Add visible `:focus-visible` treatment for navigation, links, buttons, theme
  controls, and horizontally scrollable regions.
- Fix low-contrast article tags and the duplicate `class` attribute emitted by
  the theme-switcher partial.
- Preserve at least a 44 px mobile target for the menu control.

Acceptance criteria:

- A keyboard user can open, traverse, and close the mobile menu.
- Automated checks no longer report unnamed links, invalid nested links, heading
  order failures, or tag contrast failures on the homepage and an article.
- HTML validation reports no errors from the shared card or theme-switcher markup.
- The visible card and header design remains recognizably unchanged.

#### [x] 6. Deliver appropriately sized images and local partner assets

**Value:** High  
**Effort:** Medium  
**Primary files:** blog-card partials, avatar rendering, homepage content/config,
`assets/scss/custom.scss`

Implementation:

- Route blog card images and author avatars through the existing Hugo image
  processing partial or an equivalent local resource pipeline.
- Generate responsive widths and modern formats where supported. Include explicit
  width and height, and lazy-load below-the-fold media.
- Do not send full-size author images to a 24 px avatar slot.
- Replace `raw.githubusercontent.com` partner-logo and background references with
  the local copies already present in the repository.
- Preserve useful alt text and decorative-image behavior.

Acceptance criteria:

- No card thumbnail uses a multi-megabyte source at its rendered size.
- A 24 px avatar is delivered as a small thumbnail, not its original asset.
- Partner logos and CSS backgrounds load from the site origin.
- Re-running the same mobile Lighthouse test cuts the current homepage transfer
  size substantially, with a target below 2.5 MB and no visual regression.

#### [x] 7. Remove unused global JavaScript and reduce the search index

**Value:** High  
**Effort:** Medium  
**Primary files:** `config/_default/params.toml`, local script entry points,
search-index output template

Implementation:

- Verify generated selectors, then remove confirmed-unused Swiper, GLightbox,
  gallery/slider, accordion, tab, cookie, and generic modal assets from the global
  bundle.
- Remove or guard the unconditional testimonial-slider initialization.
- Keep the search and YouTube code that has active consumers.
- Generate search `content` from summaries or a bounded plain-text excerpt instead
  of complete article bodies.
- Prefer fetching the index when search is first opened. If that introduces too
  much theme-specific complexity, the smaller index alone is an acceptable first
  increment.

Acceptance criteria:

- All existing interactive features continue to work without console errors.
- The search index remains compatible with the current search code and is below
  150 KB raw.
- Search still matches titles, descriptions, tags, and useful content excerpts.
- Lighthouse no longer identifies the removed plugin code as unused JavaScript.

#### [x] 8. Complete homepage social metadata

**Value:** Medium  
**Effort:** Low  
**Primary files:** `config/_default/params.toml`, social image asset or a small SEO
template override

Implementation:

- Replace the generic metadata description with a concise description of the
  Collective's mission and current operating mode.
- Use a PNG or JPEG default social image with a suitable wide aspect ratio. The
  current SVG default is not emitted by the SEO module as `og:image`.
- Configure the valid site handle `@DeFiCollective_`.
- Remove or override the invalid `twitter:creator` value based on the organization
  name.
- Validate the resulting homepage Open Graph and Twitter tags in rendered HTML.

Acceptance criteria:

- The homepage emits absolute `og:image` and `twitter:image` URLs.
- Description and account metadata are valid and organization-specific.
- Article-specific images and descriptions still override the defaults.

#### [x] 9. Add narrow regression checks

**Value:** Medium  
**Effort:** Medium  
**Primary files:** package scripts, GitHub Actions workflow, small Playwright checks

Implementation:

- Add a generated-site internal link crawl after the Hugo build.
- Add focused browser checks at desktop and mobile widths for:
  - no document-level horizontal overflow;
  - an `h1` on representative page types;
  - keyboard-operable mobile navigation;
  - working theme selection and search opening;
  - no console errors on the homepage, Support page, and a table-heavy article.
- Keep performance auditing advisory rather than making variable Lighthouse scores
  a hard deployment gate.

Acceptance criteria:

- The checks run locally through documented package scripts and in pull requests.
- A broken internal link, reintroduced mobile overflow, or failed production build
  blocks merging.
- The test suite remains small enough to finish in a few minutes.

### P2 - Maintenance after the user-facing work

#### [x] 10. Clear narrow Hugo deprecations and unused integration residue

**Value:** Medium  
**Effort:** Low to Medium  
**Primary files:** local layout overrides, module imports/config, generated module
dependency files

Implementation:

- Replace `.Site.LanguageCode` with `.Site.Language.Locale` in active layouts.
- Replace `.Site.Data` with `hugo.Data` in active layouts.
- Update or locally override the specific upstream partials responsible for the
  warnings if a module update would pull in unrelated changes.
- Remove module integrations only when their shortcode, layout, and asset usage are
  all confirmed absent.
- Run `hugo mod tidy` and commit only intentional dependency-file changes.

Acceptance criteria:

- The production Hugo build completes without deprecation warnings from active
  site paths.
- Search, PWA behavior, footer social links, and the existing YouTube/notice
  shortcodes still work.
- No broad Tailwind or theme migration is included in this task.

## Recommended implementation sequence

Complete tasks 1 through 3 as one release-readiness milestone. They address the
deployment failure and regressions caused or exposed by the current content
changes.

Tasks 4, 5, and 8 form a low-risk content and semantics pass. Tasks 6 and 7 can
then be measured against the same Lighthouse setup, making their impact visible.
Add task 9 after the behaviors it protects are corrected. Task 10 is independent
maintenance and should not delay publishing.

## Explicitly deferred

The audit does not justify the following work now:

- A visual redesign or Hugo/theme replacement
- Tailwind 4 or other major front-end dependency upgrades
- A bulk Hugo module refresh
- Replacing Font Awesome or self-hosting all fonts
- A broad CSS purge or design-token rewrite
- Removing old source assets solely to reduce repository size
- Treating variable Lighthouse timing scores as release gates

These could all consume meaningful review time without improving the simplified
content experience as directly as the prioritized tasks above.

## Verification baseline

Use the following baseline when comparing future changes:

- Official Hugo `0.136.4`: build fails on `slugorcontentbasename`
- Official Hugo `0.164.0`: build succeeds, 147 pages generated
- `npm audit`: zero known vulnerabilities
- Homepage mobile Lighthouse: approximately 5.5 MB transfer, 39 images,
  accessibility 94
- H1 report mobile Lighthouse: accessibility 90 and document-level horizontal
  overflow
- Generated search index: approximately 516 KB raw

Record new measurements with the same viewport, production environment, and
network settings so comparisons remain meaningful.
