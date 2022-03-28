// bring in the configuration for highschool gpa scales
import { SATConfig } from '../config/sat.js';

function sat(){

    // get sat math score input 
    const satMath =
    document.getElementById("input-sat-3").value.trim();

    // get sat reading and writing input 
    //const satReading =
    //document.getElementById("input-sat-4").value.trim();

    // getting the sat thresholds
    const thresholdMath = Object.keys(SATConfig.Mathematics).reverse();
    //const thresholdReading = Object.keys(SATConfig.Critical_Reading_and_Writing).reverse();

   
    
    // finding the first threshold score
    const mathPlacement = thresholdMath.find(thresholdMath => thresholdMath < satMath); 
    //const readingPlacement = thresholdReading.find( thresholdReading => thresholdReading < satReading); 
  
    if (mathPlacement !== "undefined") {
        // return math placement
        return SATConfig.Mathematics[mathPlacement];
    }


    /*
   if (readingPlacement !== "undefined") {
         // return reading placement
        return SATConfig.Critical_Reading_and_Writing[readingplacement];
    }
*/
    //null if nothings found
    return null; 
}



//function to test eval button
function clickhandler () {
    console.log(sat());
}

//function to get button and alert when clicked
function test() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
      
    }

export {
    test
}

