function getFastestLap(laps) {

    const validLaps = laps.filter(
        lap => lap.lap_duration !== null
    );

    validLaps.sort(
        (a, b) => a.lap_duration - b.lap_duration
    );

    return validLaps[0];
}

function getAverageLap(laps) {

    const validLaps = laps.filter(
        lap => lap.lap_duration !== null
    );

    const total = validLaps.reduce(
        (sum, lap) => sum + lap.lap_duration,
        0
    );

    return total / validLaps.length;
}

module.exports = {
    getFastestLap,
    getAverageLap

};