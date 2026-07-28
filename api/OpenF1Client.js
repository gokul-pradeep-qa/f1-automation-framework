const { request } = require("@playwright/test");
const env = require("../config/env");

class OpenF1Client {

    async createContext() {
        return await request.newContext();
    }

    async get(endpoint) {

        const api = await this.createContext();

        return await api.get(
            `${env.OPENF1_URL}${endpoint}`
        );

    }

    async getJson(endpoint) {

        const response = await this.get(endpoint);

        if (!response.ok()) {

            throw new Error(
                `GET ${endpoint} failed (${response.status()})`
            );

        }

        return await response.json();

    }

}

module.exports = OpenF1Client;