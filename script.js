function divspace(classId,divnumber,squaresize){
    const container= document.getElementById("drawingboard");
     for(let i=0; i<divnumber;i++){
        const squarediv =document.createElement("div");
        squarediv.className="square";
        squarediv.style.width=squaresize + "px";
        squarediv.style.height=squaresize + "px";
        container.appendChild(squarediv);
     }
}