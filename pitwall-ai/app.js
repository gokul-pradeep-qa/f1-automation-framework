async function loadDashboard() {

    const response = await fetch("data/sample-results.json");
    const data = await response.json();

    document.getElementById("passed").textContent =
        `Passed : ${data.passed}`;

    document.getElementById("failed").textContent =
        `Failed : ${data.failed}`;

    document.getElementById("duration").textContent =
        data.duration;

    document.getElementById("health").textContent =
        data.apiHealth;

    document.getElementById("meeting").textContent =
        data.meeting;

    document.getElementById("drivers").textContent =
        data.drivers;
}

loadDashboard();