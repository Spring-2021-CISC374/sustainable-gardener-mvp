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
      this.t1.play("Glenn_anim_down", false);
      this.t1.setInteractive();
      this.t1.setScale(3);
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.t1.setCollideWorldBounds(true);
      this.t1.setDepth(2);
      this.t1.id = new Townsperson("Glenn", this.t1.x, this.t1.y);

      this.t2 = this.physics.add.sprite(1300, 600, "t2");
      this.t2.play("Darren_anim_right", false);
      this.t2.setInteractive();
      this.t2.setScale(3);
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.t2.setCollideWorldBounds(true);
      this.t2.setDepth(2);
      this.t2.id = new Townsperson("Darren", this.t2.x, this.t2.y);
      this.t2.setVisible(false);

      //Create Library
      //this.library.id = new Library();
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
      this.add.text(1200,115, "- Find and speak to \n a member of the town. \n When you are close, \n click on the  \n townsperson to begin  \n speaking to them.",{fill:"#000000", fontSize:"15px"});
      // this.add.text(1200,175, "- Click on the shovel to pick \n it up",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,200, "- Right click to put down or \n drop an object",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,230, "- Walk up to your garden and \n  click on the dirt to \n  grow a plant",{fill:"#000000", fontSize:"9px"});
      // this.add.text(1200,270, "- Now continue walking down the \n  road to get to the town \n  from your home",{fill:"#000000", fontSize:"9px"});
    
    // checkmark for speaking to townsperson
    this.checkmark1 = this.add.image(1190, 115, "checkmark").setVisible(false);
    this.checkmark1.setScale(.025);

    this.wateringCan = this.add.sprite(150, 750, "watering_can");
    this.wateringCan.setScale(0.3);
    this.wateringCan.setInteractive();
    this.wateringCan.setVisible(false);  

    this.container1 = this.add.container(config.width/3, config.height/1.15);
    this.container1.setDepth(2);
        
    //inventory stuff

    this.inventory = this.add.image(config.width/1.8, config.height/1.5, "inventory");
    this.inventory.setScale(5,3)

    this.container = this.add.container(config.width / 1.8, config.height / 1.5);
    this.container.setDepth(2);

    //update inventory
    var x = -230;
      for (var i = 0; i < app.inventoryArr.length; i++){
        var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key+"_inv");
        this.container.add(sprite);
        sprite.setInteractive();
        sprite.inventory = true;
        x = x + 64;
      }

    // popup for talking to person
    this.blur = this.add.rectangle(0,0,config.width*2, config.height*2, 0x000000, 0.5);
    this.talkScreen = this.add.image(750, 500, "textbubble");
    this.talkScreen.setScale(8,6)
    this.talkScreen.text = '';
    this.talkScreen.setVisible(false);
    this.blur.setVisible(false);

    // popup for library
    this.blur = this.add.rectangle(0,0,config.width*2, config.height*2, 0x000000, 0.5);
    this.libScreen = this.add.image(750, 500, "textbubble");
    this.libScreen.setScale(8,6)
    this.libScreen.text = '';
    this.libScreen.setVisible(false);
    this.blur.setVisible(false);

    //button for continuing speech
    this.checkbutton = this.add.image(1050, 600, 'check_button');
    this.checkbutton.setScale(5,4);
    this.checkbutton.setInteractive();
    this.checkbutton.setVisible(false);

    //button for Library Door
    this.doorbutton = this.add.image(235, 215, 'door_button');
    this.doorbutton.scale = 0.75;
    this.doorbutton.setInteractive();
    this.doorbutton.setVisible(true);

    //Library buttons
    this.susbutton = this.add.image(350, 600, 'sus_button');
    this.susbutton.setScale(5,4);
    this.susbutton.setInteractive();
    this.susbutton.setVisible(false);

    this.sunbutton = this.add.image(750, 600, 'sunflower_button');
    this.sunbutton.setScale(5,4);
    this.sunbutton.setInteractive();
    this.sunbutton.setVisible(false);

    this.ivybutton = this.add.image(1050, 600, 'ivy_button');
    this.ivybutton.setScale(5,4);
    this.ivybutton.setInteractive();
    this.ivybutton.setVisible(false); 

    //button for exiting speech bubble
    this.xbutton = this.add.image(1050, 500, 'x_button');
    this.xbutton.setScale(5,4);
    this.xbutton.setInteractive();
    this.xbutton.setVisible(false);
    
    this.canTalk = false;
    this.personTalking = null;
      

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
    this.xbutton.on('pointerdown', this.leaveLibrary.bind(this));
    this.checkbutton.on('pointerdown', this.nextTextBubble.bind(this));
    this.doorbutton.on('pointerdown', this.libraryEntered.bind(this));
    this.susbutton.on('pointerdown', this.libraryText.bind(this));
    this.sunbutton.on('pointerdown', this.libraryText.bind(this));
    this.ivybutton.on('pointerdown', this.libraryText.bind(this));

    // this.physics.add.collider(this.player, this.t1);
    this.physics.add.overlap(this.player, this.t1, () => {this.canTalk = true}, null, this);
    this.physics.add.overlap(this.player, this.t2, () => {this.canTalk = true}, null, this);

    // this.input.on('pointerdown', function (pointer) {
    //   console.log(pointer.x, pointer.y);
    // });
    console.log(app.inventoryArr)

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

    this.highlightItem();
    
  }

  //pointer is the mouse that triggered the event
  onClicked(pointer, objectClicked) {
    console.log('object', objectClicked, pointer.x, pointer.y)

    if(this.canTalk && (objectClicked.texture.key.includes('t1') || objectClicked.texture.key.includes("t2"))){
      this.talk(objectClicked);
    }
    else if(objectClicked.texture.key.includes("watering_can")){
      this.addItemtoInventory(objectClicked);
      objectClicked.destroy();
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
    
      if (Phaser.Input.Keyboard.JustDown(this.i)) {
        this.container.setVisible(!this.container.visible);
        this.inventory.setVisible(!this.inventory.visible);
      } 
  
    }

    talk(person){
      this.personTalking = person;
      if (!this.blur.visible){
        person.id.talking = false;
        this.canTalk = true;
      }
      console.log("person", person)
      if(this.canTalk){
        this.checkmark1.setVisible(true);
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
        
      }
      // console.log('you are talking to: '+ person.id.name + " you have talked " + person.id.talkCount +" times");
    }

    showTextBubble(person){
      var text = person.id.conversations[person.id.talkCount];
      if(!!text){
        person.id.talking = true;
        this.talkScreen.setVisible(true);
        this.blur.setVisible(true);
        this.checkbutton.setVisible(true);
        this.convo = this.add.text(300, 410, text, {
          font: "20px Courier",
          fill: "0x995f40",
          align: "left"}
        );
        this.convo.setVisible(true);
        if(person.id.talkCount === 4 && person.id.name === "Glenn"){
          this.dropSeeds("english_ivy");
          this.dropSeeds("sunflower");
          this.t2.setVisible(true);
        }
        else if(person.id.talkCount === 6 && person.id.name === "Darren"){
          this.wateringCan.setVisible(true);
        }
      }
    }

    hideTextBubble(){
      this.talkScreen.setVisible(false);
      this.blur.setVisible(false);
      this.checkbutton.setVisible(false);
      this.convo.setVisible(false);
    }

    nextTextBubble(){
      this.talkScreen.setVisible(false);
      this.blur.setVisible(false);
      this.checkbutton.setVisible(false);
      this.convo.setVisible(false);
      if (this.personTalking != null ){
        if (this.personTalking.id.talkcount === 2 && this.personTalking.id.name ==="Glenn"){ 
        }else{
          this.talk(this.personTalking)
        }
      }
    }

    libraryEntered(){
      var text = "Welcome to the library!\n\n Click on the subject you want to learn about";
      if(!!text){
        this.libScreen.setVisible(true);
        this.blur.setVisible(true);
        this.sunbutton.setVisible(true);
        this.ivybutton.setVisible(true);
        this.susbutton.setVisible(true);
        this.xbutton.setVisible(true);
        this.convo = this.add.text(300, 410, text, {
          font: "20px Courier",
          fill: "0x995f40",
          align: "left"}
        );
        this.convo.setVisible(true);
      }
    }

    libraryText(){

    }

    leaveLibrary(){
      this.libScreen.setVisible(false);
      this.blur.setVisible(false);
      this.sunbutton.setVisible(false);
      this.ivybutton.setVisible(false);
      this.susbutton.setVisible(false);
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
  
    highlightItem() {
      this.wateringCan.on('pointerover', () => {
        this.wateringCan.alpha = 0.5;
      })
  
      this.wateringCan.on('pointerout', () => {
        this.wateringCan.alpha = 1;
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
  
      var x = -230;
      for (var i = 0; i < app.inventoryArr.length; i++){
        var sprite = this.add.sprite(x, 0, app.inventoryArr[i].texture.key+"_inv");
        this.container.add(sprite);
        x = x + 64;
      }
    }

    dropSeeds(name){
      var seeds = this.add.sprite(0, 0, name+"_seeds");
      seeds.setDepth(3);
      seeds.setInteractive();
      app.itemArr.push(seeds);
      this.addItemtoInventory(seeds);
    }
}