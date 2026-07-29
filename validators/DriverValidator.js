const ApiAssertions = require("../utils/ApiAssertions");

class DriverValidator {

    static validate(driver) {

        ApiAssertions.expectIsObject(driver);

        ApiAssertions.expectProperties(driver, [
            "full_name",
            "driver_number",
            "team_name",
            "first_name",
            "last_name",
            "name_acronym"
        ]);

    }

}

module.exports = DriverValidator;