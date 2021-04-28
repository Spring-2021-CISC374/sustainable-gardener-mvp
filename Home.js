class Home extends Phaser.Scene {

  constructor() {
    super("Home");
  }

  preload() {
    // this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "homeImg");
    
    // this.load.tilemapTiledJSON("homeMap", "assets/maps/homeTile.json");
    // this.load.image('tiles', 'assets/HomeImage.png');

    // this.load.image('bg', 'assets/HomeImage.png');
    this.background = this.add.image(config.width * 3/8, config.height * 3/8, "homeImg");
    this.background.scale = 0.75;
    // this.load.tilemapTiledJSON('homeTS', 'assets/maps/homeTS.json'); // homeMap.json
    this.load.tilemapTiledJSON('homeMap', 'assets/maps/homeMap.json');
    this.load.image("tiles", "assets/tilesets/homeTS.json");
    
    this.player = this.physics.add.sprite(650, 450, "player");
    this.load.image("shovel", "assets/shovel.png");
    this.load.image("scroll", "assets/scroll.png");
    this.load.image("checkmark", "assets/checkmark.png");
    
  }

  create() {

    this.map = this.make.tilemap({ key: "homeMap" }, 16, 16) ;
    this.map.setCollisionByProperty({collides: true})
	  this.physics.world.setBoundsCollision();
    this.tileset = this.map.addTilesetImage("homeImg");
    // for (let i = 0; i < this.map.layers.length; i++) {
    //   const layer = this.map
    //     .createLayer(i, "Cloud City", 0, 0)
    //   layer.setDepth(i);
    //   layer.scale = 0;
    // }

    // this.map = this.add.tilemap('homeMap');
    // this.map.scale = 0.75;
    // var tileset = this.map.addTilesetImage('tileset_sprite', 'gameTiles');
    // this.bg = this.map.createStaticLayer('bg', tileset);

    // this.home_map.scale = 0.75;
    // this.map = this.add.tilemap('homeMap');
	  // this.map.setCollisionByProperty({collides: true})
	  // this.physics.world.setBoundsCollision()
    
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

    this.plantCount = 0; 
    this.plants = [];

    //english ivy plants 
    this.ivy = new Plant("english_ivy", 300, 100);
    this.ivyImg = this.add.image(this.ivy.x, this.ivy.y, this.ivy.img);
    this.ivy1 = new Plant("english_ivy", 375, 100);
    this.ivyImg1 = this.add.image(this.ivy1.x, this.ivy1.y, this.ivy1.img);
    this.ivy2 = new Plant("english_ivy", 450, 100);
    this.ivyImg2 = this.add.image(this.ivy2.x, this.ivy2.y, this.ivy2.img);
    this.ivy3 = new Plant("english_ivy", 525, 100);
    this.ivyImg3 = this.add.image(this.ivy3.x, this.ivy3.y, this.ivy3.img);
    this.ivy4 = new Plant("english_ivy", 600, 100);
    this.ivyImg4 = this.add.image(this.ivy4.x, this.ivy4.y, this.ivy4.img);

    // //sunflower plants 
    // this.sunflower = new Plant("sunflower", 200, 575);
    // this.sunflowerImg = this.add.image(this.sunflower.x, this.sunflower.y, this.sunflower.img);
    // this.sunflower1 = new Plant("sunflower", 275, 575);
    // this.sunflowerImg1 = this.add.image(this.sunflower1.x, this.sunflower1.y, this.sunflower1.img);
    // this.sunflower2 = new Plant("sunflower", 350, 575);
    // this.sunflowerImg2 = this.add.image(this.sunflower2.x, this.sunflower2.y, this.sunflower2.img);
    // this.sunflower3 = new Plant("sunflower", 425, 575);
    // this.sunflowerImg3 = this.add.image(this.sunflower3.x, this.sunflower3.y, this.sunflower3.img);
    // this.sunflower4 = new Plant("sunflower", 500, 575);
    // this.sunflowerImg4 = this.add.image(this.sunflower4.x, this.sunflower4.y, this.sunflower4.img);

    // this.plants = [[this.ivy, this.ivyImg], [this.ivy1, this.ivyImg1], [this.ivy2, this.ivyImg2], 
    //               [this.ivy3, this.ivyImg3], [this.ivy4, this.ivyImg4], [this.sunflower, this.sunflowerImg],
    //               [this.sunflower1, this.sunflowerImg1], [this.sunflower2, this.sunflowerImg2],
    //               [this.sunflower3, this.sunflowerImg3], [this.sunflower4, this.sunflowerImg4]];


    // task list 
    this.paper = this.add.image(1275, 200, "scroll");
    this.paper.setScale(0.25);
    this.add.text(1200,100, "Task List:",{fill:"#000000", fontSize:"25px"});
    this.add.text(1200,150, "- Use the WASD keys to move player",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,175, "- Click on the shovel to pick \n it up",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,200, "- Right click to put down or \n drop an object",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,230, "- Walk up to your garden and \n  click on the dirt to \n  grow a plant",{fill:"#000000", fontSize:"9px"});
    this.add.text(1200,270, "- Now continue walking down the \n  road to get to the town \n  from your home",{fill:"#000000", fontSize:"9px"});
    

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
    this.checkmark4 = this.add.image(1190, 270, "checkmark").setVisible(false);
    this.checkmark4.setScale(.025);    

    // checkmark for gardening on home page
    this.checkmark5 = this.add.image(1190, 230, "checkmark").setVisible(false);
    this.checkmark5.setScale(.025);   
    

    // player movement
    this.player.setInteractive();
    this.player.setScale(3);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.player.setDepth(2);

    this.shovel1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "shovel");
    this.shovel1.setInteractive();
    this.shovel1.setScale(0.25);
    this.shovel1.setInteractive();
    this.shovel1.alpha = 1;

    this.shovel2 = this.add.sprite(config.width / 2 + 50, config.height / 2, "shovel");
    this.shovel2.setInteractive();
    this.shovel2.setScale(0.25);
    this.shovel2.setInteractive();

    this.highlightItem(this.shovel1);
    this.highlightItem(this.shovel2);

   

    this.input.mouse.disableContextMenu();

    this.input.on('pointerdown', function (pointer) {

      if (pointer.rightButtonDown()) {
        this.add.image(pointer.x, pointer.y, 'hose');
        this.checkmark3.setVisible(true);
        // this.add.text(20, 20, "Right Button Clicked", { font: "25px Arial", fill: "black" });
      }
      else if(pointer.leftButtonDown()){
        for(var i = 0; i < this.plants.length; i ++){
          if((Math.abs(pointer.x - this.plants[i][0].x) < 20) && (Math.abs(pointer.y - this.plants[i][0].y) < 20)
          && (Math.abs(this.player.x - this.plants[i][0].x) < 70) && (Math.abs(this.player.y - this.plants[i][0].y) < 70)){
              // this.plants[i][0].water();
              this.checkmark5.setVisible(true);
          }
        }
        // else{
        //   this.shovelImg = this.add.image(pointer.x, pointer.y, 'shovel');
        //   this.shovelImg.setScale(0.25);
        // }

      }

    }, this);

    var g1 = this.add.grid(config.width / 2.82, config.height / 1.15, 1024, 64, 64, 64, 0xffffff, 0.5);
    g1.setDepth(1);

    this.gradenArea = this.add.grid(300, 575, 400, 400, 40, 40, 0x604c44)

  

    this.container = this.add.container(config.width / 10, config.height / 1.15);
    this.container.setDepth(2);
    console.log(this.container);

    this.i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);



    //add a listener to the scene, this will pass the object clicked to the function
    this.input.on('gameobjectdown', this.onClicked.bind(this));
    this.cursorKeys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });
  }

  //pointer is the mouse that triggered the event
  onClicked(pointer, objectClicked) {
    console.log(pointer.x, pointer.y)
    if(objectClicked !== this.player && objectClicked.img === undefined){
      this.addItemtoInventory(objectClicked);
      objectClicked.destroy();
      this.checkmark2.setVisible(true);

    }
  }

  update() {
    this.shovel1.angle += 1;
    var pointer = this.input.activePointer;
    this.movePlayer();
    this.showInventory();
    // config.physics.arcade.collide(this.player);

    if(this.player.y >= 760 && this.player.x >= 635 && this.player.x <= 689){
      this.checkmark4.setVisible(true);
    }
    if(this.player.y >= 783 && this.player.x >= 635 && this.player.x <= 689){
      this.scene.start('Town');
    }
    if(this.checkmark1.visible && this.checkmark2.visible && this.checkmark3.visible && this.checkmark4.visible){
      config.tutorial = false;
    }

    for(var i = 0; i < this.plants.length; i ++){
      this.plants[i][1] = this.add.image(this.plants[i][0].x, this.plants[i][0].y, this.plants[i][0].img);
      this.plants[i][1].setScale(2);
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
    if(this.player.velocityX !== 0 || this.player.velocityY !== 0){
      this.checkmark1.setVisible(true);
    }
  }

  showInventory() {
    
    var o = this.input.keyboard.addKey("o");
    
    if (Phaser.Input.Keyboard.JustDown(this.i)) {
      this.container.setVisible(!this.container.visible);
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
    
    app.inventoryArr.push(object);

    var x = 0;
    for (var i = 0; i < app.inventoryArr.length; i++){
      console.log(app.inventoryArr[i]);
      var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key);
      sprite.setScale(0.2);
      this.container.add(sprite);
      x = x + 64
    }
  }


}

