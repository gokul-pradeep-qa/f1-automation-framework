const OpenF1Client = require("../OpenF1Client");
const Endpoints = require("../Endpoints");

class LapService {

    constructor() {
        this.client = new OpenF1Client();
    }

    async getDriverLaps(sessionKey, driverNumber) {

        return await this.client.getJson(
    `${Endpoints.LAPS}?session_key=${sessionKey}&driver_number=${driverNumber}`
);

    }
}

module.exports = LapService;