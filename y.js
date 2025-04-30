let display=document.getElementById("display");
let button = document.querySelectorAll(".clbtn");
button.forEach(function (button) {
    button.addEventListener("click",function (){
        let value =button.textContent;
        if (value === "C") {
            display.value="";
        }
        else if (value === "=") {
            try {
                display.value=eval(display.value);
            }
            catch {
                display.value="error";
            }
        }
        else {
            display.value += value;
        }
    })
})