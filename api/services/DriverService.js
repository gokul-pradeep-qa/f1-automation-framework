const BaseApiService = require("../BaseApiService");
const Endpoints = require("../Endpoints");
const Logger = require("../../utils/Logger");
class DriverService extends BaseApiService  {

    async getDrivers() {

    Logger.info("Fetching latest drivers...");

    const drivers = await this.client.getJson(Endpoints.DRIVERS);

    Logger.success(`Retrieved ${drivers.length} drivers`);

    return drivers;
}
}

module.exports = DriverService;