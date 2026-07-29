const { test, expect } = require("@playwright/test");

const SessionService = require("../../api/services/SessionService");
const PositionService = require("../../api/services/PositionService");
const ApiAssertions = require("../../utils/ApiAssertions");

test("Verify Latest Session Positions", async () => {

    const sessionService = new SessionService();
    const positionService = new PositionService();

    const sessions = await sessionService.getLatestSession();

     ApiAssertions.expectNotEmpty(sessions);

    const sessionKey = sessions[0].session_key;

    const positions = await positionService.getPositions(sessionKey);

     ApiAssertions.expectNotEmpty(positions);

    console.log(positions[0]);   

});

test("Verify Max Verstappen Position Data", async () => {

    const sessionService = new SessionService();
    const positionService = new PositionService();

    const sessions = await sessionService.getLatestSession();

    const sessionKey = sessions[0].session_key;

    const positions =
        await positionService.getDriverPositions(sessionKey, 1);

    expect(positions.length).toBeGreaterThan(0);

    console.log(positions[0]);

});