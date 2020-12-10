//https://developer.mozilla.org/pl/docs/Web/API/Canvas_API/Tutorial/Optymalizacja_canvas

class SnowInCanvas {
    constructor() {
        this.canvas = document.querySelector('#SnowCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.screenWidth = this.canvas.width = innerWidth;
        this.screenHeight = this.canvas.height = innerHeight;
        this.array = [];
    }


    drawField() {
        this.radialGradient = this.ctx.createRadialGradient(this.screenWidth * 0.75, this.screenHeight * 0.3, 50, this.screenWidth * 0.75, this.screenHeight * 0.3, 65);
        this.radialGradient.addColorStop(0, 'white');
        this.radialGradient.addColorStop(0.3, 'white');
        this.radialGradient.addColorStop(1, 'black');
        this.ctx.fillStyle = this.radialGradient;
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

        this.ctx.fillStyle = 'grey';
        this.ctx.fillRect(0, this.screenHeight - 20, this.screenWidth, 20)
    }

    drawSnow() {
        this.array.forEach((x) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = 'white';
            this.ctx.arc(x.posX, x.posY, x.size, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();
            
            
        });
    }

    changePosition() {
        this.array.forEach(function (y) {
                y.Speed();
                y.posY = y.posY + y.speed ;
            });
    }

    arraySnow() {
        const canvasSnow = new Snow();
        this.array.push(canvasSnow);
    }

   /* Colision(){
        if(this.posY+this.speed<screenHeight-this.size && this.posY+this.speed<0+this.size){
            this.posY = this.posY + this.speed;
        }
    }*/

    draw() {
        this.drawField();
        this.arraySnow();
        this.drawSnow();
        this.changePosition();
        //this.Colision();
        requestAnimationFrame(() => {
            return this.draw();
        });
    }


}
class Snow{
    constructor(
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        topH = 0,
        bottomH = 0,
        maxSize = 4,
        minSize = 1
          
    ){
        this.speed = 0;
        this.posX = this.random((windowWidth),0);
        this.posY = this.random(topH,bottomH);
        this.size = this.random(maxSize, minSize);    
    }
    
    random = function (max, min) {
        return Math.random() * (max - min) + min;
    };
        
    
    Speed(){
        const maxSpeed = this.size;
        if(this.speed <= maxSpeed){
            this.speed = this.speed + this.random(0,0.5);
        }
    }
    
   
}

const canvas = new SnowInCanvas('#SnowCanvas');
canvas.draw();