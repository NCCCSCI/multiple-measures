// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const EnglishConfig = {
    English_Foundational: {
        .5: "Needs English Accuplacer",
		.813: "ENGL101N",
    },
    Honors_College_Prep: {
        .5: "Needs English AccuPlacer",
		.75: "ENGL101N",
    },
	AP: {
		.5: "Needs English AccuPlacer",
		.625: "ENGL101N",
	}
}

export { EnglishConfig };