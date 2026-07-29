class Logger {

    static info(message) {
        console.log(`[INFO] ${message}`);
    }

    static success(message) {
        console.log(`[SUCCESS] ${message}`);
    }

    static warning(message) {
        console.warn(`[WARNING] ${message}`);
    }

    static error(message) {
        console.error(`[ERROR] ${message}`);
    }

}

module.exports = Logger;