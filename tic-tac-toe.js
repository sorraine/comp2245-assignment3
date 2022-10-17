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
})