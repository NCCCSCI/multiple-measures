// back-end

// bring in the configuration (note the naming conventions)
import { EnglishConfig } from '../config/mmenglish.js';
import { GPA } from '../modules/gpa.js';

// create the class
class MultipleMeasuresEnglish {
    
    // constructor (for the demo date isn't used)
    constructor(highSchool, score, weighted, englishClass) {
		this._gpa = gpa(highSchool, score, weighted);
		this._gpaPercentage = this._gpa.calculateGPAPercentage();
		this._englishClass = englishClass;
    }
	
    // handle the english placement
    englishplacement() {
        // get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const thresholds = Object.keys(EnglishConfig[this._englishClass]).reverse();
        
        // find the first threshold the score is greater than
        const placement = thresholds.find(threshold => threshold < this._gpaPercentage);
        
        // "undefined" means the .find failed
        if (placement !== "undefined") {
            // return the value of the property (the placement)
            return EnglishConfig[this._englishClass][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
}

// export so it can be used
export { MultipleMeasuresEnglish };