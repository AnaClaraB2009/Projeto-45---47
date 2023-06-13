class Form {

    constructor () {
      this.tittle = createImg ("./Images/titulo.png");
      this.name = createInput("").attribute("placeholder", "Digite Seu Nome");
      // o dado entre as "" é um texto
      // para ter um texto por traz do espaço de texto
      this.button = createButton ('Iniciar');
      this.greeting = createElement ('h2');
    }

    elementPosition () {
        this.tittle.position (width/2, height/2);
        this.name.position (width/ 2, height/2 + 50);
        this.button.position (width/2, height/2 +100);
        this.greeting.position (width/2, height/2 )
    }

    elementsStyle() {
        this.name.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }

    hide () {
        this.name.hide ();
        this.button.hide ();
        this.greeting.hide ();
    }

    mousePressed() {
        this.button.mousePressed(() => {
          this.name.hide();
          this.button.hide();
          var message = `
          Olá ${this.name.value()}
          </br>espere o 2º jogador entrar...`;
          this.greeting.html(message);
          playerCount += 1;
          //player.name = this.name.value();
          //player.index = playerCount;
          //player.addPlayer();
          //player.updateCount(playerCount);
          //player.getDistance();
        });
      }

    display () {
       
        // mostra o formulario 
      // porem deve criar um objeto de formulario
      // este deve ser criado na star do game.js (OBS: eu ainda não criei )
        // form = new Form();
        // form.display();
        
        
        this.elementPosition ();
        this.elementsStyle ();
        this.mousePressed (); 

    }

}