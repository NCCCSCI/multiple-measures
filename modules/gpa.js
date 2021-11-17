// back-end

// bring in the configuration (note the naming conventions)
import { HighSchoolConfig } from '../config/mmhighschools.js';

// create the class
class GPA {
	
	// constructor (for the demo date isn't used)
    constructor(schoolName,score,weighted) {
		this._schoolName = schoolName;
		this._score = score;
		this._weighted = score;
    }
	
	getScale(schoolName, weighted) {
		if(weighted) {
			return Config[schoolName][WScale];
		} else {
			return Config[schoolName][Scale];
		}
	}
	
	calculateGPAPercentage() {
		let scale = getScale(this._schoolName, this._weighted);
		
		return this._score / scale;
	}
}

// export so it can be used
export { GPA };