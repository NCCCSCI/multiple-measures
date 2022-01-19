// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const SATConfig = {
    Critical_Reading_and_Writing: {
		0: "Needs to Take English AccuPlacer",
		400: "ENGL101N with Co-Requisite Workshop",
		470: "ENGL101N"
    },
    Mathematics: {
        0: "CTP (MATH090)",
		460: "MATH103N with Co-Requisite, MATH106 with Co-Requisite",
		500: "MATH103N, MATH106N, or MATH100N with Co-Requisite",
		530: "MATH110N",
		570: "MATH120N",
		630: "MATH210N"
    }
}

export { SATConfig };