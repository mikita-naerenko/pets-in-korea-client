import { test, expect } from "@playwright/test";

test("search-component", async ({ page }) => {
  //   const searchButton = page.locator('[data-testid="search-button"]');
  await page.goto("https://pets-in-korea.com/");
  await page.getByTestId("search-button").click();
  //   await page.goto("http://localhost:3001/shelter");
  //   const test = page.locator("h1");
  //   await expect(test).toContainText("Приюты для животных в Южной Корее");

  //   expect(await searchButton.isVisible()).toBeTruthy();
  //   await searchButton.click();
  await expect(page.getByTestId("search-input-sm")).toBeVisible();
});

//   await page.goto("http://localhost:3001/");
//   // Find an element with the text 'About' and click on it
//   await page.click("text=Приюты");
//   // The new URL should be "/about" (baseURL is used there)
//   await expect(page).toHaveURL("http://localhost:3001/shelter");
//   // The new page should contain an h1 with "About"
//   await expect(page.locator("h1")).toContainText(
//     "Приюты для животных в Южной Корее"
//   );
