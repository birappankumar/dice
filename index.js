let randomnumber1=Math.floor(Math.random()*6)+1;
let randomDiceImage="dice"+randomnumber1+".png";//concate image file to get the number
let  randomImageSource="images/"+randomDiceImage;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
//for second image
// var rnumber2=Math.floor(Math.random()*6)+1;
// var rimageSource2="image/dice"+rnumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",rimageSource2);
let randomnumber2=Math.floor(Math.random()*6)+1;
let  randomImageSource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else document.querySelector("h1").innerHTML="ohh...drow";