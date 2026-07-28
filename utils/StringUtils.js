function toTitleCase(name) {
    return name
        .toLowerCase()
        .replace(/\b\w/g, letter => letter.toUpperCase());
}

module.exports = {
    toTitleCase
};