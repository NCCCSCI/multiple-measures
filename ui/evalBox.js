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
            switch (course.classList.contains()) {
                case 'mm':
                    course.setAttribute("id", "evaluated-hsMath");
                    course.textContent = localStorage.getItem(storageConfig.name.hsMath);
                    break;
                case 'satMath':
                    course.setAttribute("id", "evaluated-mathPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.mathPlacement);
                    break;
                case 'satEng':
                    course.setAttribute("id", "evaluated-readingPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.readingPlacement);
                    break;
                case 'accEng':
                    course.setAttribute("id", "evaluated-wrtgPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.wrtgPlacement);
                    break;
                case 'accMath':
                    course.setAttribute("id", "evaluated-qasPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.qasPlacement);
                    break;
                case 'accAaf':
                    course.setAttribute("id", "evaluated-aafPlacement");
                    course.textContent = localStorage.getItem(storageConfig.name.aafPlacement);
                    break;
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