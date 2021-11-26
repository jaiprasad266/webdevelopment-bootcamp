
const buttons = document.querySelectorAll(".drum");
buttons.forEach(function(currentButton){
    currentButton.addEventListener("click",handleClick);
});


function handleClick(){
    alert("I got clicked !");
}