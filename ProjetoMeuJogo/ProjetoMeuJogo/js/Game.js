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
    Form.hide ();

    
  }

  play () {
    this.elements ();
    Player.getPlayersInfo ()
      if (allPlayers !== undefined ) {
        image (backGroundImg2, 800,800)
        drawSprites ()
      }
      
  
  }

}
