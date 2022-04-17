//window.print();

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
const GPA = localStorage.getItem(storageConfig.name.GPA);
if (GPA != 0){
document.getElementById("mm-gpa").textContent = GPA;}
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

//SAT Math Score Input
const satMath = localStorage.getItem(storageConfig.name.satMath).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("sat-math").textContent = satMath;

//SAT Critical Reading and Writing Score Input
const satReading = localStorage.getItem(storageConfig.name.satReading).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("sat-eng").textContent = satReading;



//Accuplacer Date Taken Input
const accuDate = localStorage.getItem(storageConfig.name.accuDate).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("acc-date").textContent = accuDate;

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

