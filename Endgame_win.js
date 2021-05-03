class Endgame_win extends Phaser.Scene {

    constructor() {
        super("Endgame_win");
    }

    preload() {
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
    }

    create() {
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




        this.container1 = this.add.container(config.width / 3, config.height / 1.15);
        this.container1.setDepth(2);

        //inventory stuff

        this.inventory = this.add.image(config.width / 1.8, config.height / 1.5, "inventory");
        this.inventory.setScale(5, 3)

        this.container = this.add.container(config.width / 1.8, config.height / 1.5);
        this.container.setDepth(2);



        // popup for talking to person
        this.blur = this.add.rectangle(0, 0, config.width * 2, config.height * 2, 0x000000, 0.5);
        this.talkScreen = this.add.image(750, 500, "textbubble");
        this.talkScreen.setScale(8, 6)
        this.talkScreen.text = '';
        this.talkScreen.setVisible(false);
        this.blur.setVisible(false);

        //button for continuing speech
        this.checkbutton = this.add.image(1050, 600, 'check_button');
        this.checkbutton.setScale(5, 4);
        this.checkbutton.setInteractive();
        this.checkbutton.setVisible(false);


        this.canTalk = false;
        this.personTalking = null;


        this.i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

        this.t = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.player.setInteractive();
        this.player.setScale(3);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);


        this.input.on('gameobjectdown', this.onClicked.bind(this));
        //this.input.on('pointerdown', this.talk.bind(this));
        //this.xbutton.on('pointerdown', this.hideTextBubble.bind(this));
        this.checkbutton.on('pointerdown', this.nextTextBubble.bind(this));

        // this.physics.add.collider(this.player, this.t1);
        this.physics.add.overlap(this.player, this.t1, () => { this.canTalk = true }, null, this);
        this.physics.add.overlap(this.player, this.t2, () => { this.canTalk = true }, null, this);


        //set player x, y to be standing in between glenn and darren, start convo and player can 
        //click through, end with RESTART button on popup
    }

    update() {
        
    }

    //pointer is the mouse that triggered the event
    onClicked(pointer, objectClicked) {
        console.log('object', objectClicked, pointer.x, pointer.y)

        if (this.canTalk && (objectClicked.texture.key.includes('t1') || objectClicked.texture.key.includes("t2"))) {
            this.talk(objectClicked);
        }
    }

    talk(person) {
        this.personTalking = person;
        if (!this.blur.visible) {
            person.id.talking = false;
            this.canTalk = true;
        }
        console.log("person", person)
        if (this.canTalk) {
            this.canTalk = false;
            if (this.player.x > person.x) {
                person.play(person.id.name + "_anim_stand_right");
            }
            else {
                person.play(person.id.name + "_anim_stand_left");
            }
            if (!person.id.talking) {
                person.setDepth(5);
                person.id.talking = true;
                this.showTextBubble(person);
                person.id.talkCount += 1;
            }

        }
        // console.log('you are talking to: '+ person.id.name + " you have talked " + person.id.talkCount +" times");
    }

    showTextBubble(person) {
        var text = person.id.conversations[person.id.talkCount];
        if (!!text) {
            person.id.talking = true;
            this.talkScreen.setVisible(true);
            this.blur.setVisible(true);
            this.checkbutton.setVisible(true);
            this.convo = this.add.text(300, 410, text, {
                font: "20px Courier",
                fill: "0x995f40",
                align: "left"
            }
            );
            this.convo.setVisible(true);
            if (person.id.talkCount === 4 && person.id.name === "Glenn") {
                this.dropSeeds("english_ivy");
                this.dropSeeds("sunflower");
            }
        }
    }

    hideTextBubble() {
        this.talkScreen.setVisible(false);
        this.blur.setVisible(false);
        this.checkbutton.setVisible(false);
        this.convo.setVisible(false);
    }

    nextTextBubble() {
        this.talkScreen.setVisible(false);
        this.blur.setVisible(false);
        this.checkbutton.setVisible(false);
        this.convo.setVisible(false);
        if (this.personTalking != null) {
            this.talk(this.personTalking)
        }
    }

    highlightItem(item) {
        item.on('pointerover', () => {
            item.alpha = 0.5;
        })

        item.on('pointerout', () => {
            item.alpha = 1;
        })
    }
}