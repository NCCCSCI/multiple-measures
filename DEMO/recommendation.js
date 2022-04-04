import {storageConfig} from "./config/global.js";

// get the math placement
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const mathPlacement = localStorage.getItem(storageConfig.name.mathPlacement);
document.getElementById("math").textContent = mathPlacement;