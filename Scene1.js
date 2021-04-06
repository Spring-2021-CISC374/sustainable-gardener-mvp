class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("shovel", "assets/images/shovel.png");
        this.load.image("background", "assets/images/background.jpg");
        this.load.image("hose", "assets/images/hose2.png");

    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }

}