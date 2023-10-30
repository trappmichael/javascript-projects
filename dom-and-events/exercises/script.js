function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function(event) {
        paragraph.innerHTML = "Houston! We have liftoff!";

        missionAbort.addEventListener("click", function(event) {
            let abortMissionConfirm = window.confirm("Are you sure you want to abort the mission?");
            if (abortMissionConfirm = true) {
                paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
            };
        })

    });

    missionAbort.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = '';
    });

}

window.addEventListener("load", init);
