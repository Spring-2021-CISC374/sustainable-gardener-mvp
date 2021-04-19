class Town extends Phaser.Scene {

    constructor(){
        super("Town");
    }

    preload(){
        this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "townImg");
        this.background.scale = 0.75;
        this.player = this.physics.add.sprite(760, 40, "playerImg");
    }

    create(){
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

        this.player.setInteractive();
        this.player.setScale(3);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
    }

    update(){
        if(this.player.y <= 30 && this.player.x >= 736 && this.player.x <= 797){
            this.scene.start('Home');
          }
          else{
            this.movePlayer();
          }
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