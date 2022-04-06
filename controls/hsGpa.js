// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// importing highschool gpa class GPA from gps.js
import { GPA } from '../modules/gpa.js'

// importing storage config
import { storageConfig  } from '../config/global.js';


//function that gets the highschool inputs
function highSchool() {

    // grabbing all inputs from html and stores them into local storage
    const hsName =
    document.getElementById('input-mm-2').value.trim();
    localStorage.setItem(storageConfig.name.hsName, hsName);
      
    const hsYear = 
    document.getElementById("input-mm-3").value.trim();
    localStorage.setItem(storageConfig.name.hsYear, hsYear);

    const GPA =
    document.getElementById("input-mm-4").value.trim();
    localStorage.setItem(storageConfig.name.GPA, Gpa);
    
    const hsEnglish =
    document.getElementById("input-mm-5").value.trim();
    localStorage.setItem(storageConfig.name.hsEnglish, hsEnglish);

    const hsMath =
    document.getElementById("input-mm-6").value.trim();
    localStorage.setItem(storageConfig.name.hsMath, hsMath);

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
