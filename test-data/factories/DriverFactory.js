class DriverFactory {

    static createDriver(overrides = {}) {

        return {
            full_name: "Max VERSTAPPEN",
            driver_number: 3,
            team_name: "Red Bull Racing",
            first_name: "Max",
            last_name: "Verstappen",
            name_acronym: "VER",
            ...overrides
        };

    }

}

module.exports = DriverFactory;