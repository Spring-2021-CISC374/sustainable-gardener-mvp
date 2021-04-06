class Scene2 extends Phaser.Scene {
  
  constructor() {
    super("playGame");
  }

  preload() {
    
    this.player = this.physics.add.sprite(config.width / 10 - 50, config.height / 2, "playerImg");
    this.load.image("shovel", "assets/shovel.png");
    
  }


  create() {
    this.add.text(20, 20, "Sustainable Gardener", {
      font: "25px Courier",
      fill: "white",
      align: "center",
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#2e2e2e',
        blur: 5,
        fill: true
      }
    });

    // player movement
    this.player.setInteractive();
    this.player.setScale(3);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    
    this.shovel1 = this.add.sprite(config.width/2 - 50, config.height/2, "shovel");
    this.shovel1.setInteractive();
    this.shovel1.setScale(0.25);
    this.shovel1.setInteractive();
     
        
    //add a listener to the scene, this will pass the object clicked to the function
    this.input.on('gameobjectdown', this.onClicked.bind(this));

  }

  //pointer is the mouse or finger touch that triggered the event
  onClicked(pointer, objectClicked) {
      objectClicked.destroy();
      this.add.text(config.width/2 - 50, config.height/2, "You picked up the shovel!", {
          font: "10px Courier",
          fill: "white",
          align: "center",
        });
  }

  update() {
    this.movePlayer();
    this.shovel1.angle += 1;
  }

  movePlayer() {
    this.player.setVelocity(0);
    if (this.cursorKeys.left._justDown) {
      this.player.setVelocityX(-175);
      this.player.play("player_anim_left", true);
    }
    else if (this.cursorKeys.right._justDown) {
      this.player.setVelocityX(175);
      this.player.play("player_anim_right", true);
    }
    else if (this.cursorKeys.up._justDown) {
      this.player.setVelocityY(-175);
      this.player.play("player_anim_up", true);
    }
    else if (this.cursorKeys.down._justDown) {
      this.player.setVelocityY(175);
      this.player.play("player_anim_down", true);
    }
  }


}
