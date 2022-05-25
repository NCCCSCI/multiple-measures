// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// import math classes based off gpa
import { MathConfig } from '../config/mmmath.js';

// import english classes based off gpa
import { EnglishConfig   } from '../config/mmenglish.js';

// importing storage config
import { storageConfig  } from '../config/global.js';

//function that gets the highschool inputs
function highSchool() {
    const hsName =
            document.getElementById('mm-hsname').value.trim();
    localStorage.setItem(storageConfig.name.hsName, hsName);

    const hsYear =
            document.getElementById("mm-date").value.trim();
    localStorage.setItem(storageConfig.name.hsYear, hsYear);

    const gpaButton =
            document.querySelector('[name="mm-gpa-rb"]:checked').value;
    localStorage.setItem(storageConfig.name.gpaButton, gpaButton);

    const gpaText =
            document.getElementById("mm-gpa").value.trim();
    localStorage.setItem(storageConfig.name.gpaText, gpaText);

    const hsEnglish =
            document.getElementById("mm-eng").value.trim();
    localStorage.setItem(storageConfig.name.hsEnglish, hsEnglish);

    const hsMath =
            document.getElementById("mm-math").value.trim();
    localStorage.setItem(storageConfig.name.hsMath, hsMath);

    // Grabbing thresdholds for school name and recommend math/ english classes.
    const thresholdGpa = Object.keys(HighSchoolConfig);
    const highSchoolName = thresholdGpa.find(thresholdGpa => hsName === thresholdGpa);

    if (highSchoolName !== undefined)
    {
        const GpaMathThreshold = Object.keys(MathConfig);
        const matchingMathClass = GpaMathThreshold.find(GpaMathThreshold => hsMath === GpaMathThreshold);
        const GpaEnglishThreshold = Object.keys(EnglishConfig);
        const matchingEnglishClass = GpaEnglishThreshold.find(GpaEnglishThreshold => hsEnglish === GpaEnglishThreshold);

        if (gpaButton === 'Scale') {
            const scaleGpa = HighSchoolConfig[highSchoolName].Scale;
            const sGpa = gpaText / scaleGpa;
            localStorage.setItem(storageConfig.name.sGpa, sGpa);
            localStorage.setItem(storageConfig.name.GPAType, ' (Unweighted)');

            // comparing highschool scale gpa to the school name gpa and returning the class they should take
            if (typeof matchingMathClass !== "undefined") {
                const sGpaMathPlacement = Object.keys(MathConfig [matchingMathClass]).reverse();
                const sRecommendMath = sGpaMathPlacement.find(sGpaMathPlacement => sGpa >= sGpaMathPlacement);
                localStorage.setItem(storageConfig.name.sRecommendMath, MathConfig[matchingMathClass][sRecommendMath]);
                localStorage.removeItem(storageConfig.name.wRecommendMath);
            }

            if (typeof matchingEnglishClass !== "undefined") {
                const sGpaEnglishPlacement = Object.keys(EnglishConfig[matchingEnglishClass]).reverse();
                const sRecommendEnglish = sGpaEnglishPlacement.find(sGpaEnglishPlacement => sGpa >= sGpaEnglishPlacement);
                localStorage.setItem(storageConfig.name.sRecommendEnglish, EnglishConfig[matchingEnglishClass][sRecommendEnglish]);
                localStorage.removeItem(storageConfig.name.wRecommendEnglish);
            }

        } else {
            // comparing highschool weighed scale gpa to the school name gpa and returning the class they should take
            const wscaleGpa = HighSchoolConfig[highSchoolName].WScale;
            const wGpa = gpaText / wscaleGpa;
            localStorage.setItem(storageConfig.name.wGpa, wGpa);
            localStorage.setItem(storageConfig.name.GPAType, ' (Weighted)');


            // comparing highschool weighted gpa to the school name gpa and returning the class they should take
            if (typeof matchingMathClass !== "undefined") {
                const wGpaMathPlacement = Object.keys(MathConfig [matchingMathClass ]).reverse();
                const wRecommendMath = wGpaMathPlacement.find(wGpaMathPlacement => wGpa >= wGpaMathPlacement);
                localStorage.setItem(storageConfig.name.wRecommendMath, MathConfig[matchingMathClass][wRecommendMath]);
                localStorage.removeItem(storageConfig.name.sRecommendMath);
            }

            if (typeof matchingEnglishClass !== "undefined") {
                const wGpaEnglishPlacement = Object.keys(EnglishConfig [matchingEnglishClass]).reverse();
                const wRecommendEnglish = wGpaEnglishPlacement.find(wGpaEnglishPlacement => wGpa >= wGpaEnglishPlacement);
                localStorage.setItem(storageConfig.name.wRecommendEnglish, EnglishConfig[matchingEnglishClass][wRecommendEnglish]);
                localStorage.removeItem(storageConfig.name.sRecommendEnglish);
            }
        }
    }

}

//function to get button and alert when clicked
function initHighSchool() {
    document.getElementById("high-school").addEventListener("change", highSchool);
}

export {
initHighSchool, highSchool
        }


