class Town extends Phaser.Scene {

  constructor(){
      super("Town");
  }

    preload(){
      this.background = this.add.image(config.width * 3 / 8, config.height * 3 / 8, "townImg");
      this.background.scale = 0.75;
      this.player = this.physics.add.sprite(760, 40, "player");
      this.player.play("player_anim_down", false);
      this.load.image("shovel", "assets/shovel.png");

      this.load.image("scroll", "assets/scroll.png");
      this.load.image("checkmark", "assets/checkmark.png");

      this.t1 = this.physics.add.sprite(150, 340, "t1");
      this.t1.play("t1_anim_down", false);
      this.t1.setInteractive();
      this.t1.setScale(3);
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.t1.setCollideWorldBounds(true);
      this.t1.setDepth(2);
      this.t1.id = new Townsperson("t1", this.t1.x, this.t1.y);

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
      this.paper = this.add.image(config.width/1.5, config.height/6, "scroll");
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

      this.container1 = this.add.container(config.width/3, config.height/1.15);
      this.container1.setDepth(2);
        
    //inventory stuff

    this.inventory = this.add.image(config.width/1.8, config.height/1.5, "inventory");
    this.inventory.setScale(5,3)

    this.container = this.add.container(config.width / 1.8, config.height / 1.15);
    this.container.setDepth(2);

    // popup for talking to person
    this.blur = this.add.rectangle(0,0,config.width*2, config.height*2, 0x000000, 0.5);
    this.talkScreen = this.add.image(750, 500, "textbubble");
    this.talkScreen.setScale(5,4)
    this.talkScreen.text = '';
    this.talkScreen.setVisible(false);
    this.blur.setVisible(false);

    //button for exiting speech bubble
    this.xbutton = this.add.image(750, 500, 'x_button');
    this.xbutton.setScale(5,4);
    this.xbutton.setInteractive();
    this.xbutton.setVisible(false);
    
    this.canTalk = false;


    this.i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

    this.t = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

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

    this.input.on('gameobjectdown', this.onClicked.bind(this));
    //this.input.on('pointerdown', this.talk.bind(this));
    this.xbutton.on('pointerdown', this.hideTextBubble.bind(this));

    // this.physics.add.collider(this.player, this.t1);
    this.physics.add.overlap(this.player, this.t1, () => {this.canTalk = true}, null, this);

    // this.input.on('pointerdown', function (pointer) {
    //   console.log(pointer.x, pointer.y);
    // });

  }

  update() {
    this.showInventory();
    this.showTaskList();
    if(this.player.y <= 30 && this.player.x >= 736 && this.player.x <= 797){
        this.scene.start('Home');
    }
    else{
      this.movePlayer();
    }
  }

  //pointer is the mouse that triggered the event
  onClicked(pointer, objectClicked) {
    console.log('object', objectClicked, pointer.x, pointer.y)

    if(this.canTalk && !objectClicked.texture.key.includes('player')){
      this.talk(objectClicked);
    }
    // if (!objectClicked.texture.key.includes("player")) {
    //   this.addItemtoInventory(objectClicked);
    //   objectClicked.destroy();
    //   this.checkmark2.setVisible(true);
    // }
    // if (objectClicked.inventory == true) {
    //   this.chosenItem(objectClicked)
    // }
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

    talk(person){
      console.log("person", person)
      if(this.canTalk){
        this.canTalk = false;
        if(this.player.x > person.x){
          person.play(person.id.name+"_anim_stand_right");
        }
        else {
          person.play(person.id.name+"_anim_stand_left");
        }
        if(!person.id.talking){
          person.setDepth(5);
          person.id.talking = true;
          this.showTextBubble(person);
          person.id.talkCount+=1; 
        }
        else{
          if (!this.blur.visible){
            person.id.talking = false;
          }
        }
      }
      // console.log('you are talking to: '+ person.id.name + " you have talked " + person.id.talkCount +" times");
    }

    showTextBubble(person){
      person.id.talking = true;
      this.talkScreen.setVisible(true);
      this.blur.setVisible(true);
      this.xbutton.setVisible(true);
      var text = person.id.conversations[person.id.talkCount];
      this.convo = this.add.text(550, 350, text, {
        font: "25px Courier",
        fill: "0x995f40",
        align: "left"}
      );
      this.convo.setVisible(true);
      if(person.id.talkCount === 1){
        this.dropSeeds();
      }
    }

    hideTextBubble(){
      this.talkScreen.setVisible(false);
      this.blur.setVisible(false);
      this.xbutton.setVisible(false);
      this.convo.setVisible(false);
    }

    showTaskList() {
      var p = this.input.keyboard.addKey("p");
      
      if (Phaser.Input.Keyboard.JustDown(this.t)) {
        this.container1.setVisible(!this.container.visible);
        this.paper.setVisible(!this.paper.visible);
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

    dropSeeds(){
      console.log('adding seeds')
      var seeds = this.add.sprite(0, 0, "sunflower_seeds");
      seeds.setDepth(3);
      seeds.setInteractive();
      app.itemArr.push(seeds);
      this.addItemtoInventory(seeds);
    }
}