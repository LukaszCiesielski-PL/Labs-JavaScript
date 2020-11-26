const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width = 400;
const ch = canvas.height = 800;
const ballSize = 15;
let ballX = cw/2;
let ballY = ch*0.9;
let speedX=0;
let speedY=0;

function play(){
    field();
    ball();
    holeWin();
    walls();
    conflictWalls()
    holes();
    document.getElementById("start").hidden=true;
}


window.addEventListener('deviceorientation', e=>{
    console.log(e);
    speedX=e.gamma/45
    speedY=e.beta/45
});

function field(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,cw,ch)
}

function ball(){
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(ballX, ballY, ballSize, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    if(ballX+speedX<400-ballSize && ballX+speedX>0+ballSize){
        ballX = ballX + speedX;
    }
    if(ballY+speedY<800-ballSize && ballY+speedY>0+ballSize){
        ballY = ballY + speedY;
    }
    setInterval(play, 1000/60)
}

function holeWin(){
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.arc(cw/2, ch*0.1, ballSize*2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 
    
}

function walls(){
    ctx.fillStyle='grey';
    ctx.fillRect(0,600,150,20)
    

    ctx.fillStyle='grey';
    ctx.fillRect(250,600,150,20)

    ctx.fillStyle='grey';
    ctx.fillRect(70,390,60,20)

    ctx.fillStyle='grey';
    ctx.fillRect(190,410,20,-240)

    ctx.fillStyle='grey';
    ctx.fillRect(270,390,60,20)

    ctx.fillStyle='grey';
    ctx.fillRect(0,170,130,20)

    ctx.fillStyle='grey';
    ctx.fillRect(270,170,130,20)
}

function holes(){
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(50, 500, ballSize*1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(150, 500, ballSize*2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(250, 500, ballSize*2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(350, 500, ballSize*1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(125, 290, ballSize*2.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 

    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;
    ctx.arc(280 , 290, ballSize*2.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); 
}   

function conflictWalls(){
    
    
}
    
    
    

