class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    preload() {
        config.tutorial = true;
        
        //load static images
        this.load.image("homeImg", "assets/HomeImage.png");
        this.load.image("townImg", "assets/Town_image.png");
        this.load.image("shovel", "assets/shovel.png");
        this.load.image("shovel", "assets/images/shovel.png");
        this.load.image("dirt", "assets/dirt_plot.png");
        this.load.image("seeds", "assets/seeded_plot.png");
        this.load.image("hose", "assets/images/hose2.png");
        this.load.image("english_ivy_1", "assets/english_ivy_1.png");
        this.load.image("english_ivy_2", "assets/english_ivy_2.png");
        this.load.image("english_ivy_3", "assets/english_ivy_3.png");

        //player sprites
        this.load.spritesheet("player_left", "assets/player_left.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("player_down", "assets/player_down.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("player_up", "assets/player_up.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("player_right", "assets/player_right.png", {
            frameWidth: 16,
            frameHeight: 18
        });

        //townsperson1 (t1) sprites
        this.load.spritesheet("t1_left", "assets/Townsperson1_left.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_down", "assets/Townsperson1_down.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_up", "assets/Townsperson1_up.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_right", "assets/Townsperson1_right.png", {
            frameWidth: 16,
            frameHeight: 18
        });


        
       this.load.image("shovel", "assets/images/shovel.png");
        this.load.image("background", "assets/images/background.jpg");
        this.load.image("hose", "assets/images/hose2.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("Home");

        //player animation
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

        //townsperson1 animation
        this.anims.create({
            key: "t1_anim_left",
            frames: this.anims.generateFrameNumbers("t1_left"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "t1_anim_right",
            frames: this.anims.generateFrameNumbers("t1_right"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "t1_anim_up",
            frames: this.anims.generateFrameNumbers("t1_up"),
            frameRate: 20,
            repeat: 0
        });
        this.anims.create({
            key: "t1_anim_down",
            frames: this.anims.generateFrameNumbers("t1_down"),
            frameRate: 20,
            repeat: 0
        });
    }

}