const { test, expect } = require("@playwright/test");

const DriversPage = require("../../pages/DriversPage");
const DriverService = require("../../api/services/DriverService");
const { toTitleCase } = require("../../utils/StringUtils");

test("Verify all API drivers are displayed in UI", async ({ page }) => {

    const driversPage = new DriversPage(page);
    const driverService = new DriverService();

    const apiDrivers = await driverService.getDrivers();

    await driversPage.open();

    for (const driver of apiDrivers) {

        const driverName = toTitleCase(driver.full_name);

        await expect(
            driversPage.getDriver(driverName)
        ).toBeVisible();

    }

});