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
            this.ctx.arc(x.posX, x.posY, x.size - 1, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();

        });
    }

    changePosition() {
        this.array.forEach(function (y) {
                y.Speed();
                y.posY = y.posY + y.speed - 2;
            });
    }

    arraySnow() {
        const canvasSnow = new Snow();
        this.array.push(canvasSnow);
    }
    
    draw() {
        this.drawField();
        this.arraySnow();
        this.drawSnow();
        this.changePosition();
        requestAnimationFrame(() => this.draw());
    }


}
class Snow{
    constructor(
        windowWidth = window.innerWidth,
        maxSize = 5,
        minSize = 1,
        topH = -100,
        bottomH = -100   
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
        if(this.speed < maxSpeed){
            this.speed += this.random(0,1);
        }
    }
}

const canvas = new SnowInCanvas('#SnowCanvas');
canvas.draw();