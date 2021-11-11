function mathOptionGPA() {

    let mathOptionSelect = document.getElementById("input-mm-5");
	let gpaOptionSelect = document.getElementById("input-mm-3");
    let calculusOption = document.getElementById("Calculus");
	let algebraIIIOption = document.getElementById("AlgebraIII");
	let algebraIIOption = document.getElementById("AlgebraII_Statistics");
	let preCalcOption = document.getElementById("Precalculus_Trigonometry");
    let mathPopup = document.getElementById("math-popup");
    // let hsNamePopup = document.getElementById("hs-name");


// gpa other popup box function
	mathOptionSelect.addEventListener('input', function (evt) {
		let gpaOptionSelectValue = gpaOptionSelect.value;
        let mathOptionSelectValue = mathOptionSelect.value;

		// calculus, algebra iii - <2.0 -> prompt "select previous class"
        if (gpaOptionSelectValue === '1.0-1.9' && mathOptionSelectValue === 'Calculus' || 'AlgebraIII') {
            mathPopup.setAttribute('class', 'math-popup-show');
		// pre-calc, algebra ii - <3.0 -> places them into MATH 120 (no prompt)
        } else if (gpaOptionSelectValue === '1.0-1.9' || '2.0-2.9' && mathOptionSelectValue === 'Precalculus_Trigonometry' || 'AlgebraII_Statistics') {
			console.log("Place into MATH 120");
		} else {
            mathPopup.setAttribute('class', 'hidden');
        }

    });
    
}

// export the function so it can be imported in main.js
export { mathOptionGPA };