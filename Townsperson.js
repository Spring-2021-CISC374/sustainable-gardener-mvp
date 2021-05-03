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
                "Glenn:\n Hello! I have been looking all over for you.\n I am the Mayor and would like to welcome you to our town.\n I know it doesn't look great right now but with your help\n I think we can fix this place up! \n\nYou:\n How can I help?",
                "Glenn:\n Well, you see, our town is small and no one here has any\n gardening skills but I've heard you do.\n For the last year I have been proposing to the other members\n of this town that we try to be sustainable.\n Do you know what sustainability is?\n\nYou:\n Kind of.",
                "Glenn:\n Have you visited our library yet? Why don't you go check it out and learn\n more about this topic then I will tell you more about\n how you can help save this town.\n\nYou:\n Okay, It was nice meeting you! ",
                "Glenn:\n I see that you checked out our library,\n do you see now why I think sustainability is so important? \n\nYou: Yes I do",
                "Glenn:\n One thing you can do to help is to grow native plants instead of non-native \n plants. I don't know very much about this subject, but if you go\n ask Darren by the pond he will know more about this subject.\n For now, I will give you two seed packs. One is native and one is non-native. \n I'm not sure which is which but hopefully you will plant the right one."
            ]; 
        }
        else if (name == "Darren"){
            this.conversations = [
                "Darren:\n Hey there, I haven't met you before have I?\n\nYou:\n No " ,
                "Darren:\n Well then, my name is Darren, what can I do for you?\n\nYou:\n I need to know which of these seeds grow a native plant.",
                "Darren:\n Ahh I see. I can't help you identify those plants, but\n I can tell you why you should choose the native plant. ",
                "Darren:\n Native plants have formed symbiotic relationships with\n native wildlife over thousands of years, and therefore\n offer the most sustainable habitat.\n A plant is considered native if it has occurred naturally in a\n particular region, ecosystem, or habitat without human introduction.",
                "Darrne:\n Exotic plants that evolved in other parts of the world\n or were cultivated by humans into forms that do not exist\n in nature do not support wildlife as well as native plants do.\n Occasionally, they can even escape into the wild, become invasive\n exotics, and destroy natural habitat.",
                "Darren:\n Native plants help the environment the most when planted\n in places that match their growing requirements.\n They will thrive in the soil, moisture, and weather of\n the local region. That means less supplemental watering, which can\n be wasteful, and pest problems that require toxic chemicals.\n Native plants also assist in managing rain water runoff and\n maintain healthy soil as their root systems are deep and\n keep soil from being compacted."
            ]; 
        }
    }
}    
