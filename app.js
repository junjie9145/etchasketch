const container = document.querySelector(".container");
const blackButton = document.querySelector(".black");
const rainbowButton = document.querySelector(".rainbow");
const userInput = document.getElementById('quantity')
const newGrid = document.querySelector('.create');
const reset = document.querySelector('.reset');
let color = "black";

blackButton.addEventListener("click", function(){
color = "black";
    }
)
randomColor = () => {
    let r = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    return "rgb(" + r + "," + g + "," + b
+ ")"}
console.log(randomColor())

rainbowButton.addEventListener("click", function(){
  color = randomColor();
})

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add(".gridsquare");
        container.appendChild(div);
    }
}
createGrid();
updateGrid = () =>{
    container.innerHTML = "";
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value},2fr)`
    );
    for(let i = 0; i < (userInput.value * userInput.value); i++){
        const div = document.createElement("div");
        div.classList.add(".gridsquare");
        container.appendChild(div);
    }
    console.log(userInput.value);
}

resetGrid = () => {
    container.innerHTML = "";
    container.style.setProperty(
        "grid-template-columns",
        `repeat(16, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(16,2fr)`
    );
    createGrid();
}
const square = document.querySelector(".container");
square.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = color
})

newGrid.addEventListener("click", updateGrid);
reset.addEventListener("click", resetGrid);

setColor = () => {

}