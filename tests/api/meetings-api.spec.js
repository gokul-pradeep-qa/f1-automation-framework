const { test, expect } = require("@playwright/test");
const MeetingService = require("../../api/services/MeetingService");
const ApiAssertions = require("../../utils/ApiAssertions");

test("Verify Latest Meeting API", async () => {

    const meetingService = new MeetingService();

    const meetings = await meetingService.getLatestMeeting();
 
   ApiAssertions.expectNotEmpty(meetings);

    const meeting = meetings[0];

    expect(meeting.meeting_name).toBeTruthy();
    expect(meeting.country_name).toBeTruthy();
    expect(meeting.location).toBeTruthy();
    expect(meeting.meeting_key).toBeTruthy();

    console.log(meeting);

});