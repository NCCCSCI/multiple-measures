//window.print();

import {storageConfig} from "../config/global.js";


// get the math placement
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const stName = localStorage.getItem(storageConfig.name.stName);
if (stName != '') {
document.getElementById("input-name").textContent = "Student Name: "+stName;}
else{
document.getElementById("input-name").textContent = "Student Name: Not entered";}

const stID = localStorage.getItem(storageConfig.name.stID);
if (stID != '') {
document.getElementById("input-id").textContent = "Student ID: "+stID;}
else{
document.getElementById("input-id").textContent = "Student ID: Not entered"}


const hsName = localStorage.getItem(storageConfig.name.hsName).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-mm-2").textContent = "Name of High School: "+hsName;


const hsYear = localStorage.getItem(storageConfig.name.hsYear).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-mm-3").textContent = "Year Graduated: "+hsYear;

const GPA = localStorage.getItem(storageConfig.name.GPA);
if (GPA != 0){
document.getElementById("input-mm-4").textContent = "Cumulative GPA: "+GPA;}
else{
document.getElementById("input-mm-4").textContent = "Cumulative GPA: Not entered";}

const hsEnglish = localStorage.getItem(storageConfig.name.hsEnglish).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-mm-5").textContent = "Highest English Course Taken: "+hsEnglish;


const hsMath = localStorage.getItem(storageConfig.name.hsMath).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-mm-6").textContent = "Highest Math Course Taken: "+hsMath;



const satDate = localStorage.getItem(storageConfig.name.satDate).replace(/_+/g, ' ').replace("Select","Not entered");

document.getElementById("input-sat-1").textContent = "Date taken: "+satDate;

const satMath = localStorage.getItem(storageConfig.name.satMath).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-sat-2").textContent = "SAT Math Score: "+satMath;


const satReading = localStorage.getItem(storageConfig.name.satReading).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-sat-3").textContent = "SAT Critical Reading and Writing Score: "+satReading;


const accuDate = localStorage.getItem(storageConfig.name.accuDate).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-1").textContent = "Date taken: "+accuDate;

const wrtgPlacement = localStorage.getItem(storageConfig.name.wrtgPlacement).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-2").textContent = "English Score (WRTG): "+wrtgPlacement;

const essy = localStorage.getItem(storageConfig.name.essy).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-3").textContent = "English Score (ESSY): "+essy;

const arng = localStorage.getItem(storageConfig.name.arng).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-4").textContent = "Math Score (ARNG): "+arng;

const qas = localStorage.getItem(storageConfig.name.qas).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-5").textContent = "Math Score (QAS): "+qas;

const aaf = localStorage.getItem(storageConfig.name.aaf).replace(/_+/g, ' ').replace("Select","Not entered");
document.getElementById("input-acc-6").textContent = "Math Score (AAF): "+aaf;

