// back-end

// bring in the configuration (note the naming conventions)
import { Config } from '../config/multiplemeasures.js';

// create the class
class MultipleMeasures {
    
    // constructor (for the demo date isn't used)
    constructor(schoolname,gpa,englishclass,mathclass,weighted) {
        this._schoolname = schoolname;
		
		let scale = undefined;
		let weightedscale = undefined;
		
		switch(schoolname) = {
			case "alvirne": {
				scale = 4.3;
				weightedscale = 4.9;
				break;
			}
			case "campbell": {
				scale = 4.33;
				weightedscale = 5.83;
				break;
			}
			case "conval": {
				scale = 4.33;
				weightedscale = 6.5;
				break;
			}
			case "hollis_brookline": {
				scale = 4.33;
				weightedscale = 5.0
				break;
			}
			case "londonderry": {
				scale = 4.0;
				weightedscale = 4.5;
				break;
			}
			case "manchester_district": {
				scale = 4;
				weightedscale = 12;
				break;
			}
			case "mascenic": {
				scale = 4.3;
				weightedscale = 4.9;
				break;
			}
			case "merrimack": {
				scale = 4.33;
				weightedscale = 5.33;
				break;
			}
			case "milford": {
				scale = 4.3;
				weightedscale = 4.9;
				break;
			}
			case "nashua_north": {
				scale = 5.4;
				weightedscale = 5.4;
				break;
			}
			case "nashua_south": {
				scale = 5.4;
				weightedscale = 5.4;
				break;
			}
			case "pelham": {
				scale = 5;
				weightedscale = 4.33;
				break;
			}
			case "salem": {
				scale = 4;
				weightedscale = 4.6;
				break;
			}
			case "wilton_lyndenborough": {
				scale = 4.33;
				weightedscale = 6.5;
				break;
			}
			default: {
				scale = 1.0;
			}
		} 
		this._scale = scale;
		this._weightedscale = weightedscale;
        this._gpa = gpa;
        this._englishclass = englishclass;
		this._mathclass = mathclass;
    }
	
	function calculatePercentage() {
		if (scale !== 0) {
			return this._gpa/this._scale;
		}
	}
    
    // handle the placement
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
export { AccuPlacer };