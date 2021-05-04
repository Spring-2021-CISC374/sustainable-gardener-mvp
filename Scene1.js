class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    preload() {
        config.tutorial = true;
        
        //load static images
        this.load.image("title", "assets/title.png");
        this.load.image("homeImg", "assets/HomeImage.png");
        this.load.image("townImg", "assets/Town_image.png");
        this.load.image("shovel", "assets/shovel.png");
        this.load.image("shovel_inv", "assets/shovel_inv.png");
        //this.load.image("shovel", "assets/images/shovel.png");
        this.load.image("dirt", "assets/dirt_plot.png");
        this.load.image("seeds", "assets/seeded_plot.png");
        this.load.image("seeds_watered", "assets/seeded_plot_watered.png")
        this.load.image("hose", "assets/images/hose2.png");
        this.load.image("english_ivy_1", "assets/english_ivy_1.png");
        this.load.image("english_ivy_1_watered", "assets/english_ivy_1_watered.png");
        this.load.image("english_ivy_2", "assets/english_ivy_2.png");
        this.load.image("english_ivy_2_watered", "assets/english_ivy_2_watered.png");
        this.load.image("english_ivy_3", "assets/english_ivy_3.png");
        this.load.image("english_ivy_3_inv", "assets/english_ivy_3_inv.png");
        this.load.image("english_ivy_seeds", "assets/english_ivy_seeds.png");
        this.load.image("english_ivy_seeds_inv", "assets/english_ivy_seeds_inv.png");
        this.load.image("sunflower_1", "assets/Sunflower_1.png");
        this.load.image("sunflower_1_watered", "assets/Sunflower_1_watered.png");
        this.load.image("sunflower_2", "assets/Sunflower_2.png");
        this.load.image("sunflower_2_watered", "assets/Sunflower_2_watered.png");
        this.load.image("sunflower_3", "assets/Sunflower_3.png");
        this.load.image("sunflower_3_inv", "assets/Sunflower_3_inv.png");
        this.load.image("sunflower_seeds", "assets/sunflower_seeds.png");
        this.load.image("sunflower_seeds_inv", "assets/Sunflower_seeds_inv.png");
        this.load.image("inventory", "assets/inventory.png");
        this.load.image("textbubble", "assets/textbubble.png");
        this.load.image('x_button', "assets/x.png");
        this.load.image('check_button', "assets/check.png")
        this.load.image('door_button', "assets/door_object.png")
        this.load.image('sus_button', "assets/sustainabilityButton.png")
        this.load.image('ivy_button', "assets/EnglishIvyButton.png")
        this.load.image('sunflower_button',"assets/GiantSunflowerButton.png")
        this.load.image("watering_can", "assets/watering_can.png");
        this.load.image("watering_can_inv", "assets/watering_can_inv.png");

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
        this.load.spritesheet("t1_left", "assets/t1_left.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_down", "assets/t1_down.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_up", "assets/t1_up.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_right", "assets/t1_right.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_stand_left", "assets/t1_stand_left.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t1_stand_right", "assets/t1_stand_right.png", {
            frameWidth: 16,
            frameHeight: 18
        });

        //townsperson1 (t2) sprites
        this.load.spritesheet("t2_left", "assets/t2_left.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t2_down", "assets/t2_down.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t2_up", "assets/t2_up.png", {
            frameWidth: 16,
            frameHeight: 18
        });
        this.load.spritesheet("t2_right", "assets/t2_right.png", {
            frameWidth: 16,
            frameHeight: 18
        });

        
       this.load.image("shovel", "assets/images/shovel.png");
        this.load.image("background", "assets/images/background.jpg");
        this.load.image("hose", "assets/images/hose2.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("Title");

        //player animation
        this.anims.create({
            key: "player_anim_left",
            frames: this.anims.generateFrameNames('player_left', {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_right",
            frames: this.anims.generateFrameNames('player_right', {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_up",
            frames: this.anims.generateFrameNames('player_up', {start: 4, end: 0}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "player_anim_down",
            frames: this.anims.generateFrameNames('player_down', {start: 4, end: 0}),
            frameRate: 10,
            repeat: 0
        });

        //townsperson1 animation
        this.anims.create({
            key: "Glenn_anim_left",
            frames: this.anims.generateFrameNames("t1_left", {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "Glenn_anim_right",
            frames: this.anims.generateFrameNames("t1_right", {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "Glenn_anim_up",
            frames: this.anims.generateFrameNames("t1_up", {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "Glenn_anim_down",
            frames: this.anims.generateFrameNames("t1_down", {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "Glenn_anim_stand_left",
            frames: this.anims.generateFrameNames("t1_stand_left", {start: 1}),
            frameRate: 10,
            repeat: 0
        });
        this.anims.create({
            key: "Glenn_anim_stand_right",
            frames: this.anims.generateFrameNames("t1_stand_right", {start: 1}),
            frameRate: 10,
            repeat: 0
        });

    //townsperson2 animation
    this.anims.create({
        key: "Darren_anim_left",
        frames: this.anims.generateFrameNames("t2_left", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: "Darren_anim_right",
        frames: this.anims.generateFrameNames("t2_right", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: "Darren_anim_up",
        frames: this.anims.generateFrameNames("t2_up", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: "Darren_anim_down",
        frames: this.anims.generateFrameNames("t2_down", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: "Darren_anim_stand_left",
        frames: this.anims.generateFrameNames("t2_left", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: "Darren_anim_stand_right",
        frames: this.anims.generateFrameNames("t2_right", {start: 1}),
        frameRate: 10,
        repeat: 0
    });
}

    

}