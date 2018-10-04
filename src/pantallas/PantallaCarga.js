var escalar;
var PantallaCarga = function () {};

PantallaCarga.prototype = {//Cargar toda la pantalla

  loadScripts: function () {
    game.load.script('style', 'src/librerias/style.js');
    game.load.script('WebFont', 'src/librerias/webfontloader.js');
    game.load.script('menuprincipal','src/pantallas/MenuPrincipal.js');
    game.load.script('planetas', 'src/pantallas/PlanetasMenu.js');
    game.load.script('planetasmenu','src/pantallas/MenuPrincipal.js');
    game.load.script('menuconfiguracion','src/pantallas/MenuConfiguracion.js');
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

    //Botones inferiores de salida
    game.load.image('volverPrincipalPlanetas', 'assets/img/pantallaNiveles/salir.png');
    game.load.image('salirConfig', 'assets/img/pantallaNiveles/salir.png');
    game.load.image('configMenu', 'assets/img/pantallaNiveles/salir.png');

    game.load.image('background', 'assets/img/pantallaNiveles/background.png');
    game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
    game.load.image('volver', 'assets/img/pantallaNiveles/salir.png');


    game.load.image('theme1', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABBklEQVRoge3SwU6DQBSF4QNjYdthhtolTU3cFq+mLiH1AWjUfUl8AGLjHle+tgMpxk1NGNTV+VZDLvmTgQsQERERERERERER/Q/dWc/Pzt9HtES0yA+tfESrf1uda4VP+tdasfZolXfAtTRQya55MRXC47abRc/j72hv9SHMHyyU+bCXjynWtiyG6dgW6ia+wf6gltBtZHHMZgvP1gJBEbRQrUqQZzBYAveerQTBZiWSF+4vuGcTGhHr2Zq7Vu2WdnNqRe5sprQq9Ke+lX6berRWLeJquKP7Xm8TWhcJ9kMLZTZLJ7Qi3e3XqVX771fXwpW8frXC3TbzaBEREREREREREdFf+gQ5+yFDSnqbkwAAAABJRU5ErkJggg==');
    
    game.load.image('theme2','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABNElEQVRoge3SQU6DQBgF4AcjtEunTFuWNJi4BUetS7AcgMYLlMQDoI17XHltZyhtVyROo67et4K+5DH95weIiIiIiIiIiIiI/oe00uux+FY//7xLa6n1eFdeycThZDkgxrqmMT7bX+q6msHLXLvKBzubFmK2aV+jGv5+bTORjX9nrEvdy52fVwoi+lLLlzlSVRYmC2r3cyk07eQO252IIbtQYZ8Ei0PsPK8FvMLrIDoxQ54gQgw89enU+R7tiFda54WZjnmP/Ehr1advjw5Vwz16WWOWNhu6QvMc2TBVLsc6d9Xon/qu+RCWLtM6d606TOrjfzTz+jBZsHSqOnWZvdweu1AmgT2a+e2irlDa/Rq6msN+CVVVxQVduNHvpy5/s05M5pk7cNl7IiIiIiIiIiIi+kvfyDslH1Huoh0AAAAASUVORK5CYII=');
    
    game.load.image('theme3','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABM0lEQVRoge3UwW6CMBzH8R904tVSdB4hLtkV7BZ3hLAHwPgCkvkATLM7nvbaawG9maxk8/T7nCD/5JvSNgBERERERERERERE9yGt1ezW+KCOv29pLbW+2QpkKWOHlWWAuNWahjg3f9QSDZLctVW8As+6gQjL5qAq+KdNt67KvRW9yL2fvUcQ6jt63M2xioqh8Vm5tlA30zW2e7GEbIMIp3iysEM/WzqkutYCXu61EK0IkcVQMIW3riVV7NgK4aWJ1lluTsG8K19pHXVTv2gdWzPTqs2lTYdWYJ5VP3Y/R9uym3xpzfvZxx4iHdFKWnMFLt9o9uvLLqoyGzmi9RBie2mhiCd2aWKNczuiFUh7v4ZW3d+viSqVQ+rawpM+Xlt+uYntcOfynyAiIiIiIiIiIqL/9QPC+Sgv2d5Y+QAAAABJRU5ErkJggg==');
    
    game.load.image('theme4','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABGUlEQVRoge3SO26DQBSF4QMTIKV52S5BjpQWMonsEmQvACsbACkLQLHS02XbuYNxOkcZ8qjOVw264hczDEBERERERERERET0P0Jjs7g6d/X3W1qHWn/RCmKbLysBdb3V/WJrZ9+qn4B73UNF+/4lbuCetuPwtrBuJY9h65aHBCp+T1bPKTZJXZlh3tq30PXBA46tWiMc/ASnzFua4QHWrSWcyhmgBhWhzOT9tZyUzLzIvhXBKXKty0r+gjzHbqx1IrN8sG8tpNXJpS2mli9rE+nk+u3mtBqMq7GVnmemv5rRkv0EzWWPcl5v5/GsPd5EOF5aqDMv/UHLD839mlrddL9mtnCnXz9b7n6bzWgRERERERERERHRX/oAyJEitMDR3yQAAAAASUVORK5CYII=');
    
    game.load.image('theme5','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABOElEQVRoge3SQU+DMBjG8Qe6gceVdnNHyIxewarzCNk+wIhfABI/AHEx8Ujiwa9tm43d0HWJnp7fjbzJPy19ASIiIiIiIiIiIqL/IZ3VbGQa2WFzdssYacxoa6qMOb8FFIAYa13lHqHfWuUFreoRuDMdRLLpXtUO4X7tZnHn39IPsgmLrYZQX/r6ZY6VrtyRJh/bnXcLbRffo27EErKPNPbpdGFnQkrt21ogKIMeohcJihQKS+DZzoKn28LnYK6VIMgzY4rSvoL9VqHdBXegKEVberZmttXavcyPLbej6jAOxt74x5a7zNCan8bCZ8WGVtYj3g13tP/r3c7qBll5QWuSoB5aqNKpO1rWofL9964VSbdfx1Z72K9Ybbx3wrVwY95OrXCzTt3wU/c+LSIiIiIiIiIiIvpL3+DHJudxDOGEAAAAAElFTkSuQmCC');
    
    game.load.image('theme6','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpbFxcWcnJyjo6O3t7e+vr6qqqqxsbH7WNssAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABOElEQVRoge3SvW7CMBiF4ZMYko74h58xlEpdk5oKxqRwAaDeAEi9gKioe5h627Uh6QaqUdvpPBPok17ZzgcQERERERERERER/Q/pzQaXxnfFy89b1kprL7eOcx1ysgIQF1sax80vtfpDzJrQVvUMPNoaQq3qN71BfFj4WaoCQm3LzOUuLtYGQn+a8as7jalKN+updcixzi3s6/QJ252YQDaJwSHrj9xMzGXw248QlVED0QiFInMvPgGWbhaZ+yrkYL6lEOVTa4vSfQX3X8faWuNbCtMysDVwrb1b2rxtJe63v5zIr+zLtZZfpK41PM96uc+Ft6YN0k13R/deHzjtxE137ClsuxaqrO+Ploxv2fsoT6Tfr7a1P+8XqtMnCG7hwb5/t+LVIvPDVNchLSIiIiIiIiIiIvpLX4mGJlBp+ZbMAAAAAElFTkSuQmCC');
    
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
    game.state.add("MenuConfiguracion",MenuConfiguracion);
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
