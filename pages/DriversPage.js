const BasePage = require("./BasePage");
const env = require("../config/env");

class DriversPage extends BasePage {

    constructor(page) {
        super(page);

        this.heading = page.getByRole("heading", {
            name: /Drivers/i
        });

        this.driverCards = page.locator('main a[href^="/en/drivers/"]');
    }

    async open() {
        await this.navigate(`${env.BASE_URL}/en/drivers`);
    }

    getDriver(driverName) {
        return this.page.getByRole("link", {
            name: new RegExp(driverName, "i")
        });
    }

    async getDriverCount() {
        return await this.driverCards.count();
    }

}

module.exports = DriversPage;