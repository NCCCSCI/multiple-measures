// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// importing highschool gpa class GPA from gps.js
import { GPA } from '../modules/gpa.js'


//function that gets the highschool name and checks it against the gpa scale
function highSchool() {

    // grabbing all inputs from html
    const hsName =
    document.getElementById('input-mm-2').value.trim();
    console.log(hsName);
    
    const hsYear = 
    document.getElementById("input-mm-3").value.trim();
    console.log(hsYear);

    const GPA =
    document.getElementById("input-mm-4").value.trim();
    console.log(GPA);

    const english =
    document.getElementById("input-mm-5").value.trim();
    console.log(english);

    const math =
    document.getElementById("input-mm-6").value.trim();
    console.log(math);

    /*
    // getting the sat thresholds
    const thresholdHsName = Object.keys(HighSchoolConfig);
    console.log(thresholdHsName);

    
    const thresholdHsYear = Object.keys().reverse();
    const thresholdGPA = Object.keys().reverse();
    const thresholdhsEnglish = Object.keys().reverse();
    const thresholdHsMath = Object.keys().reverse();
    */









}





//function to test eval button
function clickhandler () {
    console.log(highSchool());
}

//function to get button and alert when clicked
function test() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
    }

export {
    test
}
