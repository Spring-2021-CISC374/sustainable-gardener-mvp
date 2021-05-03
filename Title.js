class Title extends Phaser.Scene {

    constructor() {
        super("Title");
      }

    preload(){
        // this.background = this.add.image("title", "assets/images/title.png");
        this.background = this.add.image(config.width/2, config.height/2, "title");
        this.background.setScale(0.7);
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
        const play = this.add.text(750, 780, 'PLAY!', {
            font: "40px Courier",
            fill: "black" });
        play.setInteractive({ useHandCursor: true });
        play.on('pointerdown', () => this.clickButton());
        

        //instructions button
        this.instruction = this.add.text(750, 830, "HOW TO PLAY", {
            font: "40px Courier",
            fill: "black" });
        this.instruction.tint = "white";
        this.instruction.setInteractive({ useHandCursor: true });
        this.instruction.on('pointerdown', () => this.instructionButton());
    }

    clickButton() {       
        this.scene.start('Home');
        // this.instr.destroy(true);
    }

    instructionButton(){
        this.instr = this.add.text(680, 750, "You're in a town.", 80);
        this.instr.tint = 0x000000;
    }

}