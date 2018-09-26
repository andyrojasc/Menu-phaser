var escalar;
var PantallaCarga = function () {};

PantallaCarga.prototype = {//Cargar toda la pantalla

  loadScripts: function () {
    game.load.script('style', 'src/librerias/style.js');
    game.load.script('WebFont', 'src/librerias/webfontloader.js');
    game.load.script('menuprincipal','src/pantallas/MenuPrincipal.js');
    game.load.script('planetas', 'src/pantallas/PlanetasMenu.js');
    game.load.script('planetasmenu','src/pantallas/MenuPrincipal.js');
    game.load.script('StateTransition', 'phaser-state-transition.js');
  },

  //Para cargar la musica del juego
 /* loadBgm: function () {
    game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
    game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
  },*/

  // cargar background de las pantallas
  loadImages: function () {
    game.load.image('menu-bg', 'assets/img/menuPrincipal/menu-bg.jpg');
    game.load.image('botonJugar', 'assets/img/menuPrincipal/button_sprite_sheet.png');

    game.load.script('planetasmenu','src/pantallas/MenuPrincipal.js');

    game.load.image('menu-bg', 'assets/img/menuPrincipal/menu-bg.jpg');
    game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
    game.load.image('volver', 'assets/img/pantallaNiveles/salir.png');
    game.load.image('background', 'assets/img/pantallaNiveles/background.png');
    game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
    game.load.image('volver', 'assets/img/pantallaNiveles/salir.png');
  },

  loadFonts: function () {
    //Para cargar tipografias
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {                //orientacion x ,orientacion y, Recibe la img llamada en main.js(brand y loading)
    this.logo = game.make.sprite(game.world.centerX, game.world.centerY, 'brand');    
    utils.centerGameObjects([this.logo]);
  },

  preload: function () {
    game.add.sprite(0, 0, 'stars');
    
    if(window.innerWidth<630)
    {
      escalar = window.innerWidth / 1000;
    }else{
      escalar = window.innerWidth / 1400;
    }
    
    game.add.existing(this.logo).scale.setTo(escalar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    //this.loadBgm();   -----> llama a cargar la musica

  },

  addGameStates: function () {

    game.state.add("MenuPrincipal",MenuPrincipal);
    game.state.add("PlanetasMenu",PlanetasMenu);
  },

  /*addGameMusic: function () {
    music = game.add.audio('dangerous');
    music.loop = true;
    music.play();
  },*/

  create: function() {
    this.addGameStates();
    //this.addGameMusic();     -----> Agrega el cargarMusica

    setTimeout(function () {
      game.state.start("MenuPrincipal");
    }, 1000);
  }
};
