// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const EnglishConfig = {
	English_Foundational_Fundamental: {
        0: "Needs to Take English Accuplacer",
		.5: "ENGL101N with Co-Requisite Workshop",
		.813: "ENGL101N",
    },
    Honors_or_College_Prep: {
        0: "Needs to Take English AccuPlacer",
		.5: "ENGL101N with Co-Requisite Workshop",
		.75: "ENGL101N",
    },
	AP: {
		0: "Needs to Take English AccuPlacer",
		.5: "ENGL101N with Co-Requisite Workshop",
		.625: "ENGL101N",
	}
}

export { EnglishConfig };