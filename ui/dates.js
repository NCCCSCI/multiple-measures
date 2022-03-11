function dates() { // let engEvalClassName = "only-eval-eng";
    let dateOptionsMM = document.querySelector(".mm > .date");
    let satToAccRedirect = document.querySelector(".sat > .date");
    let dateOptionsAcc = document.querySelector(".acc > .date");
    let mathMMBlock = document.querySelector(".math-mm");
    let mathAccBlocks = document.querySelectorAll(".math-acc");
    let mathCoursePopup = document.getElementById("math-eval-popup");
    let accCollapse = document.getElementById('accuplacer');
	let satHelpPopup = document.getElementById("sat-help-popup");
    let satHelpNotTakenPopup = document.getElementById("sat-help-not-taken-popup");
	let accHelpPopup = document.getElementById("acc-help-popup");
    let accHelpNotTakenPopup = document.getElementById("acc-help-not-taken-popup");
	let accHelp45Popup = document.getElementById("acc-help-4-5-popup");
	let allAccInputs = document.querySelectorAll("#accuplacer .score-input");


    // hide math course dropdown or accuplacer math score inputs if date is 4,5 years ago
    dateOptionsMM.addEventListener('input', function (evt) {
        if (dateOptionsMM.value === "4-5_Years_Ago") {
            mathMMBlock.classList.toggle("hidden");
            mathCoursePopup.classList.toggle("hidden");
        } else {
            mathMMBlock.classList.toggle("hidden");
            mathCoursePopup.classList.toggle("hidden");
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
        let bsCollapse = new bootstrap.Collapse(accCollapse, {
            toggle: true
        });
        switch (satToAccRedirect.value) {
			case "Not_Taken": satHelpPopup.classList.add("hidden");
                satHelpNotTakenPopup.classList.remove("hidden");
                bsCollapse();
                break;
            case "More_Than_5_Years_Ago": satHelpPopup.classList.remove("hidden");
                satHelpNotTakenPopup.classList.add("hidden");
                bsCollapse();
                break;
            default: satHelpPopup.classList.add("hidden");
                satHelpNotTakenPopup.classList.add("hidden");
                break;
        }
    });

    // accuplacer not-taken
    // #hide-acc
    // acc not taken is hide acc and display that not taken

}

// export the function so it can be imported in main.js
export {
    dates
};