const { test, expect } = require("@playwright/test");
const DriverService = require("../../api/services/DriverService");

test("Verify Drivers API", async () => {

    const driverService = new DriverService();

    const drivers = await driverService.getDrivers();

    
    console.log(drivers);
console.log(typeof drivers);
console.log(Array.isArray(drivers));

    expect(drivers.length).toBeGreaterThan(0);


});