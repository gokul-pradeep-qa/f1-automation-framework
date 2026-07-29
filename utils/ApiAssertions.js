const { expect } = require("@playwright/test");

class ApiAssertions {

    static expectNotEmpty(data) {

        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

    }

    static expectProperties(object, properties) {

    properties.forEach(property => {
        expect(object).toHaveProperty(property);
    });

}

    static expectIsObject(object) {

        expect(object).toBeTruthy();
        expect(typeof object).toBe("object");

    }

}

module.exports = ApiAssertions;