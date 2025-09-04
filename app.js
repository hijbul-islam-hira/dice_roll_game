let user1 = prompt("Enter Your name")
if(!user1){
    user1="Person 1"
}

let user2 = prompt("Enter your name")
if(!user2){
    user2 = "Person 2"
}
document.getElementById("player1").innerHTML=user1;
document.getElementById("player2").innerHTML=user2;

// dice rolling function
function randomNumber(){
    let result= Math.floor(Math.random()*6+1 );
    document.getElementById("dice-show").src ="asset/"+ result + ".png";

}