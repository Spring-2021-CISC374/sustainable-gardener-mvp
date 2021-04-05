class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
  
    preload() {
      
      this.load.image("shovel", "assets/shovel.png");
      
    }
  
  
    create() {
    this.shovel1 = this.add.image(config.width/2 - 50, config.height/2, "shovel");
    
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
  
      this.shovel1.setScale(0.25);
      this.shovel1.setInteractive();
     
    //   this.input.on('gameobjectdown', this.destroyTool, this);

    }

    update() {
        this.shovel1.angle += 1;

        // destroyTool(pointer, gameObject){
        //     gameObject.setTexture("explosion");
        //     gameObject.play("explode");
        // }
    }
  
  }