const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width = 400;
const ch = canvas.height = 800;
const ballSize = 25;
let ballX = cw/2;
let ballY = ch*0.9;
let speedX=0;
let speedY=0;

function play(){
    field();
    ball();
    setInterval(ball, 1000/60)
    document.getElementById("start").hidden=true;
}


window.addEventListener('deviceorientation', e=>{
    console.log(e);
    speedX=e.gamma/45
    speedY=e.beta/45
});

function field(){
    ctx.fillStyle;
    ctx.fillRect(0,0,cw,ch)
}


function ball(){
    ctx.beginPath();
    ctx.fillStyle='white';
    ctx.arc(ballX, ballY, ballSize, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ballX = ballX + speedX;
    ballY = ballY + speedY;
}


    
    
    
    

