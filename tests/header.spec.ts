import { test, expect } from "@playwright/test";

test("search-component", async ({ page }) => {
  //   const searchButton = page.locator('[data-testid="search-button"]');
  await page.goto("https://pets-in-korea.com/");
  await page.getByTestId("search-button").click();
  await expect(page.getByTestId("search-button-icon")).not.toBeVisible();
  await expect(page.getByTestId("close-search-button-icon")).toBeVisible();
  await expect(page.getByTestId("search-input-sm")).toBeVisible();
});
