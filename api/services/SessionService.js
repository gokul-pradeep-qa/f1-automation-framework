const OpenF1Client = require("../OpenF1Client");
const Endpoints = require("../Endpoints");

class SessionService {

    constructor() {
        this.client = new OpenF1Client();
    }

    async getLatestSession() {

        return await this.client.getJson(
    `${Endpoints.SESSIONS}?session_key=latest`
);

    }
    async getSessionsByYear(year) {

        const response = await this.client.get(
            `${Endpoints.SESSIONS}?year=${year}`
        );

        if (!response.ok()) {
            throw new Error(
                `Sessions API failed (${response.status()})`
            );
        }

        return await response.json();
    }

    async getSessionsByCountry(country) {

        const response = await this.client.get(
            `${Endpoints.SESSIONS}?country_name=${encodeURIComponent(country)}`
        );

        if (!response.ok()) {
            throw new Error(
                `Sessions API failed (${response.status()})`
            );
        }

        return await response.json();
    }

}

module.exports = SessionService;