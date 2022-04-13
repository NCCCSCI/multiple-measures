// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

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

    const GPA =
    document.getElementById("mm-gpa").value.trim();
    localStorage.setItem(storageConfig.name.GPA, GPA);
    console.log(GPA);
    
    const hsEnglish =
    document.getElementById("mm-eng").value.trim();
    localStorage.setItem(storageConfig.name.hsEnglish, hsEnglish);

    const hsMath =
    document.getElementById("mm-math").value.trim();
    localStorage.setItem(storageConfig.name.hsMath, hsMath);

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

