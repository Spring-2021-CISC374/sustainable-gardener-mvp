import {Phaser} from "../phaser.min"

class Plant extends Phaser.GameObjects.sprite {

    name: string; //Plant's common name 
    scienceName: string; //Plant's scientific name
    native: boolean; //True if plant is native, False if plant is non-native 
    type: string; //If this is a tree, shrub, grass, annual or perennial 
    seasons: Array <String>; //These are the seasons that the plant will stay in the garden
    bloom: string; //This is the season that the plant flowers
    pollinators: boolean; //True if plant attracts pollinators, False if it doesn't
    pollinatorType: Array <String>; //The set of animals/insects that the plants attract 

    //I am having a problem here with the scene, scene: Phaser.Scene doesn't work
    constructor(scene, x: number, y: number, name: string, scienceName: string, native: boolean, type: string, 
        seasons: Array<String> ,bloom: string, pollinators: boolean, pollinatorType: Array <String>) {

        super(scene, x, y, 'plant');
        this.createPlant(name, scienceName, native, type, seasons, bloom, pollinators, pollinatorType);
        scene.add.existing(this);

    }

    createPlant(name: string, scienceName: string, native: boolean, type: string, seasons: Array<String> ,bloom: string, 
        pollinators: boolean, pollinatorType: Array <String>){

        this.name = name; 
        this.scienceName = scienceName;
        this.native = native; 
        this.type = type; 
        this.seasons = seasons; 
        this.bloom = bloom;
        this.pollinators = pollinators;
        this.pollinatorType = pollinatorType; 

    }
}