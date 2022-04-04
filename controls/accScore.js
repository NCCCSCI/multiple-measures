// bring in the configuration for accuplacer english
import { EnglishPlacementNative} from '../config/NextGenNativeEngAccuplacer.js';

// bring in the configuration for accuplacer math
//import { EnglishPlacementNative} from '../config/NextGenNativeMathAccuplacer.js';

function accuplacer()
{

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

  console.log (wrtgPlacement);

  // grabbing the writing thresholds
  const thresholdWrtg = Object.keys(EnglishPlacementNative).reverse();
  //const thresholdEssy = Object.keys(EnglishPlacementNative).reverse();
    

  // finding the first threshold score
  const wrtgPlacement = thresholdWrtg.find(thresholdWrtg => wrtg > thresholdWrtg); 
  //const essyPlacement = thresholdEssy.find(thresholdEssy => essy > thresholdEssy);
    
   

  if (wrtgPlacement !== "undefined") {
    // return wrtgplacement
    return (EnglishPlacementNative [wrtgPlacement][essy]);
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