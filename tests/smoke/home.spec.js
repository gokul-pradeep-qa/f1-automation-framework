const { test, expect } = require("@playwright/test");
const HomePage = require("../../pages/HomePage");

test("Verify Formula1 Home Page", async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    const title = await home.verifyTitle();

    expect(title).toContain("Formula");
});