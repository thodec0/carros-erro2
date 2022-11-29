class jogadorclasse{

    constructor(){

this.nome=null;

this.index=null;

this.positionX=0;

this.positionY=0;

    }

adicionarjogador(){

var iddojogador="players/player"+this.index;

if(this.index===1){

    this.positionX=width/2-100;

}
else{

    this.positionX=width/2+100;

}

database.ref(iddojogador).set({

    nome:this.nome,positionX:this.positionX,positionY:this.positionY,

})

}

obterquantidadejogadores(){
var quantidaderef=database.ref('numerodejogadores') ;

quantidaderef.on('value',data=>{

    numerodejogadores = data.val()

})   ;

}

atualizarjogadores(quantidade){

database.ref("/").update({

    numerodejogadores:quantidade

})

}

static detalhesjogadores(){

var inforef=database.ref('players');

inforef.on('value',data=>{

    allPlayers = data.val() 

})

}

}