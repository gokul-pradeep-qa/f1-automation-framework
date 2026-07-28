class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, text) {
        await locator.fill(text);
    }

    async type(locator, text) {
        await locator.pressSequentially(text);
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async getCount(locator) {
        return await locator.count();
    }

    async wait(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

}

module.exports = BasePage;