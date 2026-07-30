import { useEffect } from "react";
import { getCurrentMeeting } from "../../services/meetingService";

export default function Dashboard() {
    useEffect(() => {
        async function loadData() {
            try {
                const meetings = await getCurrentMeeting();
                console.log(meetings);
            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, []);

    return <h1 className="text-3xl font-semibold">Mission Control</h1>;
}