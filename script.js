let color = "black";
let click = false;

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
    if(input >=2 && input <= 100){
        creatediv(input);
    }
    else {
        document.querySelector('.error').textContent="Error input between 2 and 100";
        document.querySelector('.error').style.color="red";
    }
}

function colordiv(){
    if (click){
        if (color== "random"){
            this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares =board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor ="antiquewhite");
}

document.querySelector('.board').addEventListener("click",(e) =>{
    click =!click;
    if (click) {
        document.querySelector(".status").textContent = "Drawing active (click on the board to stop drawing)";
    } else {
        document.querySelector(".status").textContent = "Drawing inactive (click on the board to start drawing)";
    }
});
