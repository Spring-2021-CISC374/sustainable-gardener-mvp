class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
       
        this.add.text(20, 20, "Playing Game", { font: "25px Arial", fill: "white" });

        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer) {

            if (pointer.rightButtonDown()) {

                this.add.image(pointer.x, pointer.y, 'hose');
                this.add.text(20, 20, "Right Button Clicked", { font: "25px Arial", fill: "black" });
                
            }
            else {
   
                this.add.image(pointer.x, pointer.y, 'shovel');
                
    
             
            }
    
        }, this);

    
    }

 

    update ()
    {
        // this.moveShovel(this.shovel, 2);
    var pointer = this.input.activePointer;

}


}