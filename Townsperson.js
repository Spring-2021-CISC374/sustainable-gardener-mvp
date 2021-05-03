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
        this.conversations = getScript(name)
    }

    getscript(name){
        if (name == "Glenn"){
            return ["Hello! I have been looking all over for you.\n I am the Mayor and would like to welcome you to our town.\n I know it doesn't look great right now but with your help I think we can fix this place up!",
             0, 
             "Well, you see, our town is small and no one here has any gardening skills but I've heard you do.\n For the last year I have been proposing to the other members of this town that we try to be sustainable.\n Do you know what sustainability is? ",
             1,
             "We have a library why don't you go check it out and learn more about this topic then I will tell you more about how you can help save this town. ",
             2,
             "I see that you checked out our library, do you see now why I think sustainability is so important?",
             3,
             "One thing you can do to help is to grow native plants instead of non-native plants.\n I don't know very much about this subject but if you go ask Darren by the pond he will know more about this subject.\n For now I will give you two seed packs, one is native and one is non-native I'm not sure which is which but hopefully you will plant the right one.",

            ]; 
        }else if (name == "Darren"){
            return [
                " Hey there, I haven't met you before have I?",
                0,
                "Well then, my name is Darren, what can I do for you?",
                1,
                "Ahh I see, I can't help you identify those plants but I can tell you why you should choose the native plant. ",
                "Native plants have formed symbiotic relationships with native wildlife over thousands of years, and therefore offer the most sustainable habitat.\n A plant is considered native if it has occurred naturally in a particular region, ecosystem, or habitat without human introduction.",
                "Exotic plants that evolved in other parts of the world or were cultivated by humans into forms that don’t exist in nature do not support wildlife as well as native plants.\n Occasionally, they can even escape into the wild and become invasive exotics that destroy natural habitat.",
                "Native plants help the environment the most when planted in places that match their growing requirements.\n They will thrive in the soils, moisture and weather of your region.\n That means less supplemental watering, which can be wasteful, and pest problems that require toxic chemicals.\n Native plants also assist in managing rain water runoff and maintain healthy soil as their root systems are deep and keep soil from being compacted."
            ]; 
        }
    }
    

}