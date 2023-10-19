function creatediv(size){
    let board = document.querySelector(".board");
    let squares =board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns =`repeat(${size} , 1fr)`;
    board.style.gridTemplateRows =`repeat(${size} , 1fr)`;
    let number = size*size;
    for (let i=0;i<number;i++){
        let square = document.createElement("div");
        square.style.backgroundColor="antiquewhite";
        board.insertAdjacentElement("beforeend",square);
} 
}

creatediv(16);

function boardSize(input){
    creatediv(input);
}
