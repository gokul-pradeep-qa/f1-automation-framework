const { test, expect } = require("@playwright/test");
const DriverFactory = require("../../test-data/factories/DriverFactory");

test("Driver Factory should create a valid driver", async () => {

    const driver = DriverFactory.createDriver({
        team_name: "Ferrari"
    });

    console.log(driver);

    expect(driver.team_name).toBe("Ferrari");
    expect(driver.full_name).toBe("Max VERSTAPPEN");
    expect(driver.driver_number).toBe(3);

});