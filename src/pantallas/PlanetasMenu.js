var botonVolver, botonMundo1, botonMundo2, botonMundo3, botonMundo4;
var posicionX1,posicionX2,posicionY1,posicionY2;
var PlanetasMenu = function() {};

PlanetasMenu.prototype = {

  init: function () {
    this.optionCount = 1;
  },
  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'background');
    game.load.spritesheet('botonVolver', 'volver', 20, 20);

    game.load.spritesheet('botonMundo1', 'botonUniversal', 50, 50);
   /* game.load.spritesheet('botonMundo2', 'botonUniversal', 200, 200);
    game.load.spritesheet('botonMundo3', 'botonUniversal', 200, 200);
    game.load.spritesheet('botonMundo4', 'botonUniversal', 200, 200);*/

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
    botonMundo4 = game.add.button(posicionX2, posicionY2, 'botonUniversal', clickMundo4, this,0);
  },

};

function volverMenuPrincipal () {
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
