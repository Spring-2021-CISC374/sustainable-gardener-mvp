class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    
    this.player = this.physics.add.sprite(config.width / 10 - 50, config.height / 2, "playerImg");
    
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
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

  }
  update() {
    this.movePlayer();
  }

  movePlayer() {
    this.player.setVelocity(0);
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-150);
      this.player.play("player_anim_left");
    }
    else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(150);
      this.player.play("player_anim_right");
    }
    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-150);
      this.player.play("player_anim_up");
    }
    else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(150);
      this.player.play("player_anim_down");
    }
  }


}