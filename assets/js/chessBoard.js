// VARIABLES 
//============================================================================================
let board = "";


// FUNCTIONS
//============================================================================================
function chessBoard() {
    console.log("---------------");
    for (x = 1; x <= $("#boardWidth").val().trim(); x++) {
        for (y = 1; y <= $("#boardHeight").val().trim(); y++) {
            if ((x + y) % 2 === 0 ) {
                board += " ";
            }

            else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
    console.log("---------------");
};


// MAIN PROCESS
//============================================================================================
$(document).ready(function() {
    $("#target").on("submit", function() {
        // console.log("clicked");
        event.preventDefault();
        chessBoard();
    });
});