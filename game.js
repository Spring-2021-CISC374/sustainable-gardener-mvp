var config = {
    width: 1416,
    height: 804,
    background: '0x000000',
    scene: [Scene1, Title, Home, Town],
    physics: {
      default: "arcade",
      arcade: {
          debug: false
      }
    },
    pixelArt: true,
    tutorial: true
}
  
var app = {
  inventoryArr: [],
  itemArr: [],
  plantArr: [],
  currentItem: null
}





  var game = new Phaser.Game(config);
