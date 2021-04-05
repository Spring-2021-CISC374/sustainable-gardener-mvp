class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload(){
       // this.load.image("background", "assets/images/background.png");
       this.load.image("shovel", "assets/shovel.png");
        
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

    }
}