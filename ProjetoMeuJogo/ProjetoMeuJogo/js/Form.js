
class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Iniciar");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.input.position(width / 2 - 110, 450);
    this.playButton.position(width / 2 - 90, 500);
    this.greeting.position(width / 2 - 300, 400);
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value ();
      player.index = playerCount; 
      player.addPlayer();
      player.updateCount (playerCount); 
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
