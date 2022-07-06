// populates score ranges in html with config files' thresholds 

import {
    SATConfig
} from "../config/sat.js";

import {
    EnglishPlacementNative
} from "../config/NextGenNativeEngAccuplacer.js";

import {
    MathPlacement
} from "../config/nextGenMathAccuplacer.js";

import {
    UpperLevelMathPlacement
} from "../config/UpperLevelMathPlacement.js";

const LOW_END = ' or below';
const HIGH_END = ' or above';

function scoreRanges() { // variable declaration
    let satMath = document.getElementById("sat-math");
    let satEng = document.getElementById("sat-eng");
    let accEngWtrg = document.getElementById("acc-wrtg");
    let accEngEssy = document.getElementById("acc-essy");
    let accMathArng = document.getElementById("acc-arng");
    let accMathQas = document.getElementById("acc-qas");
    let accMathAaf = document.getElementById("acc-aaf");

    let selectOption;

    // select options
    satMath.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    satMath.appendChild(selectOption);

    satEng.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    satEng.appendChild(selectOption);

    accEngWtrg.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    accEngWtrg.appendChild(selectOption);

    accEngEssy.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    accEngEssy.appendChild(selectOption);

    accMathArng.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    accMathArng.appendChild(selectOption);

    accMathQas.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    accMathQas.appendChild(selectOption);

    accMathAaf.innerHTML = '';
    selectOption = document.createElement("option");
    selectOption.value = "Select";
    selectOption.textContent = '[Select a Score Range]';
    accMathAaf.appendChild(selectOption);

    // loops, population
    for (const section in SATConfig) { // loop through top level
        if (section === 'Mathematics') {
            for (const score in SATConfig[section]) { // loop through section level
                let keys = Object.keys(SATConfig[section]);
                let nextIndex = keys.indexOf(score) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(score) + 1;
                if (keys.indexOf(score) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.setAttribute('class', score);
                        option.textContent = option.value = addedScore + HIGH_END;
                        satMath.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.setAttribute('class', score);
                        option.textContent = option.value = addedScore + ' - ' + nextItem;
                        satMath.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.setAttribute('class', score);
                    option.textContent = nextItem + LOW_END;
                    satMath.appendChild(option);
                }
            }
        } else if (section === 'Critical_Reading_and_Writing') {
            for (const score in SATConfig[section]) { // loop through section level
                let keys = Object.keys(SATConfig[section]);
                let nextIndex = keys.indexOf(score) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(score) + 1;
                if (keys.indexOf(score) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.setAttribute('class', score);
                        option.textContent = option.value = addedScore + HIGH_END;
                        satEng.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.setAttribute('class', score);
                        option.textContent = option.value = addedScore + ' - ' + nextItem;
                        satEng.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.setAttribute('class', score);
                    option.textContent = option.value = nextItem + LOW_END;
                    satEng.appendChild(option);
                }
            }
        }
    }

    // WRTG
    for (const wrtg in EnglishPlacementNative) {
        let keys = Object.keys(EnglishPlacementNative);
        let nextIndex = keys.indexOf(wrtg) + 1;
        let nextItem = keys[nextIndex];
        let addedScore = parseInt(wrtg);
        if (keys.indexOf(wrtg) !== 0) {
            if (nextItem === undefined) {
                let option = document.createElement("option");
                option.setAttribute('class', wrtg);
                option.textContent = option.value = addedScore + HIGH_END;
                accEngWtrg.appendChild(option);
            } else {
                let option = document.createElement("option");
                option.setAttribute('class', wrtg);
                option.textContent = option.value = addedScore + ' - ' + (nextItem - 1);
                accEngWtrg.appendChild(option);
            }
        } else {
            let option = document.createElement("option");
            option.setAttribute('class', wrtg);
            option.textContent = option.value = (nextItem - 1) + LOW_END;
            accEngWtrg.appendChild(option);

            // ESSY
            for (const essy in EnglishPlacementNative[wrtg]) {
                let option = document.createElement("option");
                option.value = essy;
                option.setAttribute('class', essy);
                option.textContent = essy;
                accEngEssy.appendChild(option);
            }
        }
    }

    // QAS
    for (const qas in MathPlacement) {
        let keys = Object.keys(MathPlacement);
        let nextIndex = keys.indexOf(qas) + 1;
        let nextItem = keys[nextIndex];
        let addedScore = parseInt(qas);
        if (keys.indexOf(qas) !== 0) {
            if (nextItem === undefined) {
                let option = document.createElement("option");
                option.setAttribute('class', qas);
                option.textContent = option.value = addedScore + HIGH_END;
                accMathQas.appendChild(option);
            } else {
                let option = document.createElement("option");
                option.setAttribute('class', qas);
                option.textContent = option.value = addedScore + ' - ' + (nextItem - 1);
                accMathQas.appendChild(option);
            }
        } else {
            let option = document.createElement("option");
            option.setAttribute('class', qas);
            option.textContent = option.value = (nextItem - 1) + LOW_END;
            accMathQas.appendChild(option);

            // ARNG
            for (const arng in MathPlacement[qas]) {
                let keys = Object.keys(MathPlacement[qas]);
                let nextIndex = keys.indexOf(arng) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(arng);
                if (keys.indexOf(arng) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.setAttribute('class', arng);
                        option.textContent = option.value = addedScore + HIGH_END;
                        accMathArng.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.setAttribute('class', arng);
                        option.textContent = option.value = addedScore + ' - ' + (nextItem - 1);
                        accMathArng.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.setAttribute('class', arng);
                    option.textContent = option.value = (nextItem - 1) + LOW_END;
                    accMathArng.appendChild(option);
                }
            }

            // AAF
            for (const aaf in UpperLevelMathPlacement[qas]) {
                let keys = Object.keys(UpperLevelMathPlacement[qas]);
                let nextIndex = keys.indexOf(aaf) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(aaf);
                if (keys.indexOf(aaf) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.setAttribute('class', aaf);
                        option.textContent = option.value = addedScore + HIGH_END;
                        accMathAaf.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.setAttribute('class', aaf);
                        option.textContent = option.value = addedScore + ' - ' + (nextItem - 1);
                        accMathAaf.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.value = nextItem + LOW_END;
                    option.setAttribute('class', aaf);
                    option.textContent = option.value = (nextItem - 1) + LOW_END;
                    accMathAaf.appendChild(option);
                }
            }
        }
    }
}

// export the function so it can be imported in main.js
export {
    scoreRanges
};