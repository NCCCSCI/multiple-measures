function dates() {
    // VARIABLE DECLARATIONS
    // multiple measures
    let dateOptionsMM = document.querySelector(".mm > .date");
    let mathMMBlock = document.querySelector(".math-mm");
    let mathCoursePopup = document.getElementById("math-eval-popup");
    // SAT
    let satToAccRedirect = document.querySelector(".sat > .date");
    let accCollapse = document.getElementById('accuplacer');
    let satToAccCollapse;
    let satHelpPopup = document.getElementById("sat-help-popup");
    let satHelpNotTakenPopup = document.getElementById("sat-help-not-taken-popup");
    // accuplacer
    let dateOptionsAcc = document.querySelector(".acc > .date");
    let mathAccBlocks = document.querySelectorAll(".math-acc");
	let accHelpPopup = document.getElementById("acc-help-popup");
    let accHelpNotTakenPopup = document.getElementById("acc-help-not-taken-popup");
	let accHelp45Popup = document.getElementById("acc-help-4-5-popup");
	let allAccInputs = document.querySelectorAll("#accuplacer .score-input");


    // hide math course dropdown or accuplacer math score inputs if date is 4,5 years ago
    dateOptionsMM.addEventListener('input', function (evt) {
        if (dateOptionsMM.value === "4-5_Years_Ago") {
            mathMMBlock.classList.add("hidden");
            mathCoursePopup.classList.remove("hidden");
        } else {
            mathMMBlock.classList.remove("hidden");
            mathCoursePopup.classList.add("hidden");
        }
    });

    dateOptionsAcc.addEventListener('input', function (evt) {
        switch (dateOptionsAcc.value) {
            case "Not_Taken":
				accHelpPopup.classList.add("hidden");
				accHelpNotTakenPopup.classList.remove("hidden");
				accHelp45Popup.classList.add("hidden");
				allAccInputs.forEach(inputBlock => {
                    inputBlock.classList.add("hidden");
                });
				break;
            case "4-5_Years_Ago": accHelpPopup.classList.add("hidden");
			accHelpNotTakenPopup.classList.add("hidden");
			accHelp45Popup.classList.remove("hidden");
			allAccInputs.forEach(inputBlock => {
				inputBlock.classList.remove("hidden");
			});
			mathAccBlocks.forEach(inputBlock => {
                    inputBlock.classList.add("hidden");
                });
                break;
				case "More_Than_5_Years_Ago": accHelpPopup.classList.remove("hidden");
                accHelpNotTakenPopup.classList.add("hidden");
				accHelp45Popup.classList.add("hidden");
				allAccInputs.forEach(inputBlock => {
                    inputBlock.classList.add("hidden");
                });
                break;
            default: accHelpPopup.classList.add("hidden");
			accHelpNotTakenPopup.classList.add("hidden");
			accHelp45Popup.classList.add("hidden");
			allAccInputs.forEach(inputBlock => {
				inputBlock.classList.remove("hidden");
			});
			mathAccBlocks.forEach(inputBlock => {
                    inputBlock.classList.remove("hidden");
                });
                break;
        }
    });

    // SAT >5 years or not taken -- redirect
    satToAccRedirect.addEventListener('input', function (evt) {
        switch (satToAccRedirect.value) {
			case "Not_Taken": satHelpPopup.classList.add("hidden");
                satHelpNotTakenPopup.classList.remove("hidden");
                satToAccCollapse = new bootstrap.Collapse(accCollapse, {
                    toggle: true
                });
                satToAccCollapse();
                break;
            case "More_Than_5_Years_Ago": satHelpPopup.classList.remove("hidden");
                satHelpNotTakenPopup.classList.add("hidden");
                satToAccCollapse = new bootstrap.Collapse(accCollapse, {
                    toggle: true
                });
                satToAccCollapse();
                break;
            default: satHelpPopup.classList.add("hidden");
                satHelpNotTakenPopup.classList.add("hidden");
                break;
        }
    });

}

// export the function so it can be imported in main.js
export {
    dates
};