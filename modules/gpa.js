// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// create the class
class GPA {
	
    // constructor
    constructor(schoolName,score,weighted) {
		this._schoolName = schoolName;
		this._score = score;
		this._weighted = weighted;
    }

    // calculates gpa percentage
    // this was an easier way to do it than trying to work with a ton of
    // different scales
    calculateGPAPercentage() {
        let scale = 0;
        
        // if it's weighted, return weighted scale. otherwise, return normal
        // scale
        if(this._weighted) {
                
                scale = HighSchoolConfig[this._schoolName]["WScale"];
        } else {
                scale = HighSchoolConfig[this._schoolName]["Scale"];
        }

        // calculate and return percentage. to avoid unnecessary math, it
        // was not multiplied by 100 since it doesn't have to be
        // "human readable"
        return this._score / scale;
    }
}

// export so it can be used
export { GPA };