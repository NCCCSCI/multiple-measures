// back-end

// bring in the configuration (note the naming conventions)
import { Config } from '../config/sat.js';

// create the class
class SAT {
    
    // constructor (for the demo date isn't used)
    constructor(testTaken,score) {
        this._testTaken = testTaken;
        this._score = score;

    }
    
    // handle the placement
    placement() {
        
        // get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const thresholds = Object.keys(Config[this._testTaken]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this._score);
        
        // "undefined" means the .find failed
        if (placement !== "undefined") {
            // return the value of the property (the placement)
            return Config[this._testTaken][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
}

// export so it can be used
export { SAT };