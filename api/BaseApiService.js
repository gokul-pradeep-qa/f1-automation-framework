const OpenF1Client = require("./services/OpenF1Client");

class BaseApiService {

    constructor() {
        this.client = new OpenF1Client();
    }

}

module.exports = BaseApiService;