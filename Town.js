class Town extends Phaser.Scene {

  constructor(){
      super("Town");
  }

    preload(){
        this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "townImg");
        this.background.scale = 0.75;
      this.player = this.physics.add.sprite(760, 40, "playerImg");
      this.load.image("shovel", "assets/shovel.png");

      this.load.image("scroll", "assets/scroll.png");
      this.load.image("checkmark", "assets/checkmark.png");
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
        
      //task list 
      this.paper = this.add.image(1275, 175, "scroll");
      this.paper.setScale(0.25);
      this.add.text(1200, 80, "Task List:",{fill:"#000000", fontSize:"25px"});
      this.add.text(1200,115, "- Find and speak to a member \n from your town",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,175, "- Click on the shovel to pick \n it up",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,200, "- Right click to put down or \n drop an object",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,230, "- Walk up to your garden and \n  click on the dirt to \n  grow a plant",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,270, "- Now continue walking down the \n  road to get to the town \n  from your home",{fill:"#000000", fontSize:"9px"});
    
    // checkmark for speaking to townsperson
      this.checkmark1 = this.add.image(1190, 115, "checkmark").setVisible(false);
      this.checkmark1.setScale(.025);

    // // checkmark for picking up shovel
    // this.checkmark2 = this.add.image(1190, 175, "checkmark").setVisible(false);
    // this.checkmark2.setScale(.025);

    // // checkmark for putting down hose
    // this.checkmark3 = this.add.image(1190, 200, "checkmark").setVisible(false);
    // this.checkmark3.setScale(.025);    

        
        
      
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

    this.cursorKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    });
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