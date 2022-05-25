// bring in the configuration for accuplacer english
import { EnglishPlacementNative} from '../config/NextGenNativeEngAccuplacer.js';

// bring in the configuration for accuplacer math
import { MathPlacement} from '../config/nextGenMathAccuplacer.js';

// bring in the configuration for aaf advanced math
import { UpperLevelMathPlacement } from '../config/UpperLevelMathPlacement.js';

// importing storage config
import { storageConfig  } from '../config/global.js';

function accuplacer()
{
    // grabbing all accuplacer inputs and storing them into local storage
    const accuDate = document.getElementById("acc-date").value.trim();
    if (accuDate !== 'Select') {
        localStorage.setItem(storageConfig.name.accuDate, accuDate);
    } else {
        localStorage.removeItem(storageConfig.name.accuDate);
    }

    localStorage.removeItem(storageConfig.name.wrtgPlacement);
    localStorage.removeItem(storageConfig.name.wrtg);
    localStorage.removeItem(storageConfig.name.essy);
    const wrtg = document.getElementById("acc-wrtg").value.trim();
    if (wrtg !== 'Select') {
        localStorage.setItem(storageConfig.name.wrtg, wrtg);
        const thresholdWrtg = Object.keys(EnglishPlacementNative).reverse();
        localStorage.setItem(storageConfig.name.thresholdWrtg, thresholdWrtg);
        const wrtgPlacement = thresholdWrtg.find(thresholdWrtg => wrtg > thresholdWrtg);
        if (wrtgPlacement !== undefined) {
            const essy = document.getElementById("acc-essy").value.trim();
            if (typeof EnglishPlacementNative[wrtgPlacement][essy] !== "undefined") {
                localStorage.setItem(storageConfig.name.essy, essy);
                localStorage.setItem(storageConfig.name.wrtgPlacement, EnglishPlacementNative[wrtgPlacement][essy]);
            }
        }
    }

    // remove all tha Accuplacer math values
    ['arng',
        'aaf',
        'qas',
        'thresholdQas',
        'thresholdAaf',
        'qasPlacement',
        'arngPlacement',
        'aafPlacement',
        'arngRange',
        'qasRange',
        'aafRange'].forEach(n => localStorage.removeItem(storageConfig.name[n]));
    const arng = document.getElementById("acc-arng").value.trim();
    if (arng !== 'Select') {
        const arngRange = arng.split(/[_-]/);
        localStorage.setItem(storageConfig.name.arng, arng);
        localStorage.setItem(storageConfig.name.arngRange, arngRange);
        const qas = document.getElementById("acc-qas").value.trim();
        if (qas !== 'Select') {
            const qasRange = qas.split(/[_-]/);
            localStorage.setItem(storageConfig.name.qas, qas);
            localStorage.setItem(storageConfig.name.qasRange, qasRange);
            const thresholdArng = Object.keys(MathPlacement).reverse();
            const arngPlacement = thresholdArng.find(thresholdArng => arngRange[0] >= thresholdArng);
            if (arngPlacement !== undefined) {
                const thresholdQas = Object.keys(MathPlacement[arngPlacement]).reverse();
                const qasPlacement = thresholdQas.find(thresholdQas => qasRange[0] >= thresholdQas);
                if (qasPlacement !== undefined) {
                    localStorage.setItem(storageConfig.name.thresholdQas, thresholdQas);
                    if (typeof MathPlacement[arngPlacement][qasPlacement] !== "undefined") {
                        localStorage.setItem(storageConfig.name.arngPlacement, MathPlacement[arngPlacement][qasPlacement]);
                        const aaf = document.getElementById("acc-aaf").value.trim();
                        if (aaf !== 'Select') {
                            const aafRange = aaf.split(/[_-]/);
                            localStorage.setItem(storageConfig.name.aaf, aaf);
                            localStorage.setItem(storageConfig.name.aafRange, aafRange);
                            const thresholdQas = Object.keys(UpperLevelMathPlacement).reverse();
                            const qasPlacement = thresholdQas.find(thresholdQas => qasRange[0] >= thresholdQas);
                            if (qasPlacement !== undefined) {
                                const thresholdAaf = Object.keys(UpperLevelMathPlacement[qasPlacement]).reverse();
                                const aafPlacement = thresholdAaf.find(thresholdAaf => aafRange[0] >= thresholdAaf);
                                if (aafPlacement !== undefined) {
                                    localStorage.setItem(storageConfig.name.aafPlacement, UpperLevelMathPlacement[qasPlacement][aafPlacement]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// live update support
function initAccuplacer() {
    document.getElementById("accuplacer").addEventListener("change", accuplacer);
}

export {
initAccuplacer, accuplacer
}

