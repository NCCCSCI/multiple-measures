// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// importing highschool gpa class GPA from gps.js
import { GPA } from '../modules/gpa.js'


//function that gets the highschool name and checks it against the gpa scale
function highSchool() {

    // get hsName from input
    const hsName =
    document.getElementById('input-mm-2').value.trim();
    
    // get year graduated from input
    const hsYear = 
    document.getElementById("input-mm-3").value.trim();

    // get GPA from input
    const GPA =
    document.getElementById("input-mm-4").value.trim();

    // get last English course taken
    const english =
    document.getElementById("input-mm-5").value.trim();

    // get last Math course taken
    const math =
    document.getElementById("input-mm-6").value.trim();

}





//function to test eval button
function clickhandler () {
    console.log(accuplacer());
}

//function to get button and alert when clicked
function test() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
      
    }

export {
    test
}
