
var config = {
    width: 1917,
    height: 1077,
    scene: [Scene1, Home, Town],
    physics: {
      default: "arcade",
      arcade:{
          debug: false
      }
    },
    pixelArt: true,
    tutorial: true
}
  
var app = {
  inventoryArr: []
}



  var game = new Phaser.Game(config);
