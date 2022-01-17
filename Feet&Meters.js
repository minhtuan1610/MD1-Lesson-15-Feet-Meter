function footToMeter(foot) {
    meter = 0.305 * foot;
    document.getElementById("outputMeter").innerText = meter;
    return meter;
}

function meterToFoot(meter) {
    foot = 3.279 * meter;
    document.getElementById("outputFeet").innerText = foot;
    return foot;
}