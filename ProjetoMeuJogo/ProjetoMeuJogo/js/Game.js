class Game {
  constructor() {
    
  }

  getState () {
    var gameStateRef = database.ref ('gameState')
    gameStateRef.on ("value", function (data) {
      gameState = data.val ()
    })
  }

  updateState (state) {
    database.ref ('/').update ({
      gameState : state
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount ();
  }

  elemets () {
    form.hide ();

    
  }

  play () {
    this.elements ();
    Player.getPlayersInfo ()
      if (allPlayers !== undefined ) {
        image (backGroundImg2, 0, -height*5 ,width, height*6)
        drawSprites ()
      }
      
  
  }

}
