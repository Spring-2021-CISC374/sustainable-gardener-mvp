class Home extends Phaser.Scene {

  constructor() {
    super("Home");
  }

  preload() {
    
    this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "homeImg");
    this.background.scale = 0.75;
    this.player = this.physics.add.sprite(650, 780, "playerImg");
    console.log(this.player.x)
    this.load.image("shovel", "assets/shovel.png");
    this.load.image("scroll", "assets/scroll.png");
    this.load.image("checkmark", "assets/checkmark.png");
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
    })

    // task list 
    this.paper = this.add.image(1275, 200, "scroll");
    this.paper.setScale(0.25);
    this.add.text(1200,100, "Task List:",{fill:"#000000", fontSize:"25px"});
    this.add.text(1200,150, "- Use arrow keys to move player",{fill:"#000000", fontSize:"10px"});
    this.add.text(1200,175, "- Click on the shovel to pick it up",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,200, "- Right click to put down or \n drop object",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,230, "- Now walk down the road to \n get to the town from your home",{fill:"#000000", fontSize:"9px"});

    // checkmark for player movement
    this.checkmark1 = this.add.image(1190, 150, "checkmark").setVisible(false);
    this.checkmark1.setScale(.025);

    // checkmark for picking up shovel
    this.checkmark2 = this.add.image(1190, 175, "checkmark").setVisible(false);
    this.checkmark2.setScale(.025);

    // checkmark for putting down hose
    this.checkmark3 = this.add.image(1190, 200, "checkmark").setVisible(false);
    this.checkmark3.setScale(.025);    

    // checkmark for going to the town
    this.checkmark4 = this.add.image(1190, 230, "checkmark").setVisible(false);
    this.checkmark4.setScale(.025);       
    

    // player movement
    this.player.setInteractive();
    this.player.setScale(3);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.shovel1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "shovel");
    console.log(this.shovel1.x)
    this.shovel1.setInteractive();
    this.shovel1.setScale(0.25);
    this.shovel1.setInteractive();


    this.input.mouse.disableContextMenu();

    this.input.on('pointerdown', function (pointer) {

      if (pointer.rightButtonDown()) {

        this.add.image(pointer.x, pointer.y, 'hose');
        this.checkmark3.setVisible(true);
        // this.add.text(20, 20, "Right Button Clicked", { font: "25px Arial", fill: "black" });

      }
      else {
        this.add.image(pointer.x, pointer.y, 'shovel');
       
      }

    }, this);


    //add a listener to the scene, this will pass the object clicked to the function
    this.input.on('gameobjectdown', this.onClicked.bind(this));
  }

  //pointer is the mouse that triggered the event
  onClicked(pointer, objectClicked) {
    objectClicked.destroy();
    this.checkmark2.setVisible(true);
    // this.add.text(config.width / 2 - 50, config.height / 2, "You picked up the shovel!", {
    //   font: "10px Courier",
    //   fill: "white",
    //   align: "center",
    // });
  }

  update() {
    this.shovel1.angle += 1;
    var pointer = this.input.activePointer;

    // console.log(this.player.x)

    if(this.player.y >= 780 && this.player.x >= 635 && this.player.x <= 689){
      this.checkmark4.setVisible(true);
    }
    if(this.player.y >= 783 && this.player.x >= 635 && this.player.x <= 689){
      this.scene.start('Town');
      console.log('bottom');
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
      this.checkmark1.setVisible(true);
    }
    else if (this.cursorKeys.right._justDown) {
      this.player.setVelocityX(175);
      this.player.play("player_anim_right", true);
      this.checkmark1.setVisible(true);
    }
    else if (this.cursorKeys.up._justDown) {
      this.player.setVelocityY(-175);
      this.player.play("player_anim_up", true);
      this.checkmark1.setVisible(true);
    }
    else if (this.cursorKeys.down._justDown) {
      this.player.setVelocityY(175);
      this.player.play("player_anim_down", true);
      this.checkmark1.setVisible(true);
    }
  }


}
