// back-end

// bring in the configuration to calculate placement based on sat score
import { SATConfig } from '../config/sat.js';

// create the class
class SAT {
    
    // constructor
     // we are assuming that by the time it gets here, the web app has
    // determined that the future student took the SATs within the proper
    // time frame
    constructor(testTaken,score) {
        this._testTaken = testTaken;
        this._score = score;
    }
    
    // handle the placement
    placement() {
        // get all the thresholds - properties of the configuration
        const thresholds = Object.keys(SATConfig[this._testTaken]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this._score);
        
        // "undefined" means the .find failed
        if (placement !== "undefined") {
            // return the value of the property (the placement)
            return SATConfig[this._testTaken][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
}

// export so it can be used
export { SAT };