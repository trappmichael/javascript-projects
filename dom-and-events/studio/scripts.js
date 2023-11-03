// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");

    rocket.style.position = "absolute";
    shuttleBackground.style.justifyContent = "center";
    rocket.style.bottom = '0px';

    let rocketVertical = 0;
    let rocketHorizontal = 0;

    takeoffButton.addEventListener("click", function(event) {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeoffConfirm = true) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        };

    });

    landingButton.addEventListener("click", function(event) {
        let landingConfirm = window.confirm("The shuttle is landing. Landing gear engaged.");

        if (landingConfirm = true) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = '';
            shuttleHeight.innerHTML = 0;
        };

    });

    abortButton.addEventListener("click", function(event) {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");

        if (abortConfirm = true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = '';
            shuttleHeight.innerHTML = 0;
        };

    });

    upButton.addEventListener("click", function(event) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        rocketVertical += 10;
        rocket.style.bottom = rocketVertical + 'px';
    });

    downButton.addEventListener("click", function(event) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        rocketVertical -= 10;
        rocket.style.bottom = rocketVertical + 'px';
    });

    rightButton.addEventListener("click", function(event) {
        rocketHorizontal += 10;
        rocket.style.rightMargin = rocketHorizontal + 'px';
        shuttleBackground.style.justifyContent = "center";
    });

    leftButton.addEventListener("click", function(event) {
        rocketHorizontal -= 10;
        rocket.style.rightMargin = rocketHorizontal + 'px';
        shuttleBackground.style.justifyContent = "center";
    });

}

window.addEventListener("load", init);
