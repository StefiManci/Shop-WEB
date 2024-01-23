//const colors=[red,green,blue,white,yellow];

const colors = [];
colors.push("red", "green", "blue","yellow","black");
document.addEventListener("click", function(){
    const i=Math.floor((Math.random()*5));
const chosenColor=colors[i];
console.log(chosenColor);
    document.getElementById("welcome").style.color = chosenColor;
    document.getElementById("enjoy").style.color = chosenColor;

});
document.addEventListener("click", function(){
console.log(chosenColor);
    document.getElementById("enjoy").style.color = chosenColor;

});
