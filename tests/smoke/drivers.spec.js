const { test, expect } = require("@playwright/test");
const DriversPage = require("../../pages/DriversPage");
const driver = require("../../test-data/drivers.json");

test("Verify Drivers Page", async ({ page }) => {

    const drivers = new DriversPage(page);

    await drivers.open();

    await expect(drivers.heading).toBeVisible();

    await expect(
        drivers.getDriver(driver.driverName)
    ).toBeVisible();

    const count = await drivers.getDriverCount();

    expect(count).toBeGreaterThan(0);

});