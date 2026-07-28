const { test, expect } = require('@playwright/test');
const TeamsPage = require('../../pages/TeamsPage');

test('Verify Teams Page', async ({ page }) => {

    const teamsPage = new TeamsPage(page);

    await teamsPage.open();

    const title = await page.title();

    expect(title).toContain('Teams');

});