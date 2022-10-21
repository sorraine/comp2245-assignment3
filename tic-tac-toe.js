document.addEventListener("DOMContentLoaded", function()
{
var board = document.getElementById("board");
var childb = board.getElementsByTagName("div");


for (let i= 0; i < childb.length; i++){


  
        childb[i].className = "square";

    


}

var xoxo = "X";
var squares = document.getElementsByClassName("square");
var tics = new Array (9);
var winner = document.getElementById("status"); 

for (let i= 0; i < squares .length; i++ ){

    squares[i].addEventListener("click",function(){

        if (squares[i].innerHTML == "") {

            if (xoxo == "X") {

                squares[i].innerHTML = "X";
                squares[i].classList.add("X");
                tics[i] = "X";

                if (checkrow(squares) || checkcol(squares) || checkdiag(squares)) { 
           
                    winner.innerHTML = `Congratulations! ${xoxo} is the Winner`;
                    winner.className = "you-won";
                }


                xoxo = "O";



                
                        
            } else {
                squares[i].innerHTML = "O";
                squares[i].classList.add("O");
                tics[i] = "O";
                

                if (checkrow(squares) || checkcol(squares) || checkdiag(squares)) { 
           
                    winner.innerHTML = `Congratulations! ${xoxo} is the Winner`;
                    winner.className = "you-won";
                }


                xoxo = "X";
                



                
            }
          
        }
    
    });


    /** ADD HOVER CLASS OVER SQUARE */
    squares[i].addEventListener("mouseover", function() {

        squares[i].classList.add("hover");

    })

    /** REMOVE HOVER CLASS OVER SQUARE */
    squares[i].addEventListener("mouseout", function() {

        squares[i].classList.remove("hover");
    })


}


var button = document.getElementsByClassName("btn");

/**Resets tic tac board */

button[0].addEventListener("click", function() {

    winner.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    winner.classList.remove ("you-won");
    xoxo = "X";

    for (let i = 0; i < squares.length; i++) {

        
        squares[i].innerHTML = "";
        squares[i].className = "square";
        


    }
})



});




/**Checks rows for match */
function checkrow (tics) {

    if  (tics[0].innerHTML != "") {

         if (tics[0].innerHTML == tics[1].innerHTML && tics[0].innerHTML == tics[2].innerHTML) {
            return true;
         }
    }

    if (tics[3].innerHTML != "") {

        if (tics[3].innerHTML == tics[4].innerHTML && tics[3].innerHTML == tics[5].innerHTML) {
            return true;
        } 
      
    }

    if (tics[6].innerHTML != "") {

       if (tics [6].innerHTML == tics [7].innerHTML && tics [6].innerHTML == tics [8].innerHTML){
        return true;
       }
    }
}

/** Checks columns for match */ 

function checkcol(tics) {

if  (tics[0].innerHTML != "") {

    if (tics[0].innerHTML == tics[3].innerHTML && tics[0].innerHTML == tics[6].innerHTML) {
       return true;
    }
}

if (tics[1].innerHTML != "") {

   if (tics [1].innerHTML == tics [4].innerHTML && tics [1].innerHTML == tics [7].innerHTML) {
       return true;
   } 
 
}

if (tics[2].innerHTML != "") {

  if (tics  [2].innerHTML == tics  [5].innerHTML && tics  [2].innerHTML == tics  [8].innerHTML){
   return true;
  }
}

}

/** Checks diagonal for match */
function checkdiag(tics) {

if (tics[4].innerHTML != "") {

    if ((tics   [0].innerHTML == tics   [4].innerHTML && tics   [0].innerHTML == tics   [8].innerHTML) || (tics [2].innerHTML == tics [4].innerHTML && tics [2].innerHTML == tics [6].innerHTML)) {
        return true;
    }
}
}
