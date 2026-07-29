const BaseApiService = require("../BaseApiService");
const Endpoints = require("../Endpoints");
const Cache = require("../../utils/Cache");

class SessionService extends BaseApiService {

    async getLatestSession() {

    const cacheKey = "latest-session";

    if (Cache.has(cacheKey)) {
        return Cache.get(cacheKey);
    }

    const session = await this.client.getJson(Endpoints.SESSIONS);

    Cache.set(cacheKey, session);

    return session;


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