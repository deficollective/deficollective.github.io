import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/browser",
  outputDir: ".tmp/playwright-results",
  reporter: "line",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: "http://127.0.0.1:1314",
    serviceWorkers: "block",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command:
      "hugo server --environment production --minify --watch=false --disableLiveReload --renderToMemory --noHTTPCache --bind 127.0.0.1 --port 1314 --baseURL http://127.0.0.1:1314",
    url: "http://127.0.0.1:1314",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
