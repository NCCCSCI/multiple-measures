// bring in the configuration for accuplacer english
import { EnglishPlacementNative} from '../config/NextGenNativeEngAccuplacer.js';

// bring in the configuration for accuplacer math
import { MathPlacement} from '../config/nextGenMathAccuplacer.js';

// bring in the configuration for aaf advanced math
import { UpperLevelMathPlacement } from '../config/UpperLevelMathPlacement.js';

// importing storage config
import { storageConfig  } from '../config/global.js';


function accuplacer()
{
  
  //student information input
  const stName =
  document.getElementById("input-name").value.trim();
  if (stName !== null) {
  localStorage.setItem(storageConfig.name.stName, stName);}
  const stID =
  document.getElementById("input-id").value.trim();
  if(stID !== null){
  localStorage.setItem(storageConfig.name.stID,stID);}

  const accuDate =
  document.getElementById("input-acc-1").value.trim(); 
  localStorage.setItem(storageConfig.name.accuDate, accuDate);

  const satDate =
  document.getElementById("input-sat-1").value.trim(); 
  localStorage.setItem(storageConfig.name.satDate, satDate);

  const hsYear =
  document.getElementById("input-mm-3").value.trim(); 
  localStorage.setItem(storageConfig.name.hsYear, hsYear);

  // grabbing all accuplacer inputs and storing them into local storage
  const wrtg =
  document.getElementById("input-acc-2").value.trim(); 
  localStorage.setItem(storageConfig.name.wrtg, wrtg);

  const essy =
  document.getElementById("input-acc-3").value.trim(); 
  localStorage.setItem(storageConfig.name.essy, essy);

  const arng =
  document.getElementById("input-acc-4").value.trim(); 
  const arngRange = arng.split(/[_-]/);
  localStorage.setItem(storageConfig.name.arng, arng);
  localStorage.setItem(storageConfig.name.arngRange, arngRange);

  const qas = 
  document.getElementById("input-acc-5").value.trim();
  const qasRange = qas.split(/[_-]/);
  localStorage.setItem(storageConfig.name.qas, qas);
  localStorage.setItem(storageConfig.name.qasRange, qasRange);

  const aaf =
  document.getElementById("input-acc-6").value.trim(); 
  const aafRange = aaf.split(/[_-]/);
  localStorage.setItem(storageConfig.name.aaf, aaf);
  localStorage.setItem(storageConfig.name.aafRange, aafRange);

  // grabbing the thresholds
  const thresholdWrtg = Object.keys(EnglishPlacementNative).reverse();
  const thresholdQas = Object.keys(MathPlacement).reverse();
  const thresholdAaf = Object.keys(UpperLevelMathPlacement).reverse();
  localStorage.setItem(storageConfig.name.thresholdWrtg, thresholdWrtg);
  localStorage.setItem(storageConfig.name.thresholdQas, thresholdQas);
  localStorage.setItem(storageConfig.name.thresholdAaf, thresholdAaf);
    
  // finding the first threshold score
  const wrtgPlacement = thresholdWrtg.find(thresholdWrtg => wrtg > thresholdWrtg); 
  const qasPlacement = thresholdQas.find(thresholdQas => qasRange[0] >= thresholdQas);
  const aafPlacement = thresholdAaf.find(thresholdAaf => aafRange[0] >= thresholdAaf);
  localStorage.setItem(storageConfig.name.wrtgPlacement, wrtgPlacement);
  localStorage.setItem(storageConfig.name.qasPlacement, qasPlacement);
  localStorage.setItem(storageConfig.name.aafPlacement, aafPlacement);
  
  // return writing placement
  if (wrtgPlacement !== "undefined") {
    console.log (EnglishPlacementNative [wrtgPlacement][essy]);
  }

  // return math placement
  if (qasPlacement !== "undefined") {
    const thresholdArng = Object.keys(MathPlacement [qasPlacement]).reverse();
    const arngPlacement = thresholdArng.find(thresholdArng => arngRange[0] >= thresholdArng);
    console.log (MathPlacement [qasPlacement] [arngPlacement]);
  
    // return aaf math placement
    const thresholdAaf = Object.keys(UpperLevelMathPlacement [qasPlacement]).reverse();
    const aafPlacement = thresholdAaf.find(thresholdAaf => aafRange[0] >= thresholdAaf);
    console.log (UpperLevelMathPlacement [qasPlacement] [aafPlacement]);
  }

  //null if nothings found
  return null; 
}

//function to test eval button
function clickhandler () {
  accuplacer();
}

//function to get button and alert when clicked
function test() {
    document.getElementById("eval-btn").addEventListener("click", clickhandler); 
    
  }

export {
  test
}