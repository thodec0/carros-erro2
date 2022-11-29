var fundoimg;

var database;

var jogovar;

var formulariovar;

var numerodejogadores;

var jogadorvar;

var estadodejogo;

var carro1;

var carro1img;

var carro2;

var carro2img;

var track;

var trackimg;

var matrizdoscarros=[];


function preload(){

  fundoimg=loadImage('./assets/planodefundo.png');

  carro1img=loadImage('./assets/car1.png');

  carro2img=loadImage('./assets/car2.png');

trackimg=loadImage('./assets/track.jpg');

}

function setup(){

createCanvas(windowWidth,windowHeight);

database=firebase.database();

jogovar=new jogo();
jogovar.obterestadodejogo();
jogovar.start();
}

function draw(){

  background(fundoimg);

if(numerodejogadores===2){

jogovar.atualizarjogo(1);


}
if (estadodejogo===1){
  jogovar.play()
}

}









