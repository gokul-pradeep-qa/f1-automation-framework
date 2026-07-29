const { test, expect } = require("@playwright/test");

const SessionService = require("../../api/services/SessionService");
const LapService = require("../../api/services/LapService");
const ApiAssertions = require("../../utils/ApiAssertions");


test("Verify Driver Lap Data", async () => {

    const sessionService = new SessionService();
    const lapService = new LapService();

    const sessions = await sessionService.getLatestSession();

    expect(sessions.length).toBeGreaterThan(0);

    const sessionKey = sessions[0].session_key;

    const laps = await lapService.getDriverLaps(sessionKey, 1);
    
    ApiAssertions.expectNotEmpty(laps);

    const lap = laps[0];

    expect(lap).toHaveProperty("lap_number");
    expect(lap).toHaveProperty("lap_duration");
    expect(lap).toHaveProperty("duration_sector_1");
    expect(lap).toHaveProperty("duration_sector_2");
    expect(lap).toHaveProperty("duration_sector_3");

    console.log(lap);

});