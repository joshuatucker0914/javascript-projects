// Write your JavaScript code here.
window.onload = function () {
    // Get references to elements
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

    // Attaching a click event handler to the "Take off" button
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

    // Attaching a click event handler to the "Land" button
    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = 0;
    });

    // Attaching a click event handler to the "Abort Mission" button
    abortButton.addEventListener("click", function () {
        const confirmMessage = "Confirm that you want to abort the mission.";
        const isMissionAborted = window.confirm(confirmMessage);

        if (isMissionAborted) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = 0;
        }
    });

    // Attaching click event handlers to directional buttons (Up, Down, Right, Left)
    upButton.addEventListener("click", function () {
        rocket.style.top = parseInt(rocket.style.top, 10) - 10 + "px";
        const currentHeight = parseInt(spaceShuttleHeight.textContent, 10);
        spaceShuttleHeight.textContent = currentHeight + 10000;
    });

    downButton.addEventListener("click", function () {
        rocket.style.top = parseInt(rocket.style.top, 10) + 10 + "px";
        const currentHeight = parseInt(spaceShuttleHeight.textContent, 10);
        spaceShuttleHeight.textContent = currentHeight - 10000;
    });

    rightButton.addEventListener("click", function () {
        rocket.style.left = parseInt(rocket.style.left, 10) + 10 + "px";
    });

    leftButton.addEventListener("click", function () {
        rocket.style.left = parseInt(rocket.style.left, 10) - 10 + "px";
    });
};




// Remember to pay attention to page loading!
