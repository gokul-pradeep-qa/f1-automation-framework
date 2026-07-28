const OpenF1Client = require("../OpenF1Client");
const Endpoints = require("../Endpoints");

class DriverService {

    constructor() {
        this.client = new OpenF1Client();
    }

    async getDrivers() {

    return await this.client.getJson(
        Endpoints.DRIVERS
    );

}
}

module.exports = DriverService;