// opens evaluation box on "evaluate" button click

import {
    storageConfig
} from "../config/global.js";

function evalBox() {

    let evalBtn = document.getElementById("eval-btn");
    let allInputs = document.querySelectorAll(".accordion > input, select");
    let courses = document.querySelectorAll(".evaluated-course");
    /* let placements = [
        'hsMath',
        'mathPlacement',
        'readingPlacement',
        'wrtgPlacement',
        'qasPlacement',
        'aafPlacement'
    ]; */

    // evaluate button / evaluation box popup function
    evalBtn.addEventListener("click", function (evt) {
        let evalBox = document.getElementById("eval-box");
        let evalBoxStatus = evalBox.getAttribute('class');
        if (evalBoxStatus === 'eval-box hidden') {
            evalBox.setAttribute('class', 'eval-box');
        }

        // adding qualifying courses
        courses.forEach(course => {
            const scoreClass = course.getAttribute('class');

            if (scoreClass.includes('mm')) {
                course.setAttribute("id", "evaluated-hsMath");
                course.textContent = localStorage.getItem(storageConfig.name.hsMath);
            } else if (scoreClass.includes('satMath')) {
                course.setAttribute("id", "evaluated-mathPlacement");
                course.textContent = localStorage.getItem(storageConfig.name.mathPlacement);
            } else if (scoreClass.includes('satEng')) {
                course.setAttribute("id", "evaluated-readingPlacement");
                course.textContent = localStorage.getItem(storageConfig.name.readingPlacement);
            } else if (scoreClass.includes('accEng')) {
                course.setAttribute("id", "evaluated-wrtgPlacement");
                course.textContent = localStorage.getItem(storageConfig.name.wrtgPlacement);
            } else if (scoreClass.includes('accMath')) {
                course.setAttribute("id", "evaluated-qasPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.qasPlacement);
            } else {
                course.setAttribute("id", "evaluated-aafPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.aafPlacement);
            }

            if (course.textContent === '') {
                course.parentNode.classList.add('hidden');
            }
        });
    });

    // when any of the inputs change, hide the box again
    allInputs.forEach(item => {
        item.addEventListener("input", function (evt) {
            let evalBox = document.getElementById("eval-box");
            let evalBoxStatus = evalBox.getAttribute('class');

            if (evalBoxStatus === 'eval-box') {
                evalBox.setAttribute('class', 'eval-box hidden');
            }
        });
    });
}

// export the function so it can be imported in main.js
export {
    evalBox
};