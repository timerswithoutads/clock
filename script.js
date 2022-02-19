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


// If mouse doesn't move for 5 seconds, hide the cursor
var mouseTimer = setTimeout(function() {

    // Hide the cursor
    document.body.style.cursor = "none";

}, 2500);

function resetMouseMoves() {
    // Clear the timer
    clearTimeout(mouseTimer);

    // Show the cursor
    document.body.style.cursor = "default";

    // Set the timer again
    mouseTimer = setTimeout(function() {

        // Hide the cursor
        document.body.style.cursor = "none";
    }, 2500);
}
document.onmousemove = function() {
    resetMouseMoves();
}
document.onclick = function() {

    // Show the cursor
    resetMouseMoves();
}