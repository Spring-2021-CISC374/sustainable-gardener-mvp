class Plant{
    name;
    stage;
    img;
    x;
    y;
    growing;

    constructor(name, x, y){
        this.stage = -1;
        this.name = name;
        this.img = "dirt";
        this.x = x;
        this.y = y;
        this.growing = false;
    }

    water(plant){ // returns true if the plant is being 'harvested' and needs to be added to inventory
        if(plant.stage === -1 && plant.growing === false){
            this.growing = true;
            plant.changeStage();
            return false;
        }
        else if(plant.stage === 3 && plant.growing === false){
            // or add plant to inventory here? maybe return plant object/img to add to inventory?
            plant.changeStage();
            return true;
        }
        else if(plant.growing === false){
            this.growing = true;
            plant.img = plant.img + "_watered";
            setTimeout(function(){
                plant.changeStage();
            }, 5000);
            return false;
        }
    }

    changeStage(){
        this.growing = false;
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
            // add plant to inventory here
            this.stage = -1;
            this.img = "dirt";
        }
    }
    

}