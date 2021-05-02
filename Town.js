class Town extends Phaser.Scene {

    constructor(){
        super("Town");
    }

    preload(){
        this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "townImg");
        this.background.scale = 0.75;
      this.player = this.physics.add.sprite(760, 40, "playerImg");
      this.load.image("shovel", "assets/shovel.png");
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
      
      //inventory stuff

    this.inventory = this.add.image(config.width/3, config.height/1.15, "inventory");
    this.inventory.setScale(5,4)

    this.container = this.add.container(config.width / 3, config.height / 1.15);
    this.container.setDepth(2);
    
    console.log(app.inventoryArr)

    this.i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        this.player.setInteractive();
        this.player.setScale(3);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
    }

  update() {
      
    this.showInventory();
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
  
    showInventory() {
    
      var o = this.input.keyboard.addKey("o");
      
      if (Phaser.Input.Keyboard.JustDown(this.i)) {
        this.container.setVisible(!this.container.visible);
        this.inventory.setVisible(!this.inventory.visible);
      } 
  
    }
  
    highlightItem(item) {
      item.on('pointerover', () => {
        item.alpha = 0.5;
      })
  
      item.on('pointerout', () => {
        item.alpha = 1;
      })
    }
  
    addItemtoInventory(object) {
      
      var plantobj = false;
      if(object[1] !== undefined){ 
        plantobj = true;
        app.inventoryArr.push(object[1]);
      }
      else{
        plantobj = false;
        app.inventoryArr.push(object)
      }
  
      var x = 10;
      for (var i = 0; i < app.inventoryArr.length; i++){
        var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key+"_inv");
        this.container.add(sprite);
        x = x + 64;
      }

    }
}