var botonJugar, botonSalir, botonCreditos, botonConfig, escalarAncho, escalarAlto, posicionY, botonesX, botonJugarY, botonSalirY, botonConfigY;

var MenuPrincipal = function() {};

MenuPrincipal.prototype = {

    init: function() {
        this.titleText = game.make.text(game.world.centerX, 100, "ITM GAMES", {
            font: 'bold 35pt TheMinion',
            fill: '#fff',
            align: 'center'
        });
        //this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
        this.optionCount = 1;
    },
    create: function() {
        game.stage.disableVisibilityChange = true;

        this.fondo = game.add.sprite(0, 0, 'menu-principal-bg');
        this.fondo.scale.setTo(0.215);

        botonesX = game.world.centerX - 95;
        if (window.innerHeight > 590) {
            console.log("HOLA1");
            botonJugarY = game.world.centerY + 15;
            botonSalirY = game.world.centerY + 95;
            botonConfigY = window.innerHeight - 125;
        } else {
            console.log("HOLA2");
            botonJugarY = game.world.centerY - 10;
            botonSalirY = game.world.centerY + 65;
            botonConfigY = window.innerHeight - 100;
        }

        //nombreVariable, objetoCargado, tamanios
        game.load.spritesheet('botonJugar', 'botonJugar', 193, 71);
        game.load.spritesheet('botonSalir', 'botonSalir', 193, 71);
        //game.add.existing(this.titleText);

        game.load.spritesheet('botonConfiguracion', 'botonConfiguracion', 20, 20);

        //button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
        botonJugar = game.add.button(botonesX, botonJugarY, 'botonJugar', clickJugar, this, 0);
        botonSalir = game.add.button(botonesX, botonSalirY, 'botonSalir', clickSalir, this, 0);

        botonConfig = game.add.button(20, botonConfigY, 'botonConfiguracion', menuConfigClick, this, 0);
    },


};

function clickJugar() {
    //game.state.start("PlanetasMenu", Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
    game.state.start("PlanetasMenu", Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
}

function clickSalir() {
    console.log("Salir");
}

function menuConfigClick() {
    game.state.start("MenuConfiguracion", Phaser.Plugin.StateTransition.Out.SlideTop, Phaser.Plugin.StateTransition.In.SlideTop);
}

//Phaser.Utils.mixinPrototype(MenuPrincipal.prototype);