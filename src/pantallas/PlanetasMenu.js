var botonVolver, botonMundo1, botonMundo2, botonMundo3, botonMundo4;
var posicionX1,posicionX2,posicionY1,posicionY2;
var PlanetasMenu = function() {};

PlanetasMenu.prototype = {

  init: function () {
    this.optionCount = 1;
  },
  create: function () {
    var themes = [];
    themes.push(game.add.sprite(0, 0, 'theme1'));
    themes.push(game.add.sprite(0, 0, 'theme2'));
    themes.push(game.add.sprite(0, 0, 'theme3'));
    themes.push(game.add.sprite(0, 0, 'theme4'));
    game.load.spritesheet('botonVolver', 'volverPrincipalPlanetas', 20, 20);

    //number of themes
    var totalThemes = 4;
    
    
    //the selected theme
    var prime = 0;
    
    //speed of moving animation
    var animationSpeed = 200;

    botonVolver = game.add.button(20, window.innerHeight - 70, 'volverPrincipalPlanetas', volverMenuPrincipalClick, this, 0);
    
    //initial setup; all items on the right side; anchor set to mid;
    themes.forEach(function (item) {
      item.anchor.setTo(0.5, 0.5);
      item.x = game.width + 150;
      item.y = game.height / 2;
      item.inputEnabled = true;
      item.events.onInputDown.add(clickListener, this);
    })

    
    
    //initial position of themes on stage based on the selected theme 
    function setToPosition(prime) {
      themes[prime].x = game.width / 2;
      
      //check if there is another theme available to display on the right side; if yes then position it
      if (prime<(totalThemes-1)) {
        themes[prime + 1].x = game.width / 2 + 67 + 75;
        themes[prime + 1].scale.setTo(0.5,0.5);
      }

      //check if there is another theme available to display on the left side; if yes then position it
      if (prime > 0) {
        themes[prime - 1].x = game.width / 2 - 67 - 75;
        themes[prime - 1].scale.setTo(0.5,0.5);
      }
    }
    
    //set initial state
    setToPosition(prime);
    
    //predefined x positions for the 3 visible cards
    var xleft = game.width / 2 - 67 - 75;
    var xprime = game.width / 2;
    var xright = game.width / 2 + 67 + 75;
    
    //move to next theme
    function nextTheme() {
      //move prime left
      game.add.tween(themes[prime]).to( { x: xleft}, animationSpeed, null, true);
      game.add.tween(themes[prime].scale).to( { x: 0.5 , y: 0.5}, animationSpeed, null, true);
      //move right to prime
      if (prime < 3) {
        game.add.tween(themes[prime+1]).to( { x: xprime}, animationSpeed, null, true);
        game.add.tween(themes[prime+1].scale).to( { x: 1 , y: 1}, animationSpeed, null, true);
      }
      //move new to right
      if (prime < 2) {
        themes[prime+2].x = game.width + 150;
        themes[prime+2].scale.setTo(0.5,0.5);
        game.add.tween(themes[prime+2]).to( { x: xright}, animationSpeed, null, true);
      }
      //move left out
      if (prime>0) {
        //themes[prime+1].x = -150;
        themes[prime-1].scale.setTo(0.5,0.5);
        game.add.tween(themes[prime-1]).to( { x: -150}, animationSpeed, null, true);
      }
      prime++;
      
    }
    
    //move to previous theme
    function previousTheme() {
      //move prime left
      game.add.tween(themes[prime]).to( { x: xright}, animationSpeed, null, true);
      game.add.tween(themes[prime].scale).to( { x: 0.5 , y: 0.5}, animationSpeed, null, true);
      //move left to prime
      if (prime > 0 ) {
        game.add.tween(themes[prime-1]).to( { x: xprime}, animationSpeed, null, true);
        game.add.tween(themes[prime-1].scale).to( { x: 1 , y: 1}, animationSpeed, null, true);
      }
      //move new to left
      if (prime > 1) {
        themes[prime-2].x = - 150;
        themes[prime-2].scale.setTo(0.5,0.5);
        game.add.tween(themes[prime-2]).to( { x: xleft}, animationSpeed, null, true);
      }
      //move right out
      if (prime < (totalThemes-1)) {
        //themes[prime+1].x = -150;
        themes[prime+1].scale.setTo(0.5,0.5);
        game.add.tween(themes[prime+1]).to( { x: game.width + 150}, animationSpeed, null, true);
      }
      prime--;
    }
    
    //click on theme listener 
    function clickListener (el) {
      console.log(themes.indexOf(el));
      var clickedPos = themes.indexOf(el);
      if (clickedPos > prime) {
        //move to left
        nextTheme();
      } else if (clickedPos < prime) {
        //move to right
        previousTheme();
      }
    }
    

   /* game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'background');
    game.load.spritesheet('botonVolver', 'volver', 20, 20);

    game.load.spritesheet('botonMundo1', 'botonUniversal', 50, 50);
   /* game.load.spritesheet('botonMundo2', 'botonUniversal', 200, 200);
    game.load.spritesheet('botonMundo3', 'botonUniversal', 200, 200);
    game.load.spritesheet('botonMundo4', 'botonUniversal', 200, 200);

    posicionY1=(game.world.centerY/2)-30;
    if(window.innerWidth<630)
    {
      posicionX1=(game.world.centerX / 2)-60;
      posicionX2=(game.world.centerX) + ((game.world.centerX / 2)-60);    
      posicionY2=(game.world.centerY) + (game.world.centerY / 2)-120;
    }else{
      posicionX1=(game.world.centerX / 2)-15;
      posicionX2=(game.world.centerX) + ((game.world.centerX / 2)-105);
      posicionY2=(game.world.centerY) + (game.world.centerY / 2)-90;
    }

    botonVolver = game.add.button(20, window.innerHeight - 70, 'volver', volverMenuPrincipal, this, 0);

    botonMundo1 = game.add.button(posicionX1, posicionY1, 'botonUniversal', clickMundo1, this,0);
    botonMundo2 = game.add.button(posicionX2, posicionY1, 'botonUniversal', clickMundo2, this,0);
    botonMundo3 = game.add.button(posicionX1, posicionY2, 'botonUniversal', clickMundo3, this,0);
    botonMundo4 = game.add.button(posicionX2, posicionY2, 'botonUniversal', clickMundo4, this,0);*/
  },

};

function volverMenuPrincipalClick () {
    game.state.start("MenuPrincipal", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight); 
}
function clickMundo1 () {
    console.log("clickMundo1");
}
function clickMundo2 () {
    console.log("clickMundo2");
}
function clickMundo3 () {
    console.log("clickMundo3");
}
function clickMundo4 () {
    console.log("clickMundo4");
}

//Phaser.Utils.mixinPrototype(MenuPrincipal.prototype);
