// Write your JavaScript code here.
window.onload = function () {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    // Initialize the rocket's position to 0px from the top and left
    rocket.style.position = "absolute";
    rocket.style.top = "0px";
    rocket.style.left = "0px";

    takeoffButton.addEventListener("click", function () {
        const confirmMessage = "Confirm that the shuttle is ready for takeoff.";
        const isReadyForTakeoff = window.confirm(confirmMessage);

        if (isReadyForTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            const currentHeight = parseInt(spaceShuttleHeight.textContent, 10);
            spaceShuttleHeight.textContent = currentHeight + 10000;
        }
    });

    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = 0;
        rocket.style.top = "0px"; // Reset the rocket's position
        rocket.style.left = "0px"; // Reset the rocket's position
    });

    abortButton.addEventListener("click", function () {
        const confirmMessage = "Confirm that you want to abort the mission.";
        const isMissionAborted = window.confirm(confirmMessage);

        if (isMissionAborted) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = 0;
            rocket.style.top = "0px"; // Reset the rocket's position
            rocket.style.left = "0px"; // Reset the rocket's position
        }
    });

    upButton.addEventListener("click", function () {
        const currentTop = parseInt(rocket.style.top, 10);
        if (currentTop - 10 >= 0) {
            rocket.style.top = currentTop - 10 + "px";
            const currentHeight = parseInt(spaceShuttleHeight.textContent, 10);
            spaceShuttleHeight.textContent = currentHeight + 10000;
        }
    });

    downButton.addEventListener("click", function () {
        const currentTop = parseInt(rocket.style.top, 10);
        if (currentTop + 10 <= shuttleBackground.clientHeight - rocket.clientHeight) {
            rocket.style.top = currentTop + 10 + "px";
            const currentHeight = parseInt(spaceShuttleHeight.textContent, 10);
            spaceShuttleHeight.textContent = currentHeight - 10000;
        }
    });

    rightButton.addEventListener("click", function () {
        const currentLeft = parseInt(rocket.style.left, 10);
        if (currentLeft + 10 <= shuttleBackground.clientWidth - rocket.clientWidth) {
            rocket.style.left = currentLeft + 10 + "px";
        }
    });

    leftButton.addEventListener("click", function () {
        const currentLeft = parseInt(rocket.style.left, 10);
        if (currentLeft - 10 >= 0) {
            rocket.style.left = currentLeft - 10 + "px";
        }
    });
};




// Remember to pay attention to page loading!
