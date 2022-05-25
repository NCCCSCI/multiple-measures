/*
 * Resources:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *  - https://github.com/mdn/js-examples/tree/master/modules
 */

// CONTROLS JAVASCRIPT

import {clearLocalStorage, initCommon} from "./controls/common.js";
clearLocalStorage();
initCommon();

// /UI JAVASCRIPT

// eval box import
import {evalBox} from "./ui/evalBox.js";
evalBox();
// call evalBox script

// date select import
import {dates} from "./ui/dates.js";
dates(); // call dates script

// hsSelect import
import {hsSelect} from "./ui/hsSelect.js";
hsSelect(); // call hsSelect script

// scoreRanges import
import {scoreRanges} from "./ui/scoreRanges.js";
scoreRanges(); // call scoreRanges script