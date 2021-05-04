var config = {
    width: 1917,
    height: 1077,
    scene: [Scene1, Title, Home, Town],
    physics: {
      default: "arcade",
      arcade: {
          debug: true
      }
    },
    pixelArt: true,
    tutorial: true
}
  
var app = {
  inventoryArr: [],
  itemArr: [],
  currentItem: null
}





  var game = new Phaser.Game(config);
