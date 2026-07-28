const BaseApiService = require("../BaseApiService");
const Endpoints = require("../Endpoints");

class LapService extends BaseApiService {

    async getDriverLaps(sessionKey, driverNumber) {

        return await this.client.getJson(
    `${Endpoints.LAPS}?session_key=${sessionKey}&driver_number=${driverNumber}`
);

    }
}

module.exports = LapService;