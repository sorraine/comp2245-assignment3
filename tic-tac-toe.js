document.addEventListener("DOMContentLoaded", function()
{
var board = document.getElementById("board");
var childb = board.childNodes;
console.log (childb);

for (let i= 0; i < childb.length; i++){

    console.log(childb[i].nodeType);

    if (childb[i].nodeType == 1) {

        childb[i].className = "square";

    } 


}

var xoxo = "X";
var squares = document.getElementsByClassName("square");
var tics = new Array (9);


for (let i= 0; i < squares.length; i++ ){

    squares[i].addEventListener("click",function(){

        if (squares[i].innerHTML == "") {

            if (xoxo == "X") {

                squares[i].innerHTML = "X";
                squares[i].classList.add("X");
                xoxo = "O";

                        
            } else {
                squares[i].innerHTML = "O";
                squares[i].classList.add("O");
                xoxo = "X";

                
            }
          
        }

    });

}

})