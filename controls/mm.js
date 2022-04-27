// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

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
    if (stID !== null){
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
     
    // Grabbing thresdholds for school name and recommend math/ english classes. 
     const thresholdGpa = Object.keys(HighSchoolConfig);
     const highSchoolName= thresholdGpa.find(thresholdGpa => hsName === thresholdGpa); 
     const GpaMathThreshold = Object.keys(MathConfig);
     const matchingMathClass = GpaMathThreshold.find(GpaMathThreshold => hsMath === GpaMathThreshold); 
     const GpaEnglishThreshold = Object.keys(EnglishConfig);
     const matchingEnglishClass = GpaEnglishThreshold.find(GpaEnglishThreshold => hsEnglish === GpaEnglishThreshold);

    if (highSchoolName !== undefined)
    {
        if (gpaButton === 'Scale') {
            const scaleGpa = HighSchoolConfig[highSchoolName].Scale;
            const sGpa = gpaText / scaleGpa ;
            localStorage.setItem(storageConfig.name.sGpa, sGpa);
            localStorage.setItem(storageConfig.name.GPAType,' (Unweighted)');
           

            // comparing highschool scale gpa to the school name gpa and returning the class they should take 
            const sGpaMathPlacement = Object.keys(MathConfig [matchingMathClass]).reverse();
            const sRecommendMath = sGpaMathPlacement.find(sGpaMathPlacement  => sGpa >= sGpaMathPlacement );
            localStorage.setItem(storageConfig.name.sRecommendMath, sRecommendMath);
        
            const sGpaEnglishPlacement = Object.keys(EnglishConfig [matchingEnglishClass]).reverse();
            const sRecommendEnglish = sGpaEnglishPlacement.find(sGpaEnglishPlacement => sGpa >= sGpaEnglishPlacement );
            localStorage.setItem(storageConfig.name.sRecommendEnglish, sRecommendEnglish);

       }       
        else {
            // comparing highschool weighed scale gpa to the school name gpa and returning the class they should take 
            const wscaleGpa = HighSchoolConfig[highSchoolName].WScale;
            const wGpa = gpaText / wscaleGpa ;
            localStorage.setItem(storageConfig.name.wGpa, wGpa);
<<<<<<< HEAD
=======
            localStorage.setItem(storageConfig.name.GPAType,' (Weighted)');
         
>>>>>>> 5ca4abcc7131ad36af3ed3104a998403e414ddc1

            // comparing highschool weighted gpa to the school name gpa and returning the class they should take 
            const wGpaMathPlacement = Object.keys(MathConfig [matchingMathClass ]).reverse();
            const wRecommendMath = wGpaMathPlacement.find(wGpaMathPlacement  => wGpa >= wGpaMathPlacement );
            localStorage.setItem(storageConfig.name.wRecommendMath, wRecommendMath);

            const wGpaEnglishPlacement = Object.keys(EnglishConfig [matchingEnglishClass]).reverse();
            const wRecommendEnglish = wGpaEnglishPlacement.find(wGpaEnglishPlacement => wGpa >= wGpaEnglishPlacement );
            localStorage.setItem(storageConfig.name.sRecommendEnglish, sRecommendEnglish);  
        }
    }
    
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


