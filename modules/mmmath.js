// back-end

// bring in the configuration (note the naming conventions)
import { MathConfig } from '../config/mmmath.js';
import { GPA } from 'gpa.js';

// create the class
class MultipleMeasuresMath {
    
    // constructor (for the demo date isn't used)
    constructor(highSchool, score, weighted, mathClass) {
		this._gpa = gpa(highSchool, score, weighted);
		this._gpaPercentage = this._gpa.calculateGPAPercentage();
		this._mathClass = mathClass;
    }
	

    // handle the english placement
    mathplacement() {
        // get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const thresholds = Object.keys(MathConfig[this._mathClass]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this._gpaPercentage));
        
        // "undefined" means the .find failed
        if (placement !== "undefined") {
            // return the value of the property (the placement)
            return MathConfig[this._mathClass][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
}

// export so it can be used
export { MultipleMeasuresMath };