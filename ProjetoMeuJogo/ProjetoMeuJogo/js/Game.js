class Game {
  constructor() {
    
  }

  getState () {
    var gameStateRef = database.ref ('gameState')
    gameStateRef.on ("value", function (data) {
      gameState = data.val ()
    })
  }

  update (state) {
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

  elements () {
    form.hide ();
    this.resetTitle.html ('reiniciar');
    this.resetTitle.class ('resetText')
    this.resetTitle.position (width/2+200, 40)

  }

  resetButton () {
    this.reset.mousedPressed (()=> {
      database.ref ("/").set ({
        gameState : 0,
        playerCount : 0,
        players : {}
      })
      window.location.reload ()
    })
    
  }

  play () {
    this.elements ();
    this.reserButton ()
    Player.getPlayersInfo ()
      if (allPlayers !== undefined ) {
        image(backGroundImg2, 0, -height*5 ,width, height*6)
        var index = 0
        for (var i  in allPlayers) {
          index =+ 1;
          var x = allPlayers [i].positionX
          var y = height - allPlayers [i].positionY
        }
        drawSprites ()
      }

  }
}
