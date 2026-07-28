const OpenF1Client = require("../OpenF1Client");
const Endpoints = require("../Endpoints");

class PositionService {

    constructor() {
        this.client = new OpenF1Client();
    }

    async getPositions(sessionKey) {

        return await this.client.getJson(
    `${Endpoints.POSITIONS}?session_key=${sessionKey}`
);

    }

   async getDriverPositions(sessionKey, driverNumber) {

    let response = await this.client.get(
        `${Endpoints.POSITIONS}?session_key=${sessionKey}&driver_number=${driverNumber}`
    );

    if (response.status() === 429) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        response = await this.client.get(
            `${Endpoints.POSITIONS}?session_key=${sessionKey}&driver_number=${driverNumber}`
        );
    }

    if (!response.ok()) {
        throw new Error(
            `Driver Positions API failed (${response.status()})`
        );
    }

    return await response.json();
}

}

module.exports = PositionService;