class formulario {

constructor(){

this.titulo=createImg('./assets/TITULO.png')

this.input=createInput('').attribute('placeholder',"digite seu nome");

this.botao=createButton("começar");

this.mensagem=createElement('h2');

}

posicaoelementos(){

this.titulo.position(120,50);

this.input.position(width/2-110,height/2-80);

this.botao.position(width/2-90,height/2-20);

this.mensagem.position(width/2-300,height/2-100);

}

estilos(){

this.titulo.class('gameTitle');

this.botao.class('customButton');

this.mensagem.class('greeting');

this.input.class("customInput");

}

esconder(){

this.botao.hide();

this.input.hide();

}

show(){

this.posicaoelementos();

this.estilos();

this.press();

}
    
press(){

this.botao.mousePressed(()=>{

 this.esconder();


var message = ` Olá, ${this.input.value()} </br>espere o outro jogador entrar...`; this.mensagem.html(message);

numerodejogadores = numerodejogadores + 1
jogadorvar.nome=this.input.value();
jogadorvar.index=numerodejogadores;
jogadorvar.adicionarjogador();
jogadorvar.atualizarjogadores(numerodejogadores);
})

}

}