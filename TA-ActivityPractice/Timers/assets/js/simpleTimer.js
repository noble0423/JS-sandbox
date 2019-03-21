var audio = new Audio("./assets/audio/raven.mp3");


const fiveSeconds = function() {
    $("#time-left").html("<h2>About 10 seconds left!</h2>");
    console.log("10 secs left");
}

const tenSeconds = function() {
    $("#time-left").html("<h2>About 5 seconds left!</h2>");
    console.log("5 secs left");
}

const timeUp = function() {
    $("#time-left").html("<h2>Time's Up!</h2>");
    console.log("Time's Up!");
    audio.play();
}

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

// function fiveSeconds() {
//     $("#time-left").html("<h2>About 10 seconds left!</h2>");
//     console.log("10 secs left");
// }

// function tenSeconds() {
//     $("#time-left").html("<h2>About 5 seconds left!</h2>");
//     console.log("5 secs left");
// }

// function timeUp() {
//     $("#time-left").html("<h2>Time's Up!</h2>");
//     console.log("Time's Up!");
//     audio.play();
// }
