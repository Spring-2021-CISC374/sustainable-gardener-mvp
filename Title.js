class Title extends Phaser.Scene {

    constructor() {
        super("Title");
      }

    preload(){
        // this.background = this.add.image("title", "assets/images/title.png");
        this.background = this.add.image(config.width/2, config.height/2, "title");
        this.background.setScale(0.6);
        this.load.bitmapFont("pixelFont", "assets/font/font.png","assets/font/font.xml");
    }

    create(){
    //  let title = this.add.image(0,0,"title");
     //   title.setOrigin(0,0);

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

        //play button
        this.play = this.add.text(830, 480, 'PLAY!', {
            font: "45px Courier",
            fill: "black" });
        this.play.setInteractive({ useHandCursor: true });
        this.play.on('pointerdown', () => this.clickButton());
        this.play.on('pointerover', () => this.enterButtonHoverState());
        this.play.on('pointerout', () => this.enterButtonRestState());
        

        //instructions button
        this.instruction = this.add.text(750, 530, "HOW TO PLAY", {
            font: "45px Courier",
            fill: "black" });
        this.instruction.setInteractive({ useHandCursor: true });
        this.instruction.on('pointerdown', () => this.instructionButton());
    }

    enterButtonHoverState() {
        this.play.setStyle({ fill: '#ffffff'});
      }

    enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#0f0' });
      }


    clickButton() {       
        this.scene.start('Home');
        // this.instr.destroy(true);
    }


    instructionButton(){
        this.instr = this.add.text(680, 590, " You recently moved into a new \n town and they need your help! \n Explore your new neighborhood, \n make new friends, and help \n the town by harvesting \n sustainable plants!", 110);
        this.instr.tint = 0x000000;
    }

}