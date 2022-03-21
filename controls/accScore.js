// bring in the configuration for highschool gpa scales
import { HighSchoolConfig } from '../config/mmhighschools.js';

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