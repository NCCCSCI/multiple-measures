// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// bring in the configuration for highschool gpa scales
import { HSCourseEqConfig  } from '../config/HighSchoolCourseEquivalencies.js';

// importing highschool gpa class GPA from gps.js
//import { GPA } from '../modules/gpa.js'

// importing storage config
import { storageConfig  } from '../config/global.js';


function clearStorage2() {
    for (let k in storageConfig.name)
    {
        localStorage.removeItem(k);
    }
}

//function that gets the highschool inputs
function highSchool() {

    // grabbing all inputs from html and stores them into local storage
    const stName =
    document.getElementById("input-name").value.trim();
    if (stName !== null) {
    localStorage.setItem(storageConfig.name.stName, stName);}
    
    const stID =
    document.getElementById("input-id").value.trim();
    if(stID !== null){
    localStorage.setItem(storageConfig.name.stID,stID);}

    const hsName =
    document.getElementById('mm-hsname').value.trim();
    localStorage.setItem(storageConfig.name.hsName, hsName);

    const hsYear = 
    document.getElementById("mm-date").value.trim();
    localStorage.setItem(storageConfig.name.hsYear, hsYear);

    const Ugpa=
    document.getElementById("mm-gpa-rb-un").value.trim();
    localStorage.setItem(storageConfig.name.Ugpa, Ugpa);

    const Wgpa=
    document.getElementById("mm-gpa-rb-w").value.trim();
    localStorage.setItem(storageConfig.name.Wgpa, Wgpa);
    
    const hsEnglish =
    document.getElementById("mm-eng").value.trim();
    localStorage.setItem(storageConfig.name.hsEnglish, hsEnglish);

    const hsMath =
    document.getElementById("mm-math").value.trim();
    localStorage.setItem(storageConfig.name.hsMath, hsMath);

    // getting the name thresold
    const thresholdName = Object.keys(HSCourseEqConfig ).reverse();
    const thresholdSchool = Object.keys(HighSchoolConfig).reverse();
 
    // getting name placement
    const namePlacement = thresholdName.find(thresholdName=> hsName == thresholdName);
    const gpaPlacement = thresholdSchool.find(thresholdSchool=> hsName == thresholdSchool);
    
    // return the math class they should take based on which hs math they've taken placement
    if (namePlacement !== "undefined") {
        const thresholdMath = Object.keys(HSCourseEqConfig [namePlacement]).reverse();
        const mathTaken = thresholdMath.find(thresholdMath => hsMath > thresholdMath);
        //console.log (mathTaken);
        console.log(HSCourseEqConfig [namePlacement] [mathTaken]);
     }







    

 









//null if nothings found
return null;  
}

//function to test eval button
function clickhandler () {
   console.log(highSchool());
}

//function to get button and alert when clicked
function test2() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
    }

export {
    test2,clearStorage2
}

