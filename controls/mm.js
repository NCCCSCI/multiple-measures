// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// bring in the configuration for highschool gpa scales
import { HSCourseEqConfig  } from '../config/HighSchoolCourseEquivalencies.js';

// import math classes based off gpa
import { MathConfig } from '../config/mmmath.js';

// import english classes based off gpa
import { EnglishConfig   } from '../config/mmenglish.js';

// importing storage config
import { storageConfig  } from '../config/global.js';

// clearing storage
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

    const gpaButton =
    document.querySelector('[name = "mm-gpa-rb"]:checked').value;
    localStorage.setItem(storageConfig.name.gpaButton,gpaButton);


    const gpaText=
    document.getElementById("mm-gpa").value.trim();
    localStorage.setItem(storageConfig.name.gpaText,gpaText);

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
    const schoolNameGpaScale = thresholdSchool.find(thresholdSchool=> hsName == thresholdSchool);
    
    // return the math class they should take based on which hs math they've taken placement
    if (namePlacement !== "undefined") {
        const thresholdMath = Object.keys(HSCourseEqConfig [namePlacement]).reverse();
        const mathTaken = thresholdMath.find(thresholdMath => hsMath > thresholdMath);
        return(HSCourseEqConfig [namePlacement] [mathTaken]);
    }

    if (gpa == scale) {
        const thresholdGpa = Object.keys(HighSchoolConfig [schoolNameGpaScale]).reverse();
        let scaleGpa = thresholdGpa .find(thresholdGpa  => gpaText / thresholdGpa);
        console.log(scaleGpa);


    }







    

 









//null if nothings found
return null;  
}

//function to test eval button
function clickhandler () {
   localStorage.getItem(highSchool());
}

//function to get button and alert when clicked
function test2() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
    }

export {
    test2,clearStorage2
}

