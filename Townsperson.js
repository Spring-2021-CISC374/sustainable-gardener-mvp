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
        this.conversations = []
        if (name == "Glenn"){
            this.conversations = [
                "Glenn:\n Hello! I have been looking all over for you.\n I am the Mayor and would like to welcome you.\n I know it doesn't look great right now but with your help\n I think we can fix this place up!",
                "Glenn:\n Well, you see, our town is small and no one here has any\n gardening skills but I've heard you do.\n For the last year I have been proposing to the other members\n of this town that we try to be sustainable.",
                "Glenn:\n Have you visited our library yet? Why don't you go check it out and learn\n more about sustainability\n You can enter the library by clicking on the door of the building\nto the north of me. ",
                "Glenn:\n One thing you can do to help is to grow native plants instead of non-native \n plants. I don't know very much about this subject, but if you go\n ask Darren by the pond he will know more about it.\n For now, I will give you two seed packs. One is native and one is non-native. \n I'm not sure which is which but hopefully you will plant the right one."
            ]; 
        }
        else if (name == "Darren"){
            this.conversations = [
                "Darren:\n Hey there, I haven't met you before." ,
                "Darren:\n My name is Darren, what can I do for you?",
                "Darren:\n Ahh I see. I can't help you identify those plants, but\n I can tell you why you should choose the native plant. ",
                "Darren:\n Native plants offer the most sustainable habitat.\n A plant is considered native if it has occurred naturally in a\n particular region, ecosystem, or habitat without human introduction.",
                "Darrne:\n Non-native plants do not support wildlife as well as native plants do.\n Occasionally, they can even escape into the wild, become invasive,\n and destroy natural habitat.",
                "Darren:\n Hey, before you go! You won't get too far with only putting down seeds.\n You'll need a watering can to keep em growing. \n I think I left one over by my house in the southwest of town, \n better to go to a good home when I never use it. Good luck!"
            ]; 
        }
    }
}    
