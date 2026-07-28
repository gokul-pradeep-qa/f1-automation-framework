const { test, expect } = require("@playwright/test");

const SessionService = require("../../api/services/SessionService");
const LapService = require("../../api/services/LapService");
const { getFastestLap } = require("../../utils/F1Utils");

test("Find Max Verstappen fastest lap", async () => {

    const sessionService = new SessionService();
    const lapService = new LapService();

    const sessions = await sessionService.getLatestSession();

    const sessionKey = sessions[0].session_key;

    const laps =
        await lapService.getDriverLaps(sessionKey, 1);

    const fastestLap = getFastestLap(laps);

    expect(fastestLap).toBeDefined();

    console.log(fastestLap);

});