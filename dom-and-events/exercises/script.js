function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function () {
        paragraph.textContent = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", function () {
        missionAbort.style.backgroundColor = "red";
    });

    // Add a mouseout event handler to reset the background color
    missionAbort.addEventListener("mouseout", function () {
        missionAbort.style.backgroundColor = ""; // Reset to the default background color
    });

    // Add a click event handler to the abortMission button
     missionAbort.addEventListener("click", function () {
        // Display a confirmation dialog
        const confirmed = window.confirm("Are you sure you want to abort the mission?");

        if (confirmed) {
            paragraph.textContent = "Mission aborted! Space shuttle returning home";
        };
     })
    
}

window.addEventListener("load", init);
