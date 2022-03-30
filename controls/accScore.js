// bring in the configuration for highschool gpa scales
import { EnglishPlacementNative} from '../config/NextGenNativeEngAccuplacer.js';

function accuplacer(){

    // getting all score inputs
    const wrtg =
    document.getElementById("input-acc-2").value.trim(); 

   const essy =
   document.getElementById("input-acc-3").value.trim(); 

    const arng =
    document.getElementById("input-acc-4").value.trim(); 

   const qas =
   document.getElementById("input-acc-5").value.trim(); 

    const aaf =
    document.getElementById("input-acc-6").value.trim(); 

    // grabbing the writing thresholds
    const thresholdWrtg = Object.keys(EnglishPlacementNative).reverse();
    const thresholdEssy = Object.keys(EnglishPlacementNative).reverse();
    

    // finding the first threshold score
    const wrtgPlacement = thresholdWrtg.find(thresholdWrtg => wrtg > thresholdWrtg); 
    const essyPlacement = thresholdEssy.find(thresholdEssy => essy > thresholdEssy);
    
    
    if (wrtgPlacement !== "undefined") {
      // return math placement
      return (EnglishPlacementNative[wrtgPlacement]);
    }

    if (essyPlacement !== "undefined") {
      // return math placement
      return (EnglishPlacementNative[essyPlacement]);
    }

  //null if nothings found
  return null; 
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