const BaseApiService = require("../BaseApiService");
const Endpoints = require("../Endpoints");

class MeetingService extends BaseApiService {

    async getLatestMeeting() {

        return await this.client.getJson(
    `${Endpoints.MEETINGS}?meeting_key=latest`
);

    }


    async getMeetingsByYear(year) {

        const response = await this.client.get(
            `${Endpoints.MEETINGS}?year=${year}`
        );

        if (!response.ok()) {
            throw new Error(
                `Meetings API failed (${response.status()})`
            );
        }

        return await response.json();
    }

    async getMeetingByCountry(country) {

        const response = await this.client.get(
            `${Endpoints.MEETINGS}?country_name=${encodeURIComponent(country)}`
        );

        if (!response.ok()) {
            throw new Error(
                `Meetings API failed (${response.status()})`
            );
        }

        return await response.json();
    }

}

module.exports = MeetingService;