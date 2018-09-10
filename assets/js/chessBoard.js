// VARIABLES 
//============================================================================================
let height;
let width;


// FUNCTIONS
//============================================================================================
function chessBoard() {
    console.log("---------------");
    for (i = 1; i <= 4; i++) {
        console.log("# # # # ");
        console.log(" # # # #");
    };
    console.log("---------------");
};


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#target").on("submit", function() {
        // console.log("clicked");
        event.preventDefault();
        $("#target.height").val();
        console.log("height " + height);
        console.log("width " + width);
        // chessBoard();
    });
});