// populates multiple measures math course dropdown and gpa scale based on high school selection

import {
    HSCourseEqConfig
} from "../config/HighSchoolCourseEquivalencies.js";

import {
    HighSchoolConfig
} from "../config/mmhighschools.js";

import{storageConfig} from "../config/global.js";

function hsSelect() {
    // VARIABLE DECLARATIONS
    // hs select
    let hsSelect = document.getElementById("mm-hsname");
    // hs math course select: #mm-math
    let mathSelect = document.getElementById("mm-math");
    let radioButtons = document.querySelectorAll("#mm-gpa-block > div > div > .mm-gpa-rb");
    let gpaScaleOutput = document.getElementById("gpaScale");

    hsSelect.addEventListener('input', function (evt) {
        mathSelect.innerHTML = '';
        gpaScaleOutput.textContent = '';
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

        for (const hs in HighSchoolConfig) { // loop through top level of HighSchoolConfig object
            if (hsSelect.value === hs) {
                for (const scaleType in HighSchoolConfig[hs]) { // loop through high school level of HighSchoolConfig object: read
                    radioButtons.forEach(radioButton => {
                        radioButton.addEventListener('click', function (evt) {
                            if (radioButton.value === "Scale") {
                                if (scaleType === radioButton.value) {
                                    gpaScaleOutput.textContent = HighSchoolConfig[hs][scaleType];
                                    localStorage.setItem(storageConfig.name.GPAScale,HighSchoolConfig[hs][scaleType]);
                                }
                            } else {
                                if (scaleType === radioButton.value) {
                                    gpaScaleOutput.textContent = HighSchoolConfig[hs][scaleType];
                                    localStorage.setItem(storageConfig.name.GPAScale,HighSchoolConfig[hs][scaleType]);
                                }
                            }
                        });
                    });
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
    hsSelect
};