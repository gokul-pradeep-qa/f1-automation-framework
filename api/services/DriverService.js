const BaseApiService = require("../BaseApiService");
const Endpoints = require("../Endpoints");
class DriverService extends BaseApiService  {

    async getDrivers() {

    return await this.client.getJson(
        Endpoints.DRIVERS
    );

}
}

module.exports = DriverService;