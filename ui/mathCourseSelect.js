// HighSchoolCourseEquivalencies import
import {
    HSCourseEqConfig
} from "../config/HighSchoolCourseEquivalencies.js";

function mathCourseSelect() {
    // VARIABLE DECLARATIONS
    // hs select
    let hsSelect = document.getElementById("input-mm-2");
    // hs math course select: #input-mm-6
    let mathSelect = document.getElementById("input-mm-6");
    let mathCourseOptions = document.querySelectorAll("#input-mm-6 > option"); // read all math options

    hsSelect.addEventListener('input', function (evt) {
        mathSelect.innerHTML = '';
        let selectOption = document.createElement("option");
        selectOption.value = "Select";
        selectOption.textContent = '[Select a Course]';
        mathSelect.appendChild(selectOption);
        for (const hs in HSCourseEqConfig) { // loop through top level of HSCourseEqConfig object
            if (hsSelect.value === hs) { // compare selected high school name with high school key in object
                for (const course in HSCourseEqConfig[hs]) { // loop through high school level of HSCourseEqConfig object: read
                    let option = document.createElement("option");
                    option.value = HSCourseEqConfig[hs][course];
                    option.setAttribute('class', HSCourseEqConfig[hs][course]);
                    option.textContent = course;
                    mathSelect.appendChild(option);
                }
            }
        }
    });
}

/* 
HSCourseEqConfig = {
    hs: {
        course: HSCourseEqConfig[hs][course],
    }
}
*/

// export the function so it can be imported in main.js
export {
    mathCourseSelect
};