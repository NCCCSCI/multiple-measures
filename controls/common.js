import { storageConfig  } from '../config/global.js';

function clearLocalStorage() {
    for (const v of Object.values(storageConfig.name))
    {
        localStorage.removeItem(v);
    }
}

function getIndentification() {

    const stName = document.getElementById("input-name").value.trim();
    if (stName !== null) {
        localStorage.setItem(storageConfig.name.stName, stName);
    }

    const stID = document.getElementById("input-id").value.trim();
    if (stID !== null) {
        localStorage.setItem(storageConfig.name.stID, stID);
    }
}

function initCommon() {
    document.getElementById("student-identification").addEventListener("change", getIndentification);
}

export {
    clearLocalStorage, initCommon
}