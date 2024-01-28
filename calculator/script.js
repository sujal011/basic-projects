var display=document.querySelector("#display")

var buttons=document.querySelectorAll(".btn")
btnsArr=Array.from(buttons)

btnsArr.forEach(btn => {
    btn.addEventListener("click",()=>{
        if(btn.innerHTML == '='){
            string=eval(string);
            display.value=string;
        }
        else if(btn.innerHTML == 'AC'){
            string = ""
            display.value=string;
        }
        else if(btn.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1)
            display.value=string;
        }
        else{
            string += btn.innerHTML;
            display.value=string;
        }
        
    })
});

var string = ""