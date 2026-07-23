import { expect, test } from "@playwright/test";

const reportPath = "/blog/biannual-financial-report-h1-2026/";
const representativePages = ["/", "/about/", "/support/", reportPath];
const retiredRoutes = [
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

for (const width of [320, 360, 390]) {
  for (const path of ["/support/", reportPath]) {
    test(`${path} has no document overflow at ${width}px`, async ({
      browser,
    }) => {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
      });
      const page = await context.newPage();

      await page.goto(path);

      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);

      await context.close();
    });
  }
}

test("report tables are keyboard-scrollable regions", async ({ page }) => {
  await page.goto(reportPath);

  const tables = page.locator("table");
  await expect(tables).toHaveCount(4);

  for (let index = 0; index < (await tables.count()); index += 1) {
    const wrapper = tables.nth(index).locator("..");
    await expect(wrapper).toHaveAttribute("role", "region");
    await expect(wrapper).toHaveAttribute("tabindex", "0");
    await expect(wrapper).toHaveAttribute("aria-label", /table/i);
    await expect(wrapper).toHaveCSS("overflow-x", "auto");
  }
});

test("mobile navigation is keyboard operable", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
  });
  const page = await context.newPage();
  await page.goto("/");

  const toggle = page.locator("#nav-toggle");
  const menu = page.locator("#nav-menu");

  await expect(toggle).toHaveAccessibleName("Open navigation");
  await toggle.focus();
  await expect(toggle).toBeFocused();
  await toggle.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Close navigation");
  await expect(menu).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toHaveAccessibleName("Open navigation");
  await expect(menu).toBeHidden();
  await expect(toggle).toBeFocused();

  await context.close();
});

test("search and theme controls remain functional", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "search" }).click();
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

  const themeToggle = page.getByRole("button", { name: "Toggle color theme" });
  const initialTheme = await page.locator("html").getAttribute("class");
  await themeToggle.click();
  await expect
    .poll(() => page.locator("html").getAttribute("class"))
    .not.toBe(initialTheme);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("theme")))
    .toMatch(/^(dark|light)$/);
});

test("retired public routes resolve to useful pages", async ({ request }) => {
  for (const path of retiredRoutes) {
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
