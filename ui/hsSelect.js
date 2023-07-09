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

const mmDate = document.getElementById('mm-date');
const mmGPA = document.getElementById('mm-gpa');
const gpaScaleOutput = document.getElementById("gpaScale");
const mathSelect = document.getElementById("mm-math");
const englSelect = document.getElementById("mm-eng");
const rbScale = document.getElementById("mm-gpa-rb-un");
const highSchoolSelect = document.getElementById("mm-hsname");

function updateGpa(hs, scaleType = 'Scale') {
    mmGPA.disabled = true;
    mmGPA.value = null;
    gpaScaleOutput.textContent = '';
    if (typeof HighSchoolConfig[hs] !== "undefined") {
        mmGPA.disabled = false;
        gpaScaleOutput.textContent = mmGPA.max = HighSchoolConfig[hs][scaleType];
        localStorage.setItem(storageConfig.name.GPAScale, HighSchoolConfig[hs][scaleType]);
    }
}

function clearDateAndCourses() {
    mmDate.value = 'Select';
    mathSelect.value = 'Select';
    englSelect.value = 'Select';
    rbScale.checked = true;
}

function populateMathSelect(hs = "unknown") {

    for (const course in HSCourseEqConfig[hs]) { // loop through high school level of HSCourseEqConfig object: read
        let option = document.createElement("option");
        option.value = HSCourseEqConfig[hs][course];
        option.setAttribute('class', HSCourseEqConfig[hs][course]);
        option.textContent = course;
        mathSelect.appendChild(option);
    }
}

function hsSelect() {

    init();

    //  make a function the updates GPA stuff when either the high school changes or the radio buttons change
    highSchoolSelect.addEventListener('change', function (evt) {
        const target = evt.target;
        const hs = target.value;
        let highSchoolFound = false;

        mathSelect.innerHTML = '';
        let selectOption = document.createElement("option");
        selectOption.value = "Select";
        selectOption.textContent = '[Select a Course]';
        mathSelect.appendChild(selectOption);
        for (const hs in HSCourseEqConfig) { // loop through top level of HSCourseEqConfig object
            if (highSchoolSelect.value === hs) { // compare selected high school name with high school key in object
                populateMathSelect(hs);
                highSchoolFound = true;
                break;
            }
        }
        if (!highSchoolFound) {
            populateMathSelect();
        }
        updateGpa(hs);
        clearDateAndCourses();
    });

    document.getElementById("mm-gpa-rb-block").addEventListener("change", function (evt) {
        const target = evt.target;
        if (target.type === "radio") {
            const hs = highSchoolSelect.value;
            const scaleType = target.value;
            updateGpa(hs, scaleType);
        }
    });
}

function init() {
    for (let hs in HighSchoolConfig) {
        const option = document.createElement("option");
        option.value = hs;
        option.textContent = hs.replace(/_/g, ' ');
        highSchoolSelect.appendChild(option);
    }
}

// export the function so it can be imported in main.js
export {
hsSelect
};
