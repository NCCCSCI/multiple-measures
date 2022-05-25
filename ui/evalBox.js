// opens evaluation box on "evaluate" button click
import {
    storageConfig
} from "../config/global.js";

import { highSchool } from '../controls/hs.js';
import { accuplacer } from '../controls/accScore.js';
import { sat } from '../controls/satScore.js';

function evalBox() {

    const evalBtn = document.getElementById("eval-btn");

    // evaluate button / evaluation box popup function
    evalBtn.addEventListener("click", function (evt) {

        highSchool();
        accuplacer();
        sat();

        let evalBox = document.getElementById("eval-box");
        evalBox.classList.remove("hidden");

        let outputs = evalBox.querySelectorAll("[data-id]");
        let dataCount = 0;

        // populate results output from localStorage
        outputs.forEach(el => {
            const dataId = el.getAttribute("data-id");
            if (typeof storageConfig.name[dataId] !== "undefined") {
                const dataValue = localStorage.getItem(storageConfig.name[dataId]);
                if (dataValue !== null) {
                    dataCount++;
                    el.textContent = dataValue;
                    el.closest("tr").classList.remove('hidden');
                } else {
                    el.textContent = '';
                    el.closest("tr").classList.add('hidden');
                }
            }
        });

        if (dataCount > 0) {
            document.getElementById("qualifying-courses").classList.remove("hidden");
            document.getElementById("no-data").classList.add("hidden");
        } else {
            document.getElementById("qualifying-courses").classList.add("hidden");
            document.getElementById("no-data").classList.remove("hidden");
        }
    });

    // when any of the inputs change, hide the box again
    document.getElementById("page-accordion").addEventListener("input", e => document.getElementById("eval-box").classList.add("hidden"));
}

// export the function so it can be imported in main.js
export {
    evalBox
};