var dice = [];
dice[0]="images/dice1.png";
dice[1]="images/dice2.png";
dice[2]="images/dice3.png";
dice[3]="images/dice4.png";
dice[4]="images/dice5.png";
dice[5]="images/dice6.png";


var rand = dice[Math.floor(Math.random() * dice.length)];
var image1 = document.querySelector(".img1");
image1.setAttribute("src",rand);
var rand1 = dice[Math.floor(Math.random() * dice.length)];
image1=document.querySelector(".img2");
image1.setAttribute("src",rand1);

if(rand==rand1){
    document.querySelectorAll("h1")[0].innerText="DRAW";
}

else if(rand>rand1){
    document.querySelectorAll("h1")[0].innerText="Player 1 wins";
}

else{
    document.querySelectorAll("h1")[0].innerText="Player 2 wins";    
}