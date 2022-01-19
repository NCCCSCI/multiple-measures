// module is using gpa percentage to calculate which english class
// module uses classs taken in high school as a key
// then it reverses the order of the scores listed
// then it looks for the first percentage listed here that is **LESS** than the
// gpa percentage. That's why the numbers are a little funky.

/* Example
 * A person who took English_Foundational_Fundatmental in High School with a
 * GPA of 2.0 on a 4.0 scale would be recommended for ENGL101N with Co-Req
 * because gpa percentage will calculate to .5 (that's 2.0/4.0) and the first
 * percentage listed under English_Foundational_Fundamental that's less than .5
 * is .49999
 */

// This is a better approach than looking for the first number that's greater
// than the calculated percentage, because the documentation provided by 
// admissions does not usually specify upper limits, only lower ones.

const EnglishConfig = {
	English_Foundational_Fundamental: {
        0: "Needs to Take English Accuplacer",
		.49999: "ENGL101N with Co-Requisite Workshop",
		.81299: "ENGL101N",
    },
    Honors_or_College_Prep: {
        0: "Needs to Take English AccuPlacer",
		.49999: "ENGL101N with Co-Requisite Workshop",
		.74999: "ENGL101N",
    },
	AP: {
		0: "Needs to Take English AccuPlacer",
		.49999: "ENGL101N with Co-Requisite Workshop",
		.62499: "ENGL101N",
	}
}

export { EnglishConfig };