// Function to format the time
function formatTime(number) {

    // If the number is not 2 digits, add a 0 in front
    if (number.toString().length <= 1) {

        // Add a 0 in front
        number = "0" + number;
    }

    // return the formatted number
    return number;
}


// Loop through the time until the endTime every 0,1 second
var timer = setInterval(function() {

    // Get the current time
    var currentTime = new Date();

    // Calculate the difference between the current time and the endTime
    var diff = currentTime;

    // Get the hours, minutes and seconds 
    var hours = formatTime(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + 1;
    var minutes = formatTime(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = formatTime(Math.floor((diff % (1000 * 60)) / 1000));


    // Display the time
    document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;


}, 100);



// The full screen button

// Get the full screen button element
var fullScreenButton = document.getElementById("fullscreen");

// The function to enter full screen
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { // iOS Safari
        element.webkitRequestFullscreen();
    }
    fullScreenButton.classList = "fa-solid fa-compress"
}

// The function to exit full screen
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    fullScreenButton.classList = "fa-solid fa-expand"
}

// Add event listener click
fullScreenButton.addEventListener("click", function() {

    // Check if the browser is in full screen mode
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {

        // If not, enter full screen mode
        enterFullscreen(document.documentElement);

    } else {

        // If yes, exit full screen mode
        exitFullscreen();
    }
});


// If mouse doesn't move for 5 seconds, hide the cursor

// Get the settings button element
var settingsButton = document.getElementById("settings_icon");

// Initialize the timer
var mouseTimer = setTimeout(function() {
    document.body.style.cursor = "none";
}, 5000);

// Functions to hide and show the elements
function hideAdditionalElements() {
    clearTimeout(mouseTimer);
    document.body.style.cursor = "default";
    settingsButton.style.fontSize = "2rem";
    fullScreenButton.style.fontSize = "1.25rem";
}

function showAdditionalElements() {
    clearTimeout(mouseTimer);
    document.body.style.cursor = "default";
    settingsButton.style.fontSize = "2rem";
    fullScreenButton.style.fontSize = "1.25rem";
    mouseTimer = setTimeout(function() {
        document.body.style.cursor = "none";
        settingsButton.style.fontSize = "0";
        fullScreenButton.style.fontSize = "0";
    }, 5000);
}

// Event listeners
document.onmousemove = function() {
    showAdditionalElements();
}
document.onclick = function() {
    showAdditionalElements();
}


// Add blur and open window, when the settings button is clicked

settings_div = document.getElementById("settings");

settingsButton.addEventListener("click", function() {

    // Open the settings window
    settings_div.style.display = "block";

    // Add black 0,5 opacity to the background
    settings_div.style.backgroundColor = "rgba(0,0,0,0.5)";

    // Change colors on the body background linear gradient
    document.body.style.background = "linear-gradient(to left, rgba(34, 195, 128, 1), rgba(149, 28, 171, 1))";

});