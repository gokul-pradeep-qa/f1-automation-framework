const BasePage = require("./BasePage");
const env = require("../config/env");

class HomePage extends BasePage {

    constructor(page) {
        super(page);
    }

    async open() {
        await this.navigate(env.BASE_URL);
    }

    async verifyTitle() {
        return this.getTitle();
    }
}

module.exports = HomePage;