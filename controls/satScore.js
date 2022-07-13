// bring in the configuration for highschool gpa scales
import { SATConfig } from '../config/sat.js';

// importing storage config
import { storageConfig  } from '../config/global.js';

import { englPlacementOutput, mathPlacementOutput } from './common.js';

import { updateDetails } from '../ui/evalBox.js';

const thresholdMath = Object.keys(SATConfig.Mathematics).reverse();
const thresholdReading = Object.keys(SATConfig.Critical_Reading_and_Writing).reverse();
localStorage.setItem(storageConfig.name.thresholdMath, thresholdMath);
localStorage.setItem(storageConfig.name.thresholdReading, thresholdReading);

function sat() {

    englPlacementOutput.textContent = mathPlacementOutput.textContent = '---';
    ['satDate',
        'satMath',
        'satReading',
        'thresholdMath',
        'thresholdReading',
        'mathPlacement',
        'readingPlacement'].forEach(n => localStorage.removeItem(storageConfig.name[n]));

    const satDate = document.getElementById("sat-date").value.trim();
    if (satDate !== "Select") {
        localStorage.setItem(storageConfig.name.satDate, satDate);
    }

    // get sat math score input
    const satMath = document.getElementById("sat-math").value.trim();
    if (satMath !== "Select") {
        localStorage.setItem(storageConfig.name.satMath, satMath);
        const mathPlacement = thresholdMath.find(thresholdMath => satMath > thresholdMath);
        if (mathPlacement !== undefined) {
            mathPlacementOutput.textContent = SATConfig.Mathematics[mathPlacement];
            localStorage.setItem(storageConfig.name.mathPlacement, SATConfig.Mathematics[mathPlacement]);
        }
    }

    // get sat reading and writing input
    const satReading = document.getElementById("sat-eng").value.trim();
    if (satReading !== "Select") {
        localStorage.setItem(storageConfig.name.satReading, satReading);
        const readingPlacement = thresholdReading.find(thresholdReading => satReading > thresholdReading);
        if (readingPlacement !== undefined) {
            englPlacementOutput.textContent = SATConfig.Critical_Reading_and_Writing[readingPlacement];
            localStorage.setItem(storageConfig.name.readingPlacement, SATConfig.Critical_Reading_and_Writing[readingPlacement]);
        }
    }
    updateDetails();
}

//function to get button and alert when clicked
function initSAT() {
    const satCollapsible = document.getElementById('sat');
    satCollapsible.addEventListener("change", sat);
    satCollapsible.addEventListener('shown.bs.collapse', function () {
        mathPlacementOutput.textContent = localStorage.getItem(storageConfig.name.mathPlacement);
        englPlacementOutput.textContent = localStorage.getItem(storageConfig.name.readingPlacement);
    });
}

export {
initSAT, sat
        }

