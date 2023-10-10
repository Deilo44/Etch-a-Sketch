function divspace(classId,divnumber,squaresize){
    const container= document.getElementById(classId);
     for(let i=0; i<divnumber;i++){
        const squarediv =document.createElement("div");
        squarediv.classList.add("square");
        squarediv.style.width=squaresize + "px";
        squarediv.style.height=squaresize + "px";
        container.appendChild(squarediv);
     }
}
const sixteen=document.getElementById("16");
const twenty=document.getElementById("20");
const number=document.getElementById("number");

sixteen.addEventListener("click", function(){
    divspace("drawingboard",16,30);
});

twenty.addEventListener("click",function(){
    divspace("drawingboard",20,30);
});

number.addEventListener("click",function(){
    let num= prompt("write the number of squares");
    if (num) {
        divspace("drawingboard",num,30);
    }
});