// populates multiple measures math course dropdown and gpa scale based on high school selection

import {
HSCourseEqConfig
        } from "../config/HighSchoolCourseEquivalencies.js";

import {
HighSchoolConfig
        } from "../config/mmhighschools.js";

import {
storageConfig
        } from "../config/global.js";

const mmGPA = document.getElementById('mm-gpa');
const gpaScaleOutput = document.getElementById("gpaScale");

function updateGpa(hs,scaleType = 'Scale' ) {
    mmGPA.disabled = true;
    mmGPA.value = null;
    gpaScaleOutput.textContent = '';
    if (typeof HighSchoolConfig[hs] !== "undefined") {
        mmGPA.disabled = false;
        gpaScaleOutput.textContent = mmGPA.max = HighSchoolConfig[hs][scaleType];
        localStorage.setItem(storageConfig.name.GPAScale, HighSchoolConfig[hs][scaleType]);
    }
}

function hsSelect() {
    // VARIABLE DECLARATIONS
    // hs select
    const hsSelect = document.getElementById("mm-hsname");

    //  make a function the updates GPA stuff when either the high school changes or the radio buttons change
    hsSelect.addEventListener('input', function (evt) {
        const target = evt.target;
        const hs = target.value;
        const mathSelect = document.getElementById("mm-math");

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
        updateGpa(hs);
    });

    document.getElementById("mm-gpa-rb-block").addEventListener("change", function (evt) {
        const target = evt.target;
        if (target.type === "radio") {
            const hs = hsSelect.value;
            const scaleType = target.value;
            updateGpa(hs,scaleType);
        }
    });
}

// export the function so it can be imported in main.js
export {
hsSelect
        };