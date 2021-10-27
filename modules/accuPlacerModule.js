// back-end

// bring in the configuration (note the naming conventions)
import { Config } from '../config/accuPlacer.js';

// create the class
class AccuPlacer {
    
    // constructor (for the demo date isn't used)
    constructor(date,testTaken,score) {
        this.date = date;
        this.testTaken = testTaken;
        this.score = score;

    }
    
    // handle the placement
    placement() {
        
        // get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const thresholds = Object.keys(Config[this.testTaken]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this.score);
        
        // "undefined" means the .find failed
        if (placement !== "undefined") {
            // return the value of the property (the placement)
            return Config[this.testTaken][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
}

// export so it can be used
export { AccuPlacer };