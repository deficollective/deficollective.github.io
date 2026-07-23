import { expect, test } from "@playwright/test";

const reportPath = "/blog/biannual-financial-report-h1-2026/";
const shortArticlePath = "/blog/cv-summit-2025/";
const representativePages = [
  "/",
  "/blog/",
  "/about/",
  "/impact/",
  "/policies/",
  "/support/",
  reportPath,
];
const publicRoutes = [
  "/impact/",
  "/policies/",
  "/media/",
  "/defi-protocol-guidelines/",
];

for (const path of representativePages) {
  test(`${path} has one page heading and no runtime errors`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto(path);

    await expect(page.locator("h1")).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

for (const width of [320, 390]) {
  test(`key pages have no document overflow at ${width}px`, async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();

    for (const path of representativePages) {
      await page.goto(path);
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
    }

    await context.close();
  });
}

test("mobile header is compact and navigation is keyboard operable", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 320, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");

  const header = page.locator(".header");
  const toggle = page.locator("#nav-toggle");
  const menu = page.locator("#nav-menu");

  expect((await header.boundingBox()).height).toBeLessThanOrEqual(72);
  expect((await toggle.boundingBox()).width).toBeGreaterThanOrEqual(44);
  expect((await page.locator(".header-search").boundingBox()).width).toBe(44);

  await expect(toggle).toHaveAccessibleName("Open navigation");
  await toggle.focus();
  await expect(toggle).toBeFocused();
  await toggle.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Close navigation");
  await expect(menu).toBeVisible();
  await expect(menu.getByText("Appearance", { exact: true })).toBeVisible();
  await expect(
    menu.getByRole("button", { name: "Toggle color theme" }),
  ).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toHaveAccessibleName("Open navigation");
  await expect(menu).toBeHidden();
  await expect(toggle).toBeFocused();

  await context.close();
});

test("archive is chronological, compact, and preserves image intent", async ({
  page,
}) => {
  await page.goto("/blog/");

  await expect(
    page.getByRole("heading", { name: "Reports & Updates" }),
  ).toBeVisible();
  await expect(page.locator(".article-card--archive")).toHaveCount(8);
  await expect(page.locator(".archive-entry__date")).toHaveCount(8);
  await expect(
    page.getByRole("navigation", { name: "Filter by type" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Browse all topics/ }),
  ).toHaveAttribute("href", "/tags/");

  const bannerImage = page
    .locator(".image-card--banner img.card-image")
    .first();
  await expect(bannerImage).toHaveCSS("object-fit", "contain");

  await page.goto("/blog/page/2/");
  const photograph = page.locator(".image-card--cover img.card-image");
  await expect(photograph).toHaveCount(1);
  await expect(photograph).toHaveCSS("object-fit", "cover");
});

test("long reports and short updates use the appropriate reading shells", async ({
  page,
}) => {
  await page.goto(reportPath);

  await expect(page.locator(".article-page--report")).toHaveCount(1);
  await expect(page.locator(".report-toc--desktop")).toBeVisible();
  await expect(page.locator(".report-toc--mobile")).toBeHidden();

  await page.goto(shortArticlePath);

  await expect(page.locator(".article-page--report")).toHaveCount(0);
  await expect(page.locator(".report-toc--desktop")).toHaveCount(0);
  await expect(page.locator(".report-toc--mobile")).toHaveCount(0);
});

test("mobile reports expose contents and discoverable comparison tables", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 320, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(reportPath);

  const details = page.locator(".report-toc--mobile");
  await expect(details).toBeVisible();
  await expect(page.locator(".report-toc--desktop")).toBeHidden();
  await expect(page.locator(".report-article__surface")).toHaveCSS(
    "padding",
    "16px",
  );

  await details.locator("summary").click();
  await expect(
    details.getByRole("navigation", { name: "Contents" }),
  ).toBeVisible();
  await details.getByRole("link", { name: "Expenses" }).click();
  await expect
    .poll(() =>
      page.evaluate(() => {
        const heading = document.querySelector("#expenses");
        const header = document.querySelector(".header");
        return (
          heading.getBoundingClientRect().top >=
          header.getBoundingClientRect().height
        );
      }),
    )
    .toBe(true);

  const table = page.locator(".table-scroll").first();
  await expect(page.locator(".table-scroll__hint").first()).toBeVisible();
  expect(
    await table.evaluate(
      (element) => element.scrollWidth > element.clientWidth,
    ),
  ).toBe(true);
  await expect(
    table.locator("tbody tr").first().locator("th[scope='row']"),
  ).toHaveCSS("position", "sticky");

  await context.close();
});

test("report tables are labelled keyboard-scrollable regions", async ({
  page,
}) => {
  await page.goto(reportPath);

  const tables = page.locator(".table-scroll");
  await expect(tables).toHaveCount(4);

  for (let index = 0; index < (await tables.count()); index += 1) {
    const wrapper = tables.nth(index);
    const captionId = await wrapper.getAttribute("aria-labelledby");

    await expect(wrapper).toHaveAttribute("role", "region");
    await expect(wrapper).toHaveAttribute("tabindex", "0");
    expect(captionId).toMatch(/^data-table-caption-/);
    await expect(page.locator(`#${captionId}`)).toBeVisible();
    await expect(wrapper).toHaveCSS("overflow-x", "auto");
  }
});

test("policy and support reference surfaces expose their critical actions", async ({
  page,
}) => {
  await page.goto("/policies/");

  await expect(page.locator("table")).toHaveCount(0);
  await expect(page.locator(".reference-document")).toHaveCount(4);
  await expect(page.getByRole("link", { name: "Read articles" })).toBeVisible();

  await page.goto("/support/");

  const address = "0xDc6f869d2D34E4aee3E89A51f2Af6D54F0F7f690";
  await expect(page.locator("#donation-address")).toHaveText(address);
  await expect(
    page.getByRole("link", { name: "Verify on Etherscan" }),
  ).toHaveAttribute("href", new RegExp(address, "i"));

  await page.getByRole("button", { name: "Copy address" }).click();
  await expect(page.locator("#copy-address-status")).toHaveText(
    "Address copied",
  );
});

test("search and theme controls remain functional", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Search" }).click();
  const searchInput = page.locator("#search-modal-input");
  await expect(searchInput).toBeVisible();
  await expect(page.locator(".search-modal")).toHaveAttribute(
    "aria-hidden",
    "false",
  );
  await page.keyboard.press("Escape");
  await expect(searchInput).toBeHidden();
  await expect(page.locator(".search-modal")).toHaveAttribute(
    "aria-hidden",
    "true",
  );

  const themeToggle = page.getByRole("button", {
    name: "Toggle color theme",
  });
  const initialTheme = await page.locator("html").getAttribute("class");
  await themeToggle.click();
  await expect
    .poll(() => page.locator("html").getAttribute("class"))
    .not.toBe(initialTheme);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("theme")))
    .toMatch(/^(dark|light)$/);
});

test("reading and footer color tokens meet AA contrast", async ({ page }) => {
  await page.goto("/");

  const ratios = await page.evaluate(() => {
    const contrast = (foreground, background) => {
      const channels = (color) =>
        color
          .match(/[0-9a-f]{2}/gi)
          .map((channel) => Number.parseInt(channel, 16) / 255)
          .map((channel) =>
            channel <= 0.04045
              ? channel / 12.92
              : ((channel + 0.055) / 1.055) ** 2.4,
          );
      const luminance = (color) => {
        const [red, green, blue] = channels(color);
        return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
      };
      const values = [luminance(foreground), luminance(background)].sort(
        (a, b) => b - a,
      );
      return (values[0] + 0.05) / (values[1] + 0.05);
    };

    const root = getComputedStyle(document.documentElement);
    return {
      body: contrast(
        root.getPropertyValue("--text-default").trim(),
        root.getPropertyValue("--theme-header").trim(),
      ),
      footer: contrast(
        root.getPropertyValue("--text-footer").trim(),
        root.getPropertyValue("--body-color").trim(),
      ),
    };
  });

  expect(ratios.body).toBeGreaterThanOrEqual(4.5);
  expect(ratios.footer).toBeGreaterThanOrEqual(4.5);
});

test("public reference routes resolve to useful pages", async ({ request }) => {
  for (const path of publicRoutes) {
    const response = await request.get(path);
    expect(response.ok(), `${path} returned ${response.status()}`).toBeTruthy();
  }
});

test("related articles are stable, unique, and exclude the current page", async ({
  page,
}) => {
  await page.goto(reportPath);

  const relatedLinks = page
    .getByRole("heading", { name: "Related Posts" })
    .locator("..")
    .locator("article h3 a[href*='/blog/']");
  const firstPass = [
    ...new Set(
      await relatedLinks.evaluateAll((links) =>
        links.map((link) => link.pathname),
      ),
    ),
  ];

  await page.reload();

  const secondPass = [
    ...new Set(
      await relatedLinks.evaluateAll((links) =>
        links.map((link) => link.pathname),
      ),
    ),
  ];

  expect(firstPass.length).toBeGreaterThan(0);
  expect(firstPass).toEqual(secondPass);
  expect(firstPass).not.toContain(reportPath);
});
