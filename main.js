var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//Todo en un videojuego es un objeto!!!!!
//constantes
var images = {
    mario: "https://vignette.wikia.nocookie.net/mario/images/f/f3/Mario-Bros.png/revision/latest?cb=20140227153402&path-prefix=es",
    goomba: 'https://vignette.wikia.nocookie.net/mario/images/3/36/172px-Goomba.png/revision/latest?cb=20121214193338&path-prefix=es',
    background: 'https://wallup.net/wp-content/uploads/2018/03/19/549883-Nintendo-Super_Mario-video_games-retro_games-748x421.jpg'
}
//clases
function Cuadrado(x,y,width, height){
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.width = width ? width : 50;
    this.height = height ? height : 50;

    this.draw = function(){
        ctx.strokeRect(this.x,this.y,this.width,this.height);
    }
}

function Personaje(x,y,width, height,img){
    Cuadrado.call(this, x,y,width, height);
    //this.image = document.createElement('img');
    this.image = new Image();
    this.image.src = img;
    
    this.image.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}

class Fondo{
    constructor(x=0,y=0,width=canvas.width,height=canvas.height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = images.background;
        this.image.onload = function(){
            this.draw();
        }.bind(this);
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

}

//las instancias (objetos)
var cubito = new Cuadrado();
var cuadradin = new Cuadrado(50,50,100,100);
var mario = new Personaje(150,00,60,90,images.mario);
var goom = new Personaje(200,50,70,70,images.goomba);
var fondito = new Fondo();

cubito.draw();
cuadradin.draw();
