let menu = document.querySelector("#menu");
let ball= document.querySelector("#ball");                     
let speedX = 0, speedY = 0;
let posX = 50, posY = 90;
window.addEventListener('deviceorientation', changePosition)

function start(){ 
                                                                       
    move();                      
    document.getElementById("start").hidden=true;  
}

function changePosition(e){            
    console.log(e);
    speedX=e.gamma/45
    speedY=e.beta/45
}

function move(){                 
    if(posX+speedX<window.innerWidth-50 && posX+speedX>0){  
        posX+=speedX;
        ball.style.cx=posX+'%';        
    }
    if(posY+speedY<window.innerHeight-50 && posY+speedY>0){
        posY+=speedY;
        ball.style.cy=posY+'%';        
    }
    window.requestAnimationFrame(move)
}


