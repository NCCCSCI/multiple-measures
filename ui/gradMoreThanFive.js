function gradMoreThanFive() {

    let yearSelect = document.getElementById("input-mm-3");
	let engEvalClassName = "only-eval-eng";
    let yearOptions = document.querySelectorAll("#input-mm-3 > option");
    let mathInputBlock = document.getElementById("input-mm-6-block");

    // gpa other popup box function
	yearOptions.forEach(option => {
		option.addEventListener('input', function (evt) {
			if (option.classList.contains("only-eval-eng")) {
				mathInputBlock.classList.add('hidden');
			} else {
				mathInputBlock.classList.remove('hidden');
			}
		});
	});
}
// why doesn't this work
// export the function so it can be imported in main.js
export {
    gradMoreThanFive
};
