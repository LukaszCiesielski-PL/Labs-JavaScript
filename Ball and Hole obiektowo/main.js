let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const window_height = window.innerHeight;
const window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#000000";

window.addEventListener('deviceorientation', e=>{
    console.log(e);
    dx=e.gamma/45
    dy=e.beta/45
});

class Circle{
    constructor(posX, posY, radius, color, speed){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.dx = 4*this.speed;
        this.dy = 2*this.speed;
    }

    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.lineWidht = 5;
        context.arc(this.posX,this.posY,this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
        
    }

    update(){

        this.draw(context);

        if((this.posX + this.radius) > window_width){
            this.dx =- this.dx;
        }
        if((this.posX - this.radius) < 0){
            this.dx =- this.dx;
        }

        if((this.posY + this.radius) > window_height){
            this.dy =- this.dy;
        }
        if((this.posY - this.radius) < 0){
            this.dy =- this.dy;
        }

        this.posX += this.dx;
        this.posY += this.dy;
    }
    
    
}

let Distance = function(posX, posY, posX2, posY2){
    const result = Math.sqrt(Math.pow(posX2 - posX, 2) + Math.pow(posY2 - posY, 2));
    return result;
}

let circle = new Circle(0.5*window_width, 0.5*window_height, 30, "red", 2);
let circle2 = new Circle(0.1*window_width, 0.5*window_height, 60, "red", 0);

circle.draw(context);
circle2.draw(context);

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    context.clearRect(0,0,window_width,window_height);
    circle.update();
    circle2.update();

    if(Distance(circle.posX,circle.posY,circle2.posX,circle2.posY) < (circle2.radius + circle.radius)){
        console.log("WIN");
    }
}
updateCircle();






