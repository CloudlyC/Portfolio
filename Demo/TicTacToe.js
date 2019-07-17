//blue : "blue";
//red : "red";
//blank : "0";

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var turn = 0;

var win = false;

function display_input(block, num) {
    if (win ==false){
        if (board[num] != "red" && board[num] != "blue") {
            if (turn == 1 && document.querySelector(block).style.backgroundColor != "red") {
                document.querySelector(block).style.backgroundColor = "red";
                turn = 0;
                board[num] = "red";
            } else if (turn == 0) {
                document.querySelector(block).style.backgroundColor = "blue";
                turn = 1;
                board[num] = "blue";
            } else if (turn == 0 && document.querySelector(block).style.backgroundColor != "blue") {
                document.querySelector(block).style.backgroundColor = "blue";
                turn = 1;
                board[num] = "blue";
            } else {
                document.querySelector(block).style.backgroundColor = "red";
                turn = 0;
                board[num] = "red";
            }
            checkwin("red");
            checkwin("blue");
        }
    }
    console.log(board);
}   


function checkwin(player) {
        //top row
    if (board[0] == player && board[1] == player && board[2] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        
        
        //middle row
    } else if (board[3] == player && board[4] == player && board[5] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        
        
        //bottom row
    } else if (board[6] == player && board[7] == player && board[8] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        
        
        //left column
    } else if (board[0] == player && board[3] == player && board[6] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        

        // middle column
    } else if (board[1] == player && board[4] == player && board[7] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        

        // right column
    } else if (board[2] == player && board[5] == player && board[8] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        
        
        //left diagonal
    } else if (board[0] == player && board[4] == player && board[8] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        
        
        //right diagonal
    } else if (board[2] == player && board[4] == player && board[6] == player) {
        displayMessage(player);
        win = true;
        console.log(win);
        

    } 
}

function reset(){
    var message = document.querySelector("#message");
    message.innerHTML="";
    for (var i = 0; i < 9; i++){
        board[i] = 0;
        document.querySelector("#block" + i).style.backgroundColor = "white"; 
        
    }
    turn = 0;
    win = false;
    
}

document.querySelector("#block0").onclick = function () {
    display_input("#block0", 0);  
}


document.querySelector("#block1").onclick = function () {
    display_input("#block1", 1);  
}

document.querySelector("#block2").onclick = function () {
    display_input("#block2", 2);  
}

document.querySelector("#block3").onclick = function () {
    display_input("#block3", 3);  
}

document.querySelector("#block4").onclick = function () {
    display_input("#block4", 4);  
}

document.querySelector("#block5").onclick = function () {
    display_input("#block5", 5);  
}

document.querySelector("#block6").onclick = function () {
    display_input("#block6", 6);  
}

document.querySelector("#block7").onclick = function () {
    display_input("#block7", 7);  
}

document.querySelector("#block8").onclick = function () {
    display_input("#block8", 8);  
}

function displayMessage(player){
    message.innerHTML = player + " wins! ";   
}


