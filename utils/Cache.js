class Cache {

    static store = new Map();

    static get(key) {
        return this.store.get(key);
    }

    static set(key, value) {
        this.store.set(key, value);
    }

    static has(key) {
        return this.store.has(key);
    }

    static clear() {
        this.store.clear();
    }

}

module.exports = Cache;