let color = "black";
function creatediv(size){
    let board = document.querySelector(".board");
    let squares =board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns =`repeat(${size} , 1fr)`;
    board.style.gridTemplateRows =`repeat(${size} , 1fr)`;
    let number = size*size;
    for (let i=0;i<number;i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colordiv);
        square.style.backgroundColor="antiquewhite";
        board.insertAdjacentElement("beforeend",square);
} 
}

creatediv(16);

function boardSize(input){
    if(input >=2 || input <= 100){
        creatediv(input);
    }
    else {
        console.log("Too many divs or very few divs");
    }
}

function colordiv(){
    this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice;
}