// bring in the configuration for highschool gpa scales
import { SATConfig } from '../config/sat.js';

function sat(){

    // get sat math score input 
    const satMath =
    document.getElementById("input-sat-2").value.trim();

    // get sat reading and writing input 
    const satReading =
    document.getElementById("input-sat-3").value.trim();

    // getting the sat thresholds
    const thresholdMath = Object.keys(SATConfig.Mathematics).reverse();
    const thresholdReading = Object.keys(SATConfig.Critical_Reading_and_Writing).reverse();

    // finding the first threshold score
    const mathPlacement = thresholdMath.find(thresholdMath =>  satMath > thresholdMath); 
    const readingPlacement = thresholdReading.find( thresholdReading => satReading > thresholdReading); 

    if (mathPlacement !== "undefined") {
        // return math placement
        return (SATConfig.Mathematics[mathPlacement]);
    }

   if (readingPlacement !== "undefined") {
         // return reading placement
        return (SATConfig.Critical_Reading_and_Writing[readingPlacement]);
    }

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

