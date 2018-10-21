var escalar;
var PantallaCarga = function() {};

PantallaCarga.prototype = { //Cargar toda la pantalla

    loadScripts: function() {
        game.load.script('style', 'src/librerias/style.js');
        game.load.script('WebFont', 'src/librerias/webfontloader.js');
        game.load.script('menuprincipal', 'src/pantallas/MenuPrincipal.js');
        game.load.script('planetas', 'src/pantallas/PlanetasMenu.js');
        game.load.script('planetasmenu', 'src/pantallas/MenuPrincipal.js');
        game.load.script('menuconfiguracion', 'src/pantallas/MenuConfiguracion.js');
        game.load.script('StateTransition', 'phaser-state-transition.js');
    },

    //Para cargar la musica del juego
    /* loadBgm: function () {
       game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
       game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
     },*/

    // cargar background de las pantallas
    loadImages: function() {
        //Pantalla de menu de inicio
        game.load.image('menu-principal-bg', 'assets/img/menuPrincipal/fondoMenuInicio.png');
        game.load.spritesheet('botonJugarC', 'assets/img/menuPrincipal/botonJugarMenuPrincipal.png', 294, 94);
        game.load.spritesheet('botonSalir', 'assets/img/menuPrincipal/botonSalirMenuPrincipal.png', 294, 94);
        game.load.spritesheet('botonConfiguracion', 'assets/img/menuPrincipal/configMenuPrincipal.png', 52, 52);

        //Pantalla de
        game.load.image('menu-bg', 'assets/img/menuPrincipal/menu-bg.jpg');
        game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');

        //Botones inferiores de salida
        game.load.image('volverPrincipalPlanetas', 'assets/img/pantallaNiveles/salir.png');
        game.load.image('salirConfig', 'assets/img/pantallaNiveles/salir.png');
        game.load.image('configMenu', 'assets/img/pantallaNiveles/salir.png');

        game.load.image('background', 'assets/img/pantallaNiveles/background.png');
        game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
        game.load.image('volver', 'assets/img/pantallaNiveles/salir.png');


        game.load.spritesheet('mundo1', 'assets/img/pantallaNiveles/Ciudad.png', 265, 257);
        game.load.spritesheet('mundo2', 'assets/img/pantallaNiveles/Playa.png', 265, 186);
        game.load.spritesheet('mundo3', 'assets/img/pantallaNiveles/Manglar.png', 265, 223);
        game.load.spritesheet('mundo4', 'assets/img/pantallaNiveles/ciudad.png', 265, 257);
    },

    loadFonts: function() {
        //Para cargar tipografias
        WebFontConfig = {
            custom: {
                families: ['TheMinion'],
                urls: ['assets/style/theminion.css']
            }
        }
    },

    init: function() { //orientacion x ,orientacion y, Recibe la img llamada en main.js(brand y loading)
        this.logo = game.make.sprite(game.world.centerX, game.world.centerY, 'brand');
        utils.centerGameObjects([this.logo]);
    },

    preload: function() {
        game.scale.forceOrientation(false, true);
        game.add.sprite(0, 0, 'stars');

        if (window.innerWidth < 630) {
            escalar = window.innerWidth / 1000;
        } else {
            escalar = window.innerWidth / 1400;
        }

        game.add.existing(this.logo).scale.setTo(escalar);

        this.loadScripts();
        this.loadImages();
        this.loadFonts();
        //this.loadBgm();   -----> llama a cargar la musica

    },

    addGameStates: function() {

        game.state.add("MenuPrincipal", MenuPrincipal);
        game.state.add("PlanetasMenu", PlanetasMenu);
        game.state.add("MenuConfiguracion", MenuConfiguracion);
    },

    /*addGameMusic: function () {
      music = game.add.audio('dangerous');
      music.loop = true;
      music.play();
    },*/

    create: function() {
        this.addGameStates();
        //this.addGameMusic();     -----> Agrega el cargarMusica

        setTimeout(function() {
            game.state.start("MenuPrincipal");
        }, 1000);
    }
};