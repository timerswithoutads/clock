// Get the current time plus 5 minutes and store it to endTime
var endTime = new Date().getTime() + 5 * 60 * 1000;

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


// Initialize the timer
var mouseTimer = setTimeout(function() {
    document.body.style.cursor = "none";
}, 5000);

// Functions to hide and show the elements
function hideAdditionalElements() {
    clearTimeout(mouseTimer);
    document.body.style.cursor = "default";
}

function showAdditionalElements() {
    document.body.style.cursor = "default";
    mouseTimer = setTimeout(function() {
        document.body.style.cursor = "none";
    }, 5000);
}

// Event listeners
document.onmousemove = function() {
    showAdditionalElements();
}
document.onclick = function() {
    showAdditionalElements();
}