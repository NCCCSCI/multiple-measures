// bring in the configuration for accuplacer english
import { EnglishPlacementNative} from '../config/NextGenNativeEngAccuplacer.js';

// bring in the configuration for accuplacer math
import { MathPlacement} from '../config/nextGenMathAccuplacer.js';

function accuplacer()
{

  // getting all score inputs
  const wrtg =
  document.getElementById("input-acc-2").value.trim(); 

  const essy =
  document.getElementById("input-acc-3").value.trim(); 

  const arng =
  document.getElementById("input-acc-4").value.trim(); 
  const arngRange = arng.split(/[_-]/);

  const qas = 
  document.getElementById("input-acc-5").value.trim();
  const qasRange = qas.split(/[_-]/);

  const aaf =
  document.getElementById("input-acc-6").value.trim(); 

  // grabbing the thresholds
  const thresholdWrtg = Object.keys(EnglishPlacementNative).reverse();
  const thresholdQas = Object.keys(MathPlacement).reverse();
    
  // finding the first threshold score
  const wrtgPlacement = thresholdWrtg.find(thresholdWrtg => wrtg > thresholdWrtg); 
  const qasPlacement = thresholdQas.find(thresholdQas => qasRange[0] >= thresholdQas);
   
  if (wrtgPlacement !== "undefined") {
    // return writing placement
    console.log (EnglishPlacementNative [wrtgPlacement][essy]);
  }

  if (qasPlacement !== "undefined") {
    // return math placement
    console.log (MathPlacement [qasPlacement][arngRange[0]]);
    const thresholdArng = Object.keys(MathPlacement [qasPlacement]).reverse();
    const arngPlacement = thresholdArng.find(thresholdArng => arngRange[0] >= thresholdArng);;
    console.log (MathPlacement [qasPlacement] [arngPlacement]);
  }

  console.log(MathPlacement);

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