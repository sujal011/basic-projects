var score=0;
var timer=60;
var rn;

function makeBubble() {
    var bubbles = "";
    
    for (var i = 0; i < 169; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".p-btm").innerHTML = bubbles;
    
}
function newHit(){
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent= rn
    
    console.log("hit : ",rn)

}
function countDown() {
    timeInterval=setInterval(()=>{
        if(timer>0){
            timer--;
            
            document.querySelector("#timer").textContent = timer
        }
        else{
            
            clearInterval(timeInterval)
            document.querySelector(".p-btm").innerHTML = "<h1>Game Over</h1>";
        }
        
    },1000)
}
function increaseScore() {
    score+=10;
    document.querySelector("#score").textContent=score;
}
makeBubble()
newHit()
countDown()
document.querySelector("#score").textContent=score;

document.querySelector(".p-btm").addEventListener("click",(bubble)=>{
  var clickedBubble = bubble.target.innerHTML
    console.log(clickedBubble);
    if(clickedBubble==rn){
        increaseScore()
        makeBubble()
        newHit()
    }
});
