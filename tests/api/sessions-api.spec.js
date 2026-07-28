const { test, expect } = require("@playwright/test");
const SessionService = require("../../api/services/SessionService");

test("Verify Latest Session API", async () => {

    const sessionService = new SessionService();

    const sessions = await sessionService.getLatestSession();

    expect(sessions.length).toBeGreaterThan(0);

    const session = sessions[0];

    expect(session.session_name).toBeTruthy();
    expect(session.country_name).toBeTruthy();
    expect(session.location).toBeTruthy();
    expect(session.session_key).toBeTruthy();

    console.log(session);

});