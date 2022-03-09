// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

// importing highschool gpa class GPA from gps.js
import { GPA } from '../modules/gpa.js'

/*
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

    let hs = hsName, hsYear, GPA, english, math; 

}
*/
function sat(){


    // get date input 
    const satDate =
    document.getElementById("input-sat-2").value.trim();

    // get sat math score input 
    const satMath =
    document.getElementById("input-sat-3").value.trim();

    // get sat reading and writing input 
    const satReading =
    document.getElementById("input-sat-4").value.trim();

    // get sat composite input 
    const satComposite =
    document.getElementById("input-sat-5").value.trim();

    return satComposite;
}

function accuplacer(){

     // get WRTG input 
     const wrtg =
     document.getElementById("input-acc-2").value.trim(); 

      // get ESSY input 
    const essy =
    document.getElementById("input-acc-3").value.trim(); 

     // get ARNG input 
     const arng =
     document.getElementById("input-acc-4").value.trim(); 

      // get QAS input 
    const qas =
    document.getElementById("input-acc-5").value.trim(); 

     // get AAF input 
     const aaf =
     document.getElementById("input-acc-6").value.trim(); 

    return essy;

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
