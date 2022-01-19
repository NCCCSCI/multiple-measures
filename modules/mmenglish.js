// back-end

// bring in the configuration to calculate gpa percentage and generate
// english placement
import { EnglishConfig } from '../config/mmenglish.js';
import { GPA } from '../modules/gpa.js';

// create the class
class MultipleMeasuresEnglish {
    
    // constructor
    // we are assuming that by the time it gets here, the web app has
    // determined that the future student graduated within the correct
    // time frame, so no adte is taken into consideration
    constructor(highSchool, score, weighted, englishClass) {
        // create new GPA object
		this._gpa = new GPA(highSchool, score, weighted);
        // get gpa percentage with gpa object just created
		this._gpaPercentage = this._gpa.calculateGPAPercentage();
		this._englishClass = englishClass;
    }
	
    // handle the english placement
    englishplacement() {
        // get all the thresholds - properties of the configuration
        // reverse the order
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