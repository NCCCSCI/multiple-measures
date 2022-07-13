// opens evaluation box on "evaluate" button click
import {
storageConfig
        } from "../config/global.js";

import { highSchool } from '../controls/hs.js';
import { accuplacer } from '../controls/accScore.js';
import { sat } from '../controls/satScore.js';
import { englPlacementOutput, mathPlacementOutput } from '../controls/common.js';

const qualifyingCourses = document.getElementById("qualifying-courses");
const detailsCollapse = document.getElementById('collapseDetails');
const outputs = qualifyingCourses.querySelectorAll("[data-id]");

function collapseDetails() {
    return new bootstrap.Collapse(detailsCollapse, {toggle: false});
}

function updateDetails() {
    collapseDetails();
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
}

function initEvalBox() {
    document.getElementById("btnDetails").addEventListener("click",updateDetails);
}

// export the function so it can be imported in main.js
export {
updateDetails, initEvalBox
        };