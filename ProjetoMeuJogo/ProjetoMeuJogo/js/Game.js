class Game {
  constructor() {
    this.resetTitle = createElement("h2"); 
    this.resetButton = createButton(""); 
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
    image(backGroundImg2, 0, -height*5 ,width, height*6)
    this.resetTitle.html ('reiniciar');
    this.resetTitle.class ('resetText')
    this.resetTitle.position (width/2+200, 40)
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);

  }

  resetButton() {
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
    this.resetButton ()
    Player.getPlayersInfo ()
      if (allPlayers !== undefined ) {
        var index = 0
        /*for (var i  in allPlayers) {
          index =+ 1;
          var x = allPlayers [i].positionX
          var y = height - allPlayers [i].positionY
        }*/

        //if(player1Boats === 2 || player2Boats === 2) {
         // this.end ()
        // }
        drawSprites ()

    
      }

  }

  end () {

  }


}
