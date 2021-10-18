// back-end

// bring in the configuration (note the naming conventions)
import { EnglishConfig } from '../config/mmenglish.js';
import { MathConfig } from '../config/mmmath.js';
import { HighSchoolConfig } from '../config/mmhighschools.js';

// create the class
class MultipleMeasures {
    
    // constructor (for the demo date isn't used)
    constructor(highschool,englishclass,mathclass,gpa) {
		this._highschool = highschool;
		this._gpa = gpa;
		this._englishclass = englishclass;
		this._englishscore = englishscore;
		this._mathclass = mathclass;
		this._mathscore = mathscore;
    }
	
	calculatePercentage() {
		
	}
    
    // handle the english placement
    englishplacement() {
        // get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const englishthresholds = Object.keys(EnglishConfig[this._englishclass]).reverse();
        
        // find the first threshold the score is greater than
        const englishplacement = englishthresholds.find(threshold => threshold < calculatePercentage());
        
        // "undefined" means the .find failed
        if (englishplacement !== "undefined") {
            // return the value of the property (the placement)
            return Config[this._englishclass][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
    }
	
	//handle the math placement
	mathplacement() {
		// get all the thresholds - properties of the configuration
        // test.taken is a property of the Config object
        const maththresholds = Object.keys(MathConfig[this._mathclass]).reverse();
        
        // find the first threshold the score is greater than
        const mathplacement = maththresholds.find(threshold => threshold < calculatePercentage());
        
        // "undefined" means the .find failed
        if (mathplacement !== "undefined") {
            // return the value of the property (the placement)
            return Config[this._mathclass][placement];
        }
        
        // arguably unnecessary, but good for completeness
        return "undefined";
	}
}

// export so it can be used
export { MultipleMeasures };