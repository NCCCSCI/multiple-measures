// bring in the configuration for highschool gpa scales
import { SATConfig } from '../config/sat.js';

// importing storage config
import { storageConfig  } from '../config/global.js';


function clearStorage3() {
    for (let k in storageConfig.name)
    {
        localStorage.removeItem(k);

    }
}

function sat(){

    const satDate =
    document.getElementById("sat-date").value.trim(); 
    localStorage.setItem(storageConfig.name.satDate, satDate);

    // get sat math score input 
    const satMath =
    document.getElementById("sat-math").value.trim();
    localStorage.setItem(storageConfig.name.satMath, satMath);

    // get sat reading and writing input 
    const satReading =
    document.getElementById("sat-eng").value.trim();
    localStorage.setItem(storageConfig.name.satReading, satReading);

    // getting the sat thresholds
    const thresholdMath = Object.keys(SATConfig.Mathematics).reverse();
    const thresholdReading = Object.keys(SATConfig.Critical_Reading_and_Writing).reverse();
    localStorage.setItem(storageConfig.name.thresholdMath, thresholdMath);
    localStorage.setItem(storageConfig.name.thresholdReading, thresholdReading);

    // finding the first threshold score
    const mathPlacement = thresholdMath.find(thresholdMath =>  satMath > thresholdMath); 
    const readingPlacement = thresholdReading.find( thresholdReading => satReading > thresholdReading); 
    
    

    if (mathPlacement !== "undefined") {
        // return math placement
        localStorage.setItem(storageConfig.name.mathPlacement, SATConfig.Mathematics[mathPlacement]);
        return (SATConfig.Mathematics[mathPlacement]);
    }

   if (readingPlacement !== "undefined") {
         // return reading placement
         localStorage.setItem(storageConfig.name.readingPlacement, SATConfig.Critical_Reading_and_Writing[readingPlacement]);
        return (SATConfig.Critical_Reading_and_Writing[readingPlacement]);
    }

    //null if nothings found
    return null; 
}

//function to test eval button
function clickhandler () {
    sat();
}

//function to get button and alert when clicked
function test3() {
      document.getElementById("eval-btn").addEventListener("click", clickhandler); 
      
    }

export {
    test3, clearStorage3
}

