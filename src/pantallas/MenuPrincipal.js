var botonJugar, botonSalir, botonCreditos, botonConfig;
var MenuPrincipal = function() {};

MenuPrincipal.prototype = {

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "ITM GAMES", {
      font: 'bold 35pt TheMinion',
      fill: '#fff',
      align: 'center'
    });
    //this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
                          //nombreVariable, objetoCargado, tamanios
    game.load.spritesheet('botonJugar', 'botonJugar', 193, 71);
    game.load.spritesheet('botonCreditos', 'botonJugar', 193, 71);
    game.load.spritesheet('botonSalir', 'botonJugar', 193, 71);
    game.add.existing(this.titleText);

    game.load.spritesheet('botonConfig', 'configMenu', 20, 20);

    botonVolver = game.add.button(20, window.innerHeight - 70, 'configMenu', menuConfigClick, this, 0);

    //button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
    botonJugar = game.add.button(game.world.centerX - 95, game.world.centerY-80, 'botonJugar', clickJugar, this,0);
    botonCreditos = game.add.button(game.world.centerX - 95, game.world.centerY+10, 'botonJugar', clickCreditos, this,0);
    botonSalir = game.add.button(game.world.centerX - 95, game.world.centerY+100, 'botonJugar', clickSalir, this,0);
  },


};

function menuConfigClick() {
  game.state.start("MenuConfiguracion", Phaser.Plugin.StateTransition.Out.SlideTop, Phaser.Plugin.StateTransition.In.SlideTop);
}

function clickJugar () {
    //game.state.start("PlanetasMenu", Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
    game.state.start("PlanetasMenu", Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
}
function clickCreditos () {
    console.log("Creditos");
}
function clickSalir () {
    console.log("Salir");
}

//Phaser.Utils.mixinPrototype(MenuPrincipal.prototype);
