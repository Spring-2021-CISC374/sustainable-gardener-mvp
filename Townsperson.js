class Townsperson{
    name;
    x;
    y;
    talking;
    talkCount;
    conversations;

    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.talking = false;
        this.talkCount = 0; 
        this.conversations = ["Hi there, newbie! \nWelcome to our town!", "Have you planted anything yet? \nHere, take some seeds for my favorite flower.\nIf you bring me back some, I'll give you more seeds!"]; //import csv here? 
    }
    

}