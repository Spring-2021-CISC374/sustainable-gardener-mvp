class Plant{
    name;
    stage;
    img;
    x;
    y;

    constructor(name, x, y){
        this.stage = -1;
        this.name = name;
        this.img = "dirt";
        this.x = x;
        this.y = y;
    }

    water(){
        console.log('watering...')
        this.changeStage();
    }

    changeStage(){
        if(this.stage === -1){ //dirt stage -> seed stage
            this.stage = 0; 
            this.img = "seeds";
        }
        else if(this.stage === 0){ //seed stage -> _1
            this.stage += 1;
            this.img = this.name+"_1";
        }
        else if(this.stage === 1){ //imgName_1 -> _2
            this.stage += 1;
            this.img = this.name+"_2";
        }
        else if(this.stage === 2){ //imgName_2 -> _3
            this.stage += 1;
            this.img = this.name+"_3";
        }
        else if(this.stage === 3){ //imgName_3 -> dirt stage (harvesting)
            this.stage = -1;
            this.img = "dirt";
        }
    }
    

}