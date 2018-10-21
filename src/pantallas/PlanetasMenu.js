var botonVolver;
var xInicial, xFinal;
var PlanetasMenu = function() {};

PlanetasMenu.prototype = {

    init: function() {

    },
    create: function() {
        this.rectangles = [];

        this.rectangles.push(game.add.button(45, this.game.world.centerY - 150, 'mundo1', clickMundo01, this));
        this.rectangles.push(game.add.button(350, this.game.world.centerY - 75, 'mundo2', clickMundo02, this));
        this.rectangles.push(game.add.button(650, this.game.world.centerY - 120, 'mundo3', clickMundo03, this));
        this.rectangles.push(game.add.button(950, this.game.world.centerY - 150, 'mundo4', clickMundo04, this));


        this.game.world.setBounds(0, 0, 320 * this.rectangles.length, this.game.height);

        this.dragging = false;
        this.game.input.onDown.add(this.beginMove, this);
        this.game.input.onUp.add(this.endMove, this);
        this.game.input.addMoveCallback(this.moveCamera, this);

        botonVolver = game.add.button(20, window.innerHeight - 70, 'volverPrincipalPlanetas', volverMenuPrincipalClick, this, 0);
        botonVolver.fixedToCamera = true;
    },
    update: function() {

    },
    beginMove: function() {
        this.startX = this.game.input.x;
        this.xInicial = this.game.input.x;
        this.dragging = true;
    },
    endMove: function() {
        this.dragging = false;
        this.xFinal = this.game.input.x;

    },
    moveCamera: function(pointer, x, y) {
        if (this.dragging) {
            var delta = x - this.startX;
            this.game.camera.x -= delta;
            this.startX = x;

        }
    },
    render: function() {
        for (var i = 0; i < this.rectangles.length; i++) {
            var rectangle = this.rectangles[i];
            this.game.debug.geom(rectangle.sprite, rectangle.tint);
        }
    },


};

function volverMenuPrincipalClick() {
    game.state.start("MenuPrincipal", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
}

function clickMundo01() {
    if (this.xInicial == this.xFinal) {
        console.log("clickMundo1111111");
    }
}

function clickMundo02() {
    if (this.xInicial == this.xFinal) {
        console.log("clickMundo22222");
    }
}

function clickMundo03() {
    if (this.xInicial == this.xFinal) {
        console.log("clickMundo33333");
    }
}

function clickMundo04() {
    if (this.xInicial == this.xFinal) {
        console.log("clickMundo44444");
    }
}

//Phaser.Utils.mixinPrototype(MenuPrincipal.prototype);