const { test, expect } = require("@playwright/test");

const SessionService = require("../../api/services/SessionService");
const MeetingService = require("../../api/services/MeetingService");
const DriverService = require("../../api/services/DriverService");
const PositionService = require("../../api/services/PositionService");
const LapService = require("../../api/services/LapService");

test("Validate latest race weekend", async () => {

    const sessionService = new SessionService();
    const meetingService = new MeetingService();
    const driverService = new DriverService();
    const positionService = new PositionService();
    const lapService = new LapService();

    // Latest Session
    const sessions = await sessionService.getLatestSession();
    expect(sessions.length).toBeGreaterThan(0);

    const sessionKey = sessions[0].session_key;

    // Latest Meeting
    const meetings = await meetingService.getLatestMeeting();
    expect(meetings.length).toBeGreaterThan(0);

    // Drivers
    const drivers = await driverService.getDrivers();
    expect(drivers.length).toBeGreaterThan(0);

    // Positions
    const positions = await positionService.getPositions(sessionKey);
    expect(positions.length).toBeGreaterThan(0);

    // Max Verstappen Laps
    const laps = await lapService.getDriverLaps(sessionKey, 1);
    expect(laps.length).toBeGreaterThan(0);

    console.log({
        meeting: meetings[0].meeting_name,
        session: sessions[0].session_name,
        totalDrivers: drivers.length,
        positionRecords: positions.length,
        maxLaps: laps.length
    });

});