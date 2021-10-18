import { HighSchoolConfig } from '../config/mmhighschools.js';
export function populateHighSchoolSelector() {
    const highSchool = document.getElementById("highSchool");
    const names = Object.keys(HighSchoolConfig);
    for (const n of names) {
        const option = document.createElement("option");
        option.setAttribute("value", n);
        option.textContent = n.replace('_', ' ');
        highSchool.appendChild(option)
    }
}

export function boundYearGraduated() {
    const yearGraduated = document.getElementById("yearGraduated");
    const now = new Date();
    yearGraduated.setAttribute("min", now.getFullYear() - 20);
    yearGraduated.setAttribute("max", now.getFullYear() + 2);
    yearGraduated.value = now.getFullYear();
}

export function boundGPA() {
    const cumulativeGPA = document.getElementById("cumulativeGPA");
    let min = 10;
    let max = 0;
    for (const h in HighSchoolConfig) {
        const hs = HighSchoolConfig[h];
        min = Math.min(min, hs.Scale, hs.WScale);
        max = Math.max(max, hs.Scale, hs.WScale);
    }
    cumulativeGPA.setAttribute("min", min);
    cumulativeGPA.setAttribute("max", max);
}