var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//constants
var interval;
//classes
class Board{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.baseColor = "black";
        this.secondColor = "grey";
    }

    draw(){
        ctx.fillStyle = this.baseColor;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.lineWidth = 20;
        ctx.font = "50px Avenir";
        ctx.fillStyle = this.secondColor;
        ctx.beginPath();
        ctx.fillText('0',this.width/2.5, this.y + 50)
        ctx.fillText('0',this.width/2.5 + 70, this.y + 50)
        ctx.closePath();
        ctx.beginPath();
        ctx.setLineDash([20, 10]);
        ctx.strokeStyle = this.secondColor;
        ctx.moveTo(this.width/2,this.y);
        ctx.lineTo(this.width/2,this.height);
        ctx.stroke();
        ctx.closePath();
    }


} //clase board

class Ball{
    constructor(){
        this.x = 100;
        this.y = 100;
        this.radius = 10;
        this.color = "yellow";
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.fill();
        ctx.closePath();
    }
}

//instances
var board = new Board();
var pelotin = new Ball();
//main functions
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    board.draw();
    pelotin.draw();
}

function start(){
    interval = setInterval(update,1000/60)
}


//listeners
/* hack */
start();