var boxes = Array.from(document.querySelectorAll(".box"))
var resetBtn = document.querySelector("reset");
var h4 = document.querySelector("h4")
var turnText = document.querySelector(".turn")
var turn = "X";
var isGameOver=0;

//function to cchange turn
const changeTurn = ()=>{
    turn = (turn==="X" ? "O" : "X")
}
//function to check for win
const checkWin = ()=>{
    
    let boxtext = document.getElementsByClassName('box');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            console.log(boxtext[e[0]].innerText + " Won");
            h4.innerHTML=`${boxtext[e[0]].innerText} Won`;
            isGameOver = 1;
        }})
}





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerHTML=turn;
        checkWin()
        changeTurn();
        turnText.innerHTML = turn;
    })
})

// reset function

const reset = ()=>{
    boxes.forEach((box)=>{
        box.innerHTML=""
        h4.innerHTML=`Turn For <span class="turn">X</span>`
    })
}