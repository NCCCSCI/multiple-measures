import {storageConfig} from "../config/global.js";


// get the math placement
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

//Student Name Input
const stName = localStorage.getItem(storageConfig.name.stName);
if (stName != '') {
document.getElementById("input-name").textContent = stName;}
else{
document.getElementById("input-name").textContent = "Not entered";}
//Student ID Input
const stID = localStorage.getItem(storageConfig.name.stID);
if (stID != '') {
document.getElementById("input-id").textContent = stID;}
else{
document.getElementById("input-id").textContent = "Not entered";}



//HighSchool Name Input
const hsName = localStorage.getItem(storageConfig.name.hsName).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("mm-hsname").textContent = hsName;

//HighSchool Year Graduated Input
const hsYear = localStorage.getItem(storageConfig.name.hsYear).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("mm-date").textContent = hsYear;
//GPA Input
const GPA = localStorage.getItem(storageConfig.name.gpaText);
const GPAScale = localStorage.getItem(storageConfig.name.GPAScale);
const GPAType = localStorage.getItem(storageConfig.name.GPAType);

if (GPA != 0){
document.getElementById("mm-gpa").textContent = GPA + "  out of  "+ GPAScale + GPAType;}
else{
document.getElementById("mm-gpa").textContent = "Not entered";}

//Highest English Course Taken Input 
const hsEnglish = localStorage.getItem(storageConfig.name.hsEnglish).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("mm-eng").textContent = hsEnglish;

//Highest Math Course Taken Input
const hsMath = localStorage.getItem(storageConfig.name.hsMath).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("mm-math").textContent = hsMath;



//SAT Date Taken Input
const satDate = localStorage.getItem(storageConfig.name.satDate).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("sat-date").textContent = satDate;

//Hiding SAT elements if skipped (not Taken)
if(satDate == "Not Taken"){
    document.getElementById("sat-math-label").style.display = 'none';
    document.getElementById("sat-eng-label").style.display = 'none';
}
else{

//SAT Math Score Input
const satMath = localStorage.getItem(storageConfig.name.satMath).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("sat-math").textContent = satMath;

//SAT Critical Reading and Writing Score Input
const satReading = localStorage.getItem(storageConfig.name.satReading).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("sat-eng").textContent = satReading;
    }



//Accuplacer Date Taken Input
const accuDate = localStorage.getItem(storageConfig.name.accuDate).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-date").textContent = accuDate;

//Hiding Accuplacer elements if skipped (Not Taken)
if(accuDate == "Not Taken"){
    document.getElementById("acc-wrtg-label").style.display = 'none';
    document.getElementById("acc-wrtg").style.display = 'none';

    document.getElementById("acc-essy-label").style.display = 'none';
    document.getElementById("acc-essy").style.display = 'none';

    document.getElementById("acc-arng-label").style.display = 'none';
    document.getElementById("acc-arng").style.display = 'none';

    document.getElementById("acc-qas-label").style.display = 'none';
    document.getElementById("acc-qas").style.display = 'none';

    document.getElementById("acc-aaf-label").style.display = 'none';
    document.getElementById("acc-aaf").style.display = 'none';

}
else{



//Accuplacer English Writing Conventions(WRTG) Score Input
const wrtg = localStorage.getItem(storageConfig.name.wrtg).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-wrtg").textContent = wrtg;

//Accuplacer English Writeplacer (ESSY) Score Input
const essy = localStorage.getItem(storageConfig.name.essy).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-essy").textContent = essy;

//Accuplacer Math Score Arithmetic (ARNG) Input
const arng = localStorage.getItem(storageConfig.name.arngRange).replace(","," - ").replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-arng").textContent = arng;

//Accuplacer Math Score QR-Algebra-Stats (QAS) Input
const qas = localStorage.getItem(storageConfig.name.qasRange).replace(","," - ").replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-qas").textContent = qas;

//Accuplacer Math Score Advanced Algebra & Functions (AAF) Input
const aaf = localStorage.getItem(storageConfig.name.aafRange).replace(","," - ").replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-aaf").textContent = aaf;


//Evaluation Box
const mmUWMath = localStorage.getItem(storageConfig.name.sRecommendMath);
document.getElementById("mmUWMath").textContent = mmUWMath;

const mmUWEng = localStorage.getItem(storageConfig.name.sRecommendEnglish);
document.getElementById("mmUWEng").textContent = mmUWEng;

const mmWMath = localStorage.getItem(storageConfig.name.wRecommendMath);
document.getElementById("mmWMath").textContent = mmWMath;

const mmWEng = localStorage.getItem(storageConfig.name.wRecommendEnglish);
document.getElementById("mmWEng").textContent = mmWEng;

const satMath = localStorage.getItem(storageConfig.name.mathPlacement);
document.getElementById("satMath").textContent = satMath;

const satEng = localStorage.getItem(storageConfig.name.readingPlacement);
document.getElementById("satEng").textContent = satEng;

const accEng = localStorage.getItem(storageConfig.name.wrtgPlacement);
document.getElementById("accEng").textContent = accEng;

const accMath = localStorage.getItem(storageConfig.name.arngPlacement);
document.getElementById("accMath").textContent = accMath;

const accAaf = localStorage.getItem(storageConfig.name.arngPlacement);
document.getElementById("accAaf").textContent = accAaf;

}


//Conditionals for skipped parts

//SAT
if(satDate == "Not Taken"){
    document.getElementById("satMath").textContent = "SAT Test Not taken";
    document.getElementById("satEng").textContent = "SAT Test Not taken";
}else{
    if(satDate == "More Than 5 Years Ago"){
    document.getElementById("satMath").textContent = "Outdated (Score more than 5 years older)";
    document.getElementById("satEng").textContent = "Outdated (Score more than 5 years older)";
}
}
//Accuplacer
if(accuDate == "Not Taken"){
    document.getElementById("accEng").textContent = "Accuplacer Test Not taken";
    document.getElementById("accMath").textContent = "Accuplacer Test Not taken";
    document.getElementById("accAaf").textContent = "Accuplacer Test Not taken";
}else{  if(accuDate == "More Than 5 Years Ago"){
    document.getElementById("accEng").textContent = "Outdated (Score more than 5 years older)";
    document.getElementById("accMath").textContent = "Outdated (Score more than 5 years older)";
    document.getElementById("accAaf").textContent = "Outdated (Score more than 5 years older)";
}

}
//GPA weighted or not
if(GPAType == ' (Unweighted)'){
    document.getElementById("mmWMath-row").style.display = 'none';
    document.getElementById("mmWEng-row").style.display = 'none';}
    else{

if(GPAType == ' (Weighted)'){
    document.getElementById("mmUWMath-row").style.display = 'none';
    document.getElementById("mmUWEng-row").style.display = 'none';
}}

