// back-end

// bring in the configuration to calculate gpa percentage and generate
// english placement
import { MathConfig } from '../config/mmmath.js';
import { GPA } from '../modules/gpa.js';

// create the class
class MultipleMeasuresMath {
    
    // constructor
     // we are assuming that by the time it gets here, the web app has
    // determined that the future student graduated within the correct
    // time frame, so no adte is taken into consideration
    constructor(highSchool, score, weighted, mathClass) {
        // create a new GPA object
		this._gpa = new GPA(highSchool, score, weighted);
        // calculate gpa percentage using gpa object that was created
		this._gpaPercentage = this._gpa.calculateGPAPercentage();
		this._mathClass = mathClass;
    }

    // handle the math placement
    mathplacement() {
        // get all the thresholds - properties of the configuration
        const thresholds = Object.keys(MathConfig[this._mathClass]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this._gpaPercentage);
        
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