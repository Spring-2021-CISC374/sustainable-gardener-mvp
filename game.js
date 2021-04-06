
var config = {
    width: 1420,
    height: 665,
    backgroundColor: 0x0b571c,
    scene: [Scene1, Scene2],
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    },
    pixelArt: true,
  }
  
  var game = new Phaser.Game(config);
