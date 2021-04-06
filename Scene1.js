class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload(){
       // this.load.image("background", "assets/images/background.png");
       this.load.image("shovel", "assets/shovel.png");
        this.load.spritesheet("player_left", "assets/player_left.png",{
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("player_down", "assets/player_down.png",{
            frameWidth: 16,
            frameHeight: 18
        });
        
        this.load.spritesheet("player_up", "assets/player_up.png",{
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("player_right", "assets/player_right.png",{
            frameWidth: 16,
            frameHeight: 18
        });
        
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: "player_anim_left",
            frames: this.anims.generateFrameNumbers("player_left"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_right",
            frames: this.anims.generateFrameNumbers("player_right"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_up",
            frames: this.anims.generateFrameNumbers("player_up"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_down",
            frames: this.anims.generateFrameNumbers("player_down"),
            frameRate: 20,
            repeat: 0
        });
    }
}