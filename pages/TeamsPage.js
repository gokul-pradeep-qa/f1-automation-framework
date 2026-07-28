const BasePage = require('./BasePage');
const env = require('../config/env');

class TeamsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async open() {
        await this.navigate(`${env.BASE_URL}/en/teams`);
    }

}

module.exports = TeamsPage;