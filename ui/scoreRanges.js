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
                        option.value = addedScore + ' or Higher';
                        option.setAttribute('class', score);
                        option.textContent = addedScore + ' or Higher';
                        satMath.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.value = addedScore + '-' + nextItem;
                        option.setAttribute('class', score);
                        option.textContent = addedScore + ' - ' + nextItem;
                        satMath.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.value = nextItem + ' or Lower';
                    option.setAttribute('class', score);
                    option.textContent = nextItem + ' or Lower';
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
                        option.value = addedScore + ' or Higher';
                        option.setAttribute('class', score);
                        option.textContent = addedScore + ' or Higher';
                        satEng.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.value = addedScore + '-' + nextItem;
                        option.setAttribute('class', score);
                        option.textContent = addedScore + ' - ' + nextItem;
                        satEng.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.value = nextItem + ' or Lower';
                    option.setAttribute('class', score);
                    option.textContent = nextItem + ' or Lower';
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
        let addedScore = parseInt(wrtg) + 1;
        if (keys.indexOf(wrtg) !== 0) {
            if (nextItem === undefined) {
                let option = document.createElement("option");
                option.value = addedScore + ' or Higher';
                option.setAttribute('class', wrtg);
                option.textContent = addedScore + ' or Higher';
                accEngWtrg.appendChild(option);
            } else {
                let option = document.createElement("option");
                option.value = addedScore + '-' + nextItem;
                option.setAttribute('class', wrtg);
                option.textContent = addedScore + ' - ' + nextItem;
                accEngWtrg.appendChild(option);
            }
        } else {
            let option = document.createElement("option");
            option.value = nextItem + ' or Lower';
            option.setAttribute('class', wrtg);
            option.textContent = nextItem + ' or Lower';
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
        let addedScore = parseInt(qas) + 1;
        if (keys.indexOf(qas) !== 0) {
            if (nextItem === undefined) {
                let option = document.createElement("option");
                option.value = addedScore + ' or Higher';
                option.setAttribute('class', qas);
                option.textContent = addedScore + ' or Higher';
                accMathQas.appendChild(option);
            } else {
                let option = document.createElement("option");
                option.value = addedScore + '-' + nextItem;
                option.setAttribute('class', qas);
                option.textContent = addedScore + ' - ' + nextItem;
                accMathQas.appendChild(option);
            }
        } else {
            let option = document.createElement("option");
            option.value = nextItem + ' or Lower';
            option.setAttribute('class', qas);
            option.textContent = nextItem + ' or Lower';
            accMathQas.appendChild(option);

            // ARNG
            for (const arng in MathPlacement[qas]) {
                let keys = Object.keys(MathPlacement[qas]);
                let nextIndex = keys.indexOf(arng) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(arng) + 1;
                if (keys.indexOf(arng) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.value = addedScore + ' or Higher';
                        option.setAttribute('class', arng);
                        option.textContent = addedScore + ' or Higher';
                        accMathArng.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.value = addedScore + '-' + nextItem;
                        option.setAttribute('class', arng);
                        option.textContent = addedScore + ' - ' + nextItem;
                        accMathArng.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.value = nextItem + ' or Lower';
                    option.setAttribute('class', arng);
                    option.textContent = nextItem + ' or Lower';
                    accMathArng.appendChild(option);
                }
            }

            // AAF
            for (const aaf in UpperLevelMathPlacement[qas]) {
                let keys = Object.keys(UpperLevelMathPlacement[qas]);
                let nextIndex = keys.indexOf(aaf) + 1;
                let nextItem = keys[nextIndex];
                let addedScore = parseInt(aaf) + 1;
                if (keys.indexOf(aaf) !== 0) {
                    if (nextItem === undefined) {
                        let option = document.createElement("option");
                        option.value = addedScore + ' or Higher';
                        option.setAttribute('class', aaf);
                        option.textContent = addedScore + ' or Higher';
                        accMathAaf.appendChild(option);
                    } else {
                        let option = document.createElement("option");
                        option.value = addedScore + '-' + nextItem;
                        option.setAttribute('class', aaf);
                        option.textContent = addedScore + ' - ' + nextItem;
                        accMathAaf.appendChild(option);
                    }
                } else {
                    let option = document.createElement("option");
                    option.value = nextItem + ' or Lower';
                    option.setAttribute('class', aaf);
                    option.textContent = nextItem + ' or Lower';
                    accMathAaf.appendChild(option);
                }
            }
        }
    }
}

/* 
SATConfig = {
    section: {
        score: SATConfig[section][score],
    }
}
*/

// export the function so it can be imported in main.js
export {
    scoreRanges
};