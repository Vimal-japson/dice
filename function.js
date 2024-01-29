
var ranNum = Math.floor(Math.random()*6)+1;
var ranDiceImage = ranNum +".png";
var ranImageSource = "Dice_images/"+ranDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ranImageSource);

var ranNum1 = Math.floor(Math.random()*6)+1;
var ranImageSource1 = "Dice_images/"+ranNum1+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",ranImageSource1);

document.getElementById("res1").textContent = "Player 1 Score: "+ranNum;
document.getElementById("res2").textContent = "Player 2 Score: "+ranNum1;  

if(ranNum>ranNum1){
    document.getElementById("res3").textContent = "Player 1 Wins" 
    document.getElementById("one").textContent = "Player 1 🏆🏆";
}
else if(ranNum1 > ranNum){
    document.getElementById("res3").textContent = "Player 2 Wins";
    document.getElementById("two").textContent = "Player 2 🏆🏆";
}
else{
    document.getElementById("res3").textContent = "Game Draw";
}
