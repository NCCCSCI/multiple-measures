// HighSchoolCourseEquivalencies import
import {
    HSCourseEqConfig
} from "../config/HighSchoolCourseEquivalencies.js";

function mathCourseSelect() {
    // VARIABLE DECLARATIONS
    // hs select
    let hsSelect = getElementById("input-mm-2");
    // hs math course select: #input-mm-6
    let mathSelect = getElementById("input-mm-6");

    for (const hs in HSCourseEqConfig) { // loop through top level of HSCourseEqConfig object
        for (const course in HSCourseEqConfig[hs]) { // loop through high school level of HSCourseEqConfig object: read
            hsSelect.addEventListener('input', function (evt) { // change input on hs select
                if (hsSelect.value === hs) { // compare selected high school name with high school key in object
                    let mathCourseOptions = querySelectorAll("#input-mm-6 > option"); // read all math options
                    mathCourseOptions.forEach(mathOption => { // populate math options with object content
                        switch (mathOption.value) {
                            case "AlgebraI":
								// drop " Equivalent" in HSCourseEqConfig[hs] valued
                                break;
                            case "AlgebraII_Statistics":

                                break;
                            case "AlgebraIII":

                                break;
                            case "Precalculus_Trigonometry":

                                break;
                            case "Calculus":

                                break;
                            default:
                                break;
                        }
                        /* 
						HSCourseEqConfig = {
							hs: {
								course: HSCourseEqConfig[hs],
							}
						}
						*/
                    });
					// make something for in case there are multiple objects with the same equivalent
                }
                console.log(mathSelect);

            });
        }
    }
}

// export the function so it can be imported in main.js
export {
    mathCourseSelect
};

/* 
mon mar 21: planning
wed mar 23: mathOption.value switch (decide how to populate dropdown with object content)
mon mar 28: 
wed mar 30: 
*/