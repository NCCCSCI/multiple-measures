hsSelect.addEventListener('input', function (evt) {
	// change input on hs select
	/* console.log('hsSelect.value is ' + hsSelect.value); */
	for (const hs in HSCourseEqConfig) { // loop through top level of HSCourseEqConfig object
		if (hsSelect.value === hs) { // compare selected high school name with high school key in object
			mathCourseOptions.forEach(mathOption => {
				console.log('~ start ' + hs + ' equivalency loop ~');
				for (const course in HSCourseEqConfig[hs]) { // loop through high school level of HSCourseEqConfig object: read
					if (mathOption.textContent !== course) {
						console.log('mathOption.textContent: ' + mathOption.textContent + ', course:' + course);
						console.log('mathOption.textContent is ' + mathOption.textContent);
						console.log(HSCourseEqConfig[hs][course] + ' equivalent is ' + course);
						if (mathOption.value !== "Select_Math_Course") {
							mathOption.value = HSCourseEqConfig[hs][course];
							mathOption.setAttribute('id', HSCourseEqConfig[hs][course]);
							mathOption.textContent = course;
							console.log('new mathOption.value is ' + mathOption.value);
							/* right now the code is only printing out the last value, although i'm trying to get each option to print out its respective equivalent */
						}
					}
					// populate math options with object content
					// make something for in case there are multiple objects with the same equivalent
				}
				console.log('~ end ' + hs + ' equivalency loop ~\n\n');
				// console.log(mathSelect);
			});
		}
	}
});