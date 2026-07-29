const { test, expect } = require("@playwright/test");
const DriverService = require("../../api/services/DriverService");
const ApiAssertions = require("../../utils/ApiAssertions");
const DriverValidator = require("../../validators/DriverValidator");



test("Verify Drivers API", async () => {

    const driverService = new DriverService();

    const drivers = await driverService.getDrivers();

    
    console.log(drivers);
console.log(typeof drivers);
console.log(Array.isArray(drivers));

ApiAssertions.expectNotEmpty(drivers);

const driver = drivers[0];

DriverValidator.validate(driver);

});