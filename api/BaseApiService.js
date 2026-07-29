const OpenF1Client = require("./OpenF1Client");

class BaseApiService {

    constructor() {
        this.client = new OpenF1Client();
    }

}

module.exports = BaseApiService;