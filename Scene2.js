class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.shovel = this.add.image(config.width / 2, config.height / 2, "shovel");
        this.add.text(20, 20, "Playing Game", { font: "25px Arial", fill: "white" });

        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer) {

            if (pointer.rightButtonDown())
            {

                    this.add.image(pointer.x, pointer.y, 'shovel');
                
            }
            else
            {
   
                    this.add.image(pointer.x, pointer.y, 'hose');
             
            }
    
        }, this);
    }

    update ()
{
    var pointer = this.input.activePointer;

}


}