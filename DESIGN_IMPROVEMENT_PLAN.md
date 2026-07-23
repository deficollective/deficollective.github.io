# DeFi Collective Design Improvement Plan

Date: July 23, 2026

Status: Implemented and verified on July 23, 2026.

## Purpose

This plan proposes focused design improvements to build on the site's existing
modernization work. It preserves the recognizable ant motif, custom artwork,
Fredoka typography, and violet identity while improving legibility, mobile
composition, content discovery, and long-form reading.

It is not a broad redesign. The work should continue to feel direct,
community-operated, and pragmatic rather than resembling a SaaS marketing site,
a trend-led crypto landing page, or a dense institutional portal.

Effort estimates assume implementation, responsive validation, light and dark
mode checks, and focused accessibility testing.

## Design Direction

The existing visual identity is distinctive and worth retaining. The highest
value lies in making content-heavy surfaces feel as deliberate as the homepage:

- Preserve the logo, ant imagery, core violet palette, and friendly character.
- Give brand moments and public-reference content different typographic roles.
- Improve reading contrast without muting the established identity.
- Reduce mobile space consumption and eliminate cropped or ambiguous content.
- Make archives, reports, policies, and support information easier to scan.
- Prefer unframed layouts and structured rows over introducing more card grids.

## Quick Wins

### 1. Stop Cropping Article-Cover Typography

**Expected effort:** 2–4 hours  
**Expected result:** High

The current article covers are wide banner assets, commonly `1654x452`, but card
images are displayed in a fixed `180px`-high cover crop. This cuts titles and
subtitles off at both desktop and mobile widths.

Implementation:

- Add explicit image presentation modes such as `banner`, `cover`, and
  `photograph`.
- Use `contain` or the source aspect ratio for text-bearing banner artwork.
- Retain `cover` for photographs and artwork that is safe to crop.
- Give the image region a stable aspect ratio so cards do not shift while images
  load.
- Keep the visible HTML title below the image; do not rely on text embedded in an
  image for accessibility.

Primary files:

- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- [`themes/hugoplate/layouts/partials/components/blog-card.html`](themes/hugoplate/layouts/partials/components/blog-card.html)
- [`themes/hugoplate/layouts/partials/components/blog-card-minimal.html`](themes/hugoplate/layouts/partials/components/blog-card-minimal.html)

Acceptance criteria:

- No text embedded in the current leading article covers is clipped at 320, 390,
  768, or 1440px.
- Photographic thumbnails retain an intentional crop.
- Card dimensions remain stable during image loading.

### 2. Strengthen the Light-Mode Reading Palette

**Expected effort:** 2–4 hours  
**Expected result:** High

The current `#6d60b9` body text measures approximately `3.9:1` against the
dominant `#dedbff` lavender surface. Normal body text should meet at least
WCAG 2.2 AA's `4.5:1` contrast requirement.

Implementation:

- Introduce separate tokens for body text, muted text, links, headings, and
  footer text.
- Use a darker violet, approximately `#5f4da9` or an equivalent verified token,
  for body text on the lavender background.
- Retain brighter violet for headings, links, controls, and brand accents.
- Correct footer text independently rather than reusing a light-surface token.
- Remove contrast variation caused by placing body copy over the brightest part
  of the dark-mode gradient.
- Replace the hero's gradient text with one solid lilac or magenta accent sampled
  from the existing brand palette.

Primary files:

- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- [`data/theme.json`](data/theme.json)

Acceptance criteria:

- Normal body, navigation, footer, and supporting text reach at least `4.5:1`.
- Large display text reaches at least `3:1`.
- Both themes retain the established violet identity.
- Links remain distinguishable without relying on color alone.

### 3. Give the Existing Fonts Clearer Roles

**Expected effort:** Half a day  
**Expected result:** High

Fredoka gives the brand warmth and personality, but using it for nearly every
heading makes reports, policy documents, navigation, and dense cards feel less
precise than their content requires.

Implementation:

- Keep Fredoka for the homepage hero, major brand statements, and selected
  section titles.
- Use Red Hat Display for navigation, card titles, report headings, policy
  headings, metadata, and dense factual content.
- Cap ordinary prose at approximately `68–72ch`.
- Apply balanced wrapping to display headings and improved wrapping to prose.
- Reduce article padding from `32px` to `16–20px` below 540px.
- Replace repeated uppercase, widely tracked category labels with quieter
  metadata styling.

Primary files:

- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- [`themes/hugoplate/assets/scss/base.scss`](themes/hugoplate/assets/scss/base.scss)
- Shared page and card templates under
  [`themes/hugoplate/layouts`](themes/hugoplate/layouts)

Acceptance criteria:

- Brand pages remain friendly and recognizable.
- Reports and policies feel more precise without introducing another font.
- Prose line lengths remain within the intended range on desktop.
- Long headings wrap without clipping at supported mobile widths.

### 4. Compact the Mobile Header and First Fold

**Expected effort:** Half a day  
**Expected result:** High

The mobile header currently consumes roughly 170px, with a large wordmark above
the utility controls. The homepage also retains generous hero height after much
of the decorative ant composition is no longer visible.

Implementation:

- Use a single mobile header row approximately `64–72px` high.
- Scale the wordmark to fit without dominating the row.
- Keep Search and Menu immediately available.
- Move theme selection into the expanded menu if all controls cannot fit
  comfortably.
- Retain 44px minimum control targets and the existing focus treatment.
- Reduce mobile hero padding where it produces empty space rather than revealing
  artwork.
- Correct the 320px homepage headline and blog-pagination overflow as part of the
  responsive pass.

Primary files:

- [`themes/hugoplate/layouts/partials/essentials/header.html`](themes/hugoplate/layouts/partials/essentials/header.html)
- [`themes/hugoplate/assets/scss/navigation.scss`](themes/hugoplate/assets/scss/navigation.scss)
- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- [`themes/hugoplate/layouts/partials/components/pagination.html`](themes/hugoplate/layouts/partials/components/pagination.html)

Acceptance criteria:

- The closed mobile header is no taller than 72px at 320 and 390px.
- Search and navigation remain keyboard-operable.
- Menu state and focus restoration continue to work.
- The homepage and blog have no document-level horizontal overflow at 320px.

### 5. Make Mobile Documents Visibly Navigable

**Expected effort:** Half a day  
**Expected result:** High

The modernization work correctly contains wide tables in accessible scroll
regions. The remaining design issue is discoverability: readers may not realize
that additional columns exist beyond the visible edge.

Implementation:

- Add a restrained edge shadow or continuation cue to horizontally scrollable
  tables.
- Provide useful captions or short labels that explain the table's purpose.
- Keep the first column sticky where it materially helps comparison.
- Avoid shrinking financial data until it becomes difficult to read.
- Render the two-column Policies table as stacked document rows on mobile.
- Preserve keyboard focus and visible focus treatment on scroll regions.

Primary files:

- [`layouts/_markup/render-table.html`](layouts/_markup/render-table.html)
- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- [`content/english/pages/policies.md`](content/english/pages/policies.md)

Acceptance criteria:

- Table overflow is visually discoverable without obscuring data.
- Every table remains keyboard-scrollable and properly labelled.
- Policy document names and versions are fully visible at 320px.
- Desktop tables remain compact and easy to compare.

## Medium-Effort, High-Result Work

### 1. Rebuild the Blog as a Chronological Archive

**Expected effort:** 1–2 days  
**Expected result:** Very high

The current archive shows three narrow cards beside exhaustive Categories and
Tags widgets. This produces large empty areas on desktop and makes the taxonomy
stack longer than the result set on mobile.

Implementation:

- Rename the visible page heading from `Blog Posts` to `Reports & Updates`.
- Show 6–9 entries per page.
- Use either a compact chronological feed or a restrained two-column layout.
- Lead each entry with date, content type, title, and a one-line summary.
- Keep a small set of useful filters, such as Reports, Research, Announcements,
  and Policy.
- Move the complete tag cloud to a separate index or searchable filter.
- Preserve existing category and tag URLs for inbound links.
- Use cards only where the image and grouped metadata make the boundary useful.

Primary files:

- [`themes/hugoplate/layouts/blog/list.html`](themes/hugoplate/layouts/blog/list.html)
- [`themes/hugoplate/layouts/partials/components/blog-card.html`](themes/hugoplate/layouts/partials/components/blog-card.html)
- [`themes/hugoplate/layouts/partials/widgets/categories.html`](themes/hugoplate/layouts/partials/widgets/categories.html)
- [`themes/hugoplate/layouts/partials/widgets/tags.html`](themes/hugoplate/layouts/partials/widgets/tags.html)
- [`hugo.toml`](hugo.toml)

Acceptance criteria:

- At least six useful entries are visible before pagination.
- Taxonomy controls do not dominate the result list.
- Archive order is clearly chronological.
- The mobile archive is materially shorter and has no horizontal overflow.
- Existing taxonomy URLs continue to work.

### 2. Create a Purpose-Built Long-Form Report Template

**Expected effort:** 1–2 days  
**Expected result:** High

Financial and activity reports are among the site's most important content, but
they currently use the same general article shell as shorter updates.

Implementation:

- Use a `68–72ch` reading column.
- Add a slim sticky table of contents on desktop for reports with enough
  headings to justify it.
- Provide a compact, collapsible Contents control on mobile.
- Add captions and visible continuation cues to financial tables.
- Support an optional author-written `In brief` summary in front matter.
- Keep the report title, author, date, and category visible without turning the
  header into a dashboard.
- Avoid hero metrics, automatically extracted financial claims, and decorative
  data visualizations.

Primary files:

- [`themes/hugoplate/layouts/blog/single.html`](themes/hugoplate/layouts/blog/single.html)
- [`assets/scss/custom.scss`](assets/scss/custom.scss)
- Report content under
  [`content/english/blog`](content/english/blog)

Acceptance criteria:

- Readers can reach major report sections without scanning the entire document.
- The table of contents does not appear on short articles.
- Mobile prose retains a comfortable width and padding.
- Financial tables remain readable and accessible.
- The template works with reports that do not provide an `In brief` summary.

### 3. Turn Reference and Action Pages Into Structured Surfaces

**Expected effort:** 1–2 days  
**Expected result:** High

Impact, Policies, Support, and About contain valuable information but rely
heavily on undifferentiated prose or generic cards.

#### Impact

- Present initiatives as a concise register with name, active or retired status,
  period, outcome, and final source.
- Distinguish current context from historical records.
- Ensure the reports link includes the current biannual reporting cadence.

#### Policies

- Replace the generic table presentation with document rows where appropriate.
- Show current or archived status, version, publication date, and a clear
  document action.
- Use a stacked layout on mobile.

#### Support

- Present the ENS name and full address as a verifiable action area.
- Add a copy control with clear success and error states.
- List supported networks in a compact, scannable format.
- Keep the block-explorer verification link and Donation Terms close to the
  action.
- Do not imply that sending unsupported assets or using an unsupported network
  is safe.

#### About

- Left-align biography text for easier reading.
- Normalize portrait aspect ratios and image treatment.
- Preserve the existing people-focused cards without adding nested cards.

Primary files:

- [`content/english/pages/impact.md`](content/english/pages/impact.md)
- [`content/english/pages/policies.md`](content/english/pages/policies.md)
- [`content/english/pages/support.md`](content/english/pages/support.md)
- [`content/english/about/_index.md`](content/english/about/_index.md)
- Relevant templates under
  [`themes/hugoplate/layouts`](themes/hugoplate/layouts)

Acceptance criteria:

- Current and historical information can be distinguished at a glance.
- Policy status, version, and document action remain visible on mobile.
- A donor can copy and independently verify the intended destination.
- Support actions include clear terms and network context.
- Board biographies are easier to scan and have consistent imagery.

## Recommended Sequence

### Phase 1: Visual and Responsive Hygiene

**Estimated duration:** 1 day

1. Correct light and dark mode contrast.
2. Fix article-cover presentation.
3. Establish typography roles.
4. Compact the mobile header and homepage first fold.
5. Finish table cues and mobile policy rows.

### Phase 2: Archive and Reading Experience

**Estimated duration:** 2–3 days

1. Rebuild the blog archive.
2. Create the long-form report template.
3. Validate representative short articles and financial reports.

### Phase 3: Reference and Action Pages

**Estimated duration:** 1–2 days

1. Structure the Impact archive.
2. Improve Policies presentation.
3. Create the Support action area.
4. Normalize About biographies.

## Validation Matrix

Validate the completed work at:

- Viewports: 320, 390, 768, and 1440px.
- Themes: light and dark.
- Input: keyboard, pointer, and touch emulation.
- Content: long titles, missing images, photographic images, text-bearing cover
  art, short articles, and table-heavy reports.

Required checks:

- No document-level horizontal overflow.
- Body and supporting text meet WCAG 2.2 AA contrast.
- Interactive controls have visible focus and at least 44px touch targets where
  required.
- Search, mobile navigation, theme selection, pagination, and table scrolling
  remain operable.
- Text-bearing images are not cropped.
- Prose and headings fit their containers without collision or clipping.
- Reduced-motion preferences remain respected by any existing motion.

## Explicitly Out of Scope

The following work should not be included in this plan:

- A new logo or brand identity.
- A new font stack.
- A broad palette replacement.
- A framework, theme, or Tailwind migration.
- Decorative 3D scenes, illustration expansion, or an animation pass.
- Dashboard-style hero metrics.
- Additional generic card grids.
- A broad rewrite of historical content.

These changes would add review and regression cost without improving the core
reading, archive, and action experiences as directly as the work above.
