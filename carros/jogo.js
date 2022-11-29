class jogo{

    constructor(){



    }

start(){

jogadorvar=new jogadorclasse();

numerodejogadores=jogadorvar.obterquantidadejogadores();

formulariovar=new formulario();

formulariovar.show();

carro1=createSprite(width/2-50,height-100);
carro1.addImage('carro1',carro1img);
carro1.scale=0.5;

carro2=createSprite(width/2+100,height-100);
carro2.addImage('carro2',carro2img);
carro2.scale=0.5;

matrizdoscarros=[carro1,carro2];
}

obterestadodejogo(){

var estadoref=database.ref('estadodejogo');
estadoref.on('value',function(data){
    estadodejogo = data.val() 
})




}
atualizarjogo(estadoref){
    database.ref("/").update({
        estadodejogo:estadoref
    })

}

elementos(){

  formulariovar.hide();
  
  formulariovar.titulo.position(40,50);
  
  formulariovar.titulo.class('gameTitleAfterEffect');
  
  }

play (){

  this.elementos();

jogadorclasse.detalhesjogadores();

  if(allPlayers!== undefined)  {
    image(trackimg,0,-height*5,width,height*6);

drawSprites();

  }
}








}


 

























    
