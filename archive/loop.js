hsSelect.addEventListener('input', function (evt) {
	// change input on hs select
	for (const hs in HSCourseEqConfig) { // loop through top level of HSCourseEqConfig object
		if (hsSelect.value === hs) { // compare selected high school name with high school key in object
			mathCourseOptions.forEach(mathOption => {
				for (const course in HSCourseEqConfig[hs]) { // loop through high school level of HSCourseEqConfig object: read
					if (mathOption.textContent !== course) {
						if (mathOption.value !== "Select_Math_Course") {
							mathOption.value = HSCourseEqConfig[hs][course];
							mathOption.setAttribute('id', HSCourseEqConfig[hs][course]);
							mathOption.textContent = course;
							/* right now the code is only printing out the last value, although i'm trying to get each option to print out its respective equivalent */
						}
					}
					// populate math options with object content
					// make something for in case there are multiple objects with the same equivalent
				}
			});
		}
	}
});