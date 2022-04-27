function mathOptionGPA() {
    let mathOptionSelect = document.getElementById("mm-eng");
    let gpaOptionSelect = document.getElementById("mm-date");
    let calculusOption = document.getElementById("Calculus");
    let algebraIIIOption = document.getElementById("AlgebraIII");
    let algebraIIOption = document.getElementById("AlgebraII_Statistics");
    let preCalcOption = document.getElementById("Precalculus_Trigonometry");
    let mathPopup = document.getElementById("math-popup");
    let gpaOptionSelectValue;
    let mathOptionSelectValue;

    // gpa other popup box function
    gpaOptionSelect.addEventListener("input", function(evt) {
        gpaOptionSelectValue = gpaOptionSelect.value;
    });

    mathOptionSelect.addEventListener("input", function(evt) {
        gpaOptionSelectValue = gpaOptionSelect.value;
        mathOptionSelectValue = mathOptionSelect.value;
        // calculus, algebra iii - <2.0 -> prompt "select previous class"
        showHidePopup();
    });

    function showHidePopup() {
        if (gpaOptionSelectValue === "1.0-1.9" && ['Calculus', 'AlgebraIII'].includes(mathOptionSelectValue)) {
            mathPopup.classList.remove("hidden");
            // pre-calc, algebra ii - <3.0 -> places them into MATH 120 (no prompt)
        } else if ((gpaOptionSelectValue === "1.0-1.9") && (['Precalculus_Trigonometry', 'AlgebraII_Statistics'].includes(mathOptionSelectValue))) {
            mathPopup.setAttribute("class", "hidden");
        } else {
            mathPopup.setAttribute("class", "hidden");
        }
    }


}

// export the function so it can be imported in main.js
export {
    mathOptionGPA
};