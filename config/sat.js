// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const SATConfig = {
    English: {
		0: "Need English AccuPlacer",
		400: "****SOME VALUE ****",
		470: "ENGL101N, ENGL101N w/ CoReq",
    },
    Honors_College_Prep: {
        0: "Need Math AccuPlacer",
		460: "MATH103-106 w/ Co-Req or CTP",
		500: "MATH103-106, MATH100 w/ Co-Req",
		530: "MATH Gateway Courses",
		570: "MATH120N",
		630: "MATH210N"
    }
}

export { EnglishConfig };