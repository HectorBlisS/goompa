var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//ctx.fillRect(0,0,30,30);



//constantes
var interval;
var sound = new Audio();
sound.src = 'http://66.90.93.122/ost/game-sound-museum-famicom-ban-01-super-mario-bros./zbxgfvfu/01%20Above%20Ground%20BGM.mp3';


//clases
function Cubo(x,color){
    this.x = x || 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.color = color ? color : "red";
    this.direction = 'down';

    this.draw = function(){
        //decidir si sumo o resto
        if(this.direction === 'down'){
            this.y++;
            if(this.y > canvas.height - this.height) this.direction = 'up';
        }else{
            this.y--;
            if(this.y < 1) this.direction = 'down';
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
//instancias
var cubo1 = new Cubo(null, "yellow");
var cubo2 = new Cubo(100, "fuchsia");

//main functions
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cubo1.draw();
    cubo2.draw();
}

function start(){
    interval = setInterval(update,1000/60);
}

//listeners
document.getElementById('start')
    .addEventListener('click',start);


addEventListener('keydown', function(e){
    console.log("pachurrastes");
    switch(e.keyCode){
        case 38:
            cubo2.direction = "up";
            //cubo1.direction = "up";
            sound.play();
            break;
        case 40:
            cubo2.direction = "down";
            break;
    }
});

// addEventListener('mousemove', function(e){
//     cubo1.x = e.clientX;
//     cubo1.y = e.clientY;
// })