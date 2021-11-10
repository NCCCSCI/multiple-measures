// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const SATConfig = {
    Critical_Reading_and_Writing: {
		0: "Needs to Take English AccuPlacer",
		400: "ENGL101 with Co-Requisite Workshop",
		470: "ENGL101N"
    },
    Mathematics: {
        0: "CTP (MATH090)",
		460: "MATH103 with Co-Requisite, MATH106 with Co-Requisite",
		500: "MATH103, MATH106, or MATH100 with Co-Requisite",
		530: "MATH110",
		570: "MATH120",
		630: "MATH210"
    }
}

export { SATConfig };