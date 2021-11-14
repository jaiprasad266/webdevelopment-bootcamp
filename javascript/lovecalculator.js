prompt("What is your name ?");
prompt("What is their name ?");

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1; // range between 1 and 100 
if(n > 70){
    alert("Your are made for each other " + n + "%")    
}else {
alert("Your Love score is " + n + "%")
}