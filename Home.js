class Home extends Phaser.Scene {

  constructor() {
    super("Home");
  }

  preload() {
    this.load.tilemapTiledJSON('homeMap', 'assets/maps/homeMap.json');
    this.load.image("tiles", "assets/HomeImage.png");
    
    this.player = this.physics.add.sprite(650, 450, "player");
    this.player.setScale(3);
    this.player.play("player_anim_stand_down", false);
    this.load.image("scroll", "assets/scroll.png");
    this.load.image("checkmark", "assets/checkmark.png");
    
  }

  create() {

    this.map = this.make.tilemap({ key: "homeMap" }, 16, 16);
    this.tileset = this.map.addTilesetImage('homeTS', 'tiles');
    this.groundLayer = this.map.createLayer("bg", this.tileset, 0, 0);
    this.groundLayer.setScale(0.75);
    this.mainLayer = this.map.createLayer("home", this.tileset, 0, 0);
    // this.mainLayer.setCollisionByProperty({collides: "true"});
    this.mainLayer.setScale(0.75);
	  this.physics.world.setBoundsCollision();
    this.physics.add.collider(this.player, this.mainLayer);
    this.mainLayer.setCollisionByProperty({ collides: true });
    
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


    if(config.tutorial){

      //plants
      this.gardenArea = this.add.grid(300, 575, 200, 120, 40, 40, 0x604c44)
      this.gardenArea.setDepth(0);
  
      this.plantCount = 0; 
  
      this.plant1 = new Plant('unknown', 220, 535);
      this.plant1Img = this.add.image(this.plant1.x, this.plant1.y, this.plant1.img);
      app.plantArr.push([this.plant1, this.plant1Img]);
      this.plant2 = new Plant('unknown', 260, 535);
      this.plant2Img = this.add.image(this.plant2.x, this.plant2.y, this.plant2.img);
      app.plantArr.push([this.plant2, this.plant2Img]);
      this.plant3 = new Plant('unknown', 300, 535);
      this.plant3Img = this.add.image(this.plant3.x, this.plant3.y, this.plant3.img);
      app.plantArr.push([this.plant3, this.plant3Img]);
      this.plant4 = new Plant('unknown', 340, 535);
      this.plant4Img = this.add.image(this.plant4.x, this.plant4.y, this.plant4.img);
      app.plantArr.push([this.plant4, this.plant4Img]);
      this.plant5 = new Plant('unknown', 380, 535);
      this.plant5Img = this.add.image(this.plant5.x, this.plant5.y, this.plant5.img);
      app.plantArr.push([this.plant5, this.plant5Img]);
      
      this.plant6 = new Plant('unknown', 220, 575);
      this.plant6Img = this.add.image(this.plant6.x, this.plant6.y, this.plant6.img);
      app.plantArr.push([this.plant6, this.plant6Img]);
      this.plant7 = new Plant('unknown', 260, 575);
      this.plant7Img = this.add.image(this.plant7.x, this.plant7.y, this.plant7.img);
      app.plantArr.push([this.plant7, this.plant7Img]);
      this.plant8 = new Plant('unknown', 300, 575);
      this.plant8Img = this.add.image(this.plant8.x, this.plant8.y, this.plant8.img);
      app.plantArr.push([this.plant8, this.plant8Img]);
      this.plant9 = new Plant('unknown', 340, 575);
      this.plant9Img = this.add.image(this.plant9.x, this.plant9.y, this.plant9.img);
      app.plantArr.push([this.plant9, this.plant9Img]);
      this.plant10 = new Plant('unknown', 380, 575);
      this.plant10Img = this.add.image(this.plant10.x, this.plant10.y, this.plant10.img);
      app.plantArr.push([this.plant10, this.plant10Img]);
      
      this.plant11 = new Plant('unknown', 220, 615);
      this.plant11Img = this.add.image(this.plant11.x, this.plant11.y, this.plant11.img);
      app.plantArr.push([this.plant11, this.plant11Img]);
      this.plant12 = new Plant('unknown', 260, 615);
      this.plant12Img = this.add.image(this.plant12.x, this.plant12.y, this.plant12.img);
      app.plantArr.push([this.plant12, this.plant12Img]);
      this.plant13 = new Plant('unknown', 300, 615);
      this.plant13Img = this.add.image(this.plant13.x, this.plant13.y, this.plant13.img);
      app.plantArr.push([this.plant13, this.plant13Img]);
      this.plant14 = new Plant('unknown', 340, 615);
      this.plant14Img = this.add.image(this.plant14.x, this.plant14.y, this.plant14.img);
      app.plantArr.push([this.plant14, this.plant14Img]);
      this.plant15 = new Plant('unknown', 380, 615);
      this.plant15Img = this.add.image(this.plant15.x, this.plant15.y, this.plant15.img);
      app.plantArr.push([this.plant15, this.plant15Img]);
  
      this.plantCount = app.plantArr.length;
      for(var i=0; i < this.plantCount; i++){
        app.plantArr[i][1].scale = 2;
      }

      // task list 
      this.paper = this.add.image(1275, 200, "scroll");
      // this.paper.setScale(0.25);
      // this.paper = this.add.image(config.width/1.5, config.height/5, "scroll");
      this.paper.setScale(0.25);
      this.add.text(1200,100, "Task List:",{fill:"#000000", fontSize:"25px"});
      this.add.text(1200, 150, "- Use the WASD keys \n to move player", { fill: "#000000", fontSize: "15px" });
      // this.add.text(1200,175, "- Click on the shovel to pick \n it up",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,200, "- Right click to put down or \n drop an object",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,230, "- Walk up to your garden and \n  click on the dirt to \n  grow a plant",{fill:"#000000", fontSize:"9px"});
      this.add.text(1200, 260, "- Walk down the \n road to get to the \n town from your home", { fill: "#000000", fontSize: "15px" });
      this.add.text(1200, 200, "- Click on I to \n hide and show the \n inventory",{fill:"#000000", fontSize:"15px"});
    
    
      // checkmark for player movement
      this.checkmark1 = this.add.image(1190, 150, "checkmark").setVisible(false);
      this.checkmark1.setScale(.025);

      // // checkmark for picking up shovel
      // this.checkmark2 = this.add.image(1190, 175, "checkmark").setVisible(false);
      // this.checkmark2.setScale(.025);

      // // checkmark for putting down hose
      // this.checkmark3 = this.add.image(1190, 200, "checkmark").setVisible(false);
      // this.checkmark3.setScale(.025);    

      // checkmark for going to the town
      this.checkmark4 = this.add.image(1190, 260, "checkmark").setVisible(false);
      this.checkmark4.setScale(.025);    

      // // checkmark for gardening on home page
      // this.checkmark5 = this.add.image(1190, 230, "checkmark").setVisible(false);
      // this.checkmark5.setScale(.025);   
      
      // checkmark for hidind/showing inventory
      this.checkmark6 = this.add.image(1190, 200, "checkmark").setVisible(false);
      this.checkmark6.setScale(.025);   
    }
    else { // when the player returns home
      this.paper = this.add.image(config.width/1.5, config.height/5, "scroll");
      this.paper.setScale(0.25);
      this.add.text(1200,100, "Task List:",{fill:"#000000", fontSize:"25px"});
      this.add.text(1200, 150, "- Grow some \n native plants! \n Walk over to your \n garden, click on the \n seeds you want to \n use and click on \n your garden again \n to plant. Use the \n watering can to \n water your plants\n until they're \n harvested!", { fill: "#000000", fontSize: "15px" });
    }
    
    this.container1 = this.add.container(config.width/3, config.height/1.15);
    this.container1.setDepth(2);


    // player movement
    this.player.setSize(12, 4);
    this.player.originY = 1;
    this.player.setInteractive();
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.player.setDepth(2);

    // this.shovel1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "shovel");
    // this.shovel1.setScale(0.25);
    // this.shovel1.setInteractive();
    // app.itemArr.push(this.shovel1);

    this.wateringCan = this.add.sprite(config.width / 2 + 150, config.height / 2, "watering_can");
    this.wateringCan.setScale(0.3)
    this.wateringCan.setInteractive();
    this.wateringCan.setVisible(false);
    app.itemArr.push(this.wateringCan);

    this.input.on('pointerdown', function (pointer) {
      if(pointer.leftButtonDown()){
        for(var i = 0; i < app.plantArr.length; i ++){
          if((Math.abs(pointer.x - app.plantArr[i][0].x) < 20) && (Math.abs(pointer.y - app.plantArr[i][0].y) < 20)
          && (Math.abs(this.player.x - app.plantArr[i][0].x) < 70) && (Math.abs(this.player.y - app.plantArr[i][0].y) < 70)){  
            if(app.currentItem !== null){
              if(app.currentItem.texture.key.includes("english_ivy_seeds") && app.plantArr[i][0].stage === -1){
                app.plantArr[i][0].name = "english_ivy";
                app.plantArr[i][0].water(app.plantArr[i][0]);
                // this.checkmark5.setVisible(true);
              }
              else if(app.currentItem.texture.key.includes("sunflower_seeds") && app.plantArr[i][0].stage === -1){
                app.plantArr[i][0].name = "sunflower";
                app.plantArr[i][0].water(app.plantArr[i][0]);
                // this.checkmark5.setVisible(true);
              }
              else if(app.currentItem.texture.key.includes("watering_can") && app.plantArr[i][0].stage != -1){
                console.log('watering')
                var add = app.plantArr[i][0].water(app.plantArr[i][0]);
                // this.checkmark5.setVisible(true);
                if(add){
                  this.addItemtoInventory(app.plantArr[i]);
                  //this.dropSeeds(app.plantArr[i][0]);
                }
              }
            }
          }
        }
      }

    }, this);

    //inventory stuff
    this.inventory = this.add.image(1050, 700, "inventory");
    this.inventory.setScale(5,3)

    this.container = this.add.container(1050, 700);
    this.container.setDepth(2);

    this.i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

    this.t = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

    // create inventory
    var x = -230;
    for (var i = 0; i < app.inventoryArr.length; i++){
      var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key+"_inv");
      this.container.add(sprite);
      sprite.setInteractive();
      sprite.inventory = true;
      x = x + 64;
      
    }


    //add a listener to the scene, this will pass the object clicked to the function
    this.input.on('gameobjectdown', this.onClicked.bind(this));
    this.cursorKeys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    //endgame popup
    this.blur = this.add.rectangle(0,0,config.width*2, config.height*2, 0x000000, 0.5);
    this.talkScreen = this.add.image(750, 500, "textbubble");
    this.talkScreen.setScale(8,6)
    this.talkScreen.text = '';
    this.talkScreen.setVisible(false);
    this.blur.setVisible(false);
    this.blur.setDepth(3);
    this.talkScreen.setDepth(3);
    this.winText = this.add.text(300, 410, 
      "You Win! \n\n You planted the native plant and started the town on its sustainability journey! \n\n",
      {fill:"#995f40", fontSize:"20px"});
    this.loseText = this.add.text(290, 410, 
      "Try again next time! \n\n You planted the invasive plant :( \n\n",
      {fill:"#995f40", align: "center", fontSize:"20px"});
    this.restartButton = this.add.text(290, 500, "PLAY AGAIN", 
    {fill:"#995f40", align: "center", fontSize:"20px"});
    this.winText.setVisible(false);
    this.loseText.setVisible(false);
    this.restartButton.on('pointerdown', this.resetGame.bind(this));
    this.restartButton.setVisible(false);
    this.winText.setDepth(3);
    this.loseText.setDepth(3);
    this.restartButton.setDepth(3);

  }

  //pointer is the mouse that triggered the event
  onClicked(pointer, objectClicked) {
 
    if ((objectClicked.texture.key === "sunflower_seeds" || 
        objectClicked.texture.key === "english_ivy_seeds" || objectClicked.texture.key === "watering_can") && objectClicked.inventory==null) {
      this.addItemtoInventory(objectClicked);
      objectClicked.destroy();
      // this.checkmark2.setVisible(true);
    }
    if (objectClicked.inventory == true) {
      this.chosenItem(objectClicked)
     
    }
  }

  update() {
    var pointer = this.input.activePointer;
    this.movePlayer();
    this.showInventory();
    this.checkHighlight();
    this.showTaskList();

    // config.physics.arcade.collide(this.player);

    if(this.player.y >= 760 && this.player.x >= 635 && this.player.x <= 689){
      this.checkmark4.setVisible(true);
    }
    if(this.player.y >= 770 && this.player.x >= 635 && this.player.x <= 689){
      this.scene.start('Town');
    }

    //update plant imgs
    for(var i = 0; i < app.plantArr.length; i ++){
      app.plantArr[i][1] = this.add.image(app.plantArr[i][0].x, app.plantArr[i][0].y, app.plantArr[i][0].img);
      app.plantArr[i][1].setScale(2);
    }

    if(this.checkmark1.visible && this.checkmark4.visible && this.checkmark6.visible){
      config.tutorial = false;
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
    if (Phaser.Input.Keyboard.JustDown(this.i)) {
      this.container.setVisible(!this.container.visible);
      this.inventory.setVisible(!this.inventory.visible);
      this.checkmark6.setVisible(true)
    }

  }

  showTaskList() {
    var p = this.input.keyboard.addKey("p");
    
    if (Phaser.Input.Keyboard.JustDown(this.t)) {
      this.container1.setVisible(!this.container.visible);
      this.paper.setVisible(!this.paper.visible);
    } 
  }

  checkHighlight(){
    for(var i = 0; i < app.itemArr.length; i++){
      this.highlightItem(app.itemArr[i]);
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

  chosenItem(item) {
    app.currentItem = item;
 
  }

  addItemtoInventory(object) {
    if(object[1] !== undefined){ 
      app.inventoryArr.push(object[1]);
    }
    else{
      app.inventoryArr.push(object)
    }
    var x = -230;
    var sunf = false;
    var ivy = false;
    for (var i = 0; i < app.inventoryArr.length; i++){
      var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key+"_inv");
      this.container.add(sprite);
      sprite.setInteractive();
      sprite.inventory = true;
      x = x + 64;
      if(sprite.texture.key === "sunflower_3_inv"){
        sunf = true;
      }
      else if(sprite.texture.key === "english_ivy_3_inv"){
        ivy = true;
      }
    }

    if(sunf){
      this.endgame(true);
    }
    else if(!sunf && ivy){
      this.endgame(false);
    }

  }

  dropSeeds(plant){
    var seeds = this.add.sprite(plant.x, plant.y, plant.name+"_seeds");
    seeds.setDepth(3);
    seeds.setInteractive();
    app.itemArr.push(seeds);
  }

  endgame(win){
    this.blur.setVisible(true);
    this.talkScreen.setVisible(true);
    this.restartButton.setVisible(true);
    this.restartButton.setInteractive();
    if(win){
      console.log('you won!');
      this.winText.setVisible(true);
    }
    else{
      console.log('you lose!');
      this.loseText.setVisible(true);
    }
  }

  resetGame(){
    app.inventoryArr = [];
    app.itemArr = [];
    app.currentItem = null;
    config.tutorial = true;
    this.scene.start('Home');
  }


}

