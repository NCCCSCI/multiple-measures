// opens evaluation box on "evaluate" button click

import {storageConfig} from "../config/global.js";

function evalBox() {

    let evalBtn = document.getElementById("eval-btn");
    let allInputs = document.querySelectorAll(".accordion > input, select");
    let courses = document.getElementById("courses");

    
    // let gpaPlacement = storageConfig.name.gpa; // working on it
    let satMathPlacement = localStorage.getItem(storageConfig.name.mathPlacement);
    /* let satEngPlacement = readingPlacement;
    let accEngPlacement = wrtgPlacement;
    let accMathPlacement = qasPlacement;
    let accAdvMathPlacement = aafPlacement; */

    // evaluate button / evaluation box popup function
    evalBtn.addEventListener("click", function (evt) {
        let evalBox = document.getElementById("eval-box");
        let evalBoxStatus = evalBox.getAttribute('class');

        if (evalBoxStatus === 'eval-box hidden') {
            evalBox.setAttribute('class', 'eval-box');
        }

        // adding qualifying courses
        courses.innerHTML = '';
        let courseItem = document.createElement("output");

        courseItem.classList.add("evaluated-course");
        courseItem.textContent = satMathPlacement;
        courses.appendChild(courseItem);
        

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