// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores

const MathConfig = {
    AlgebraI: { 
		0: "Need Math AccuPlacer",
		.625: "Gateway Courses with Co-Req",
		.75: "MATH103N-MATH106N, MATH110N with Co-Req",
    },
	AlgebraII_Statistics: {
        0: "MATH Gateway Courses",
		.75: "MATH120N",
    },
	AlgebraIII: {
		.5: "MATH120N",
	},
	Precalculus_Trigonometry: {
		.0: "MATH120N",
		.75: "MATH210N"
	},
	Calculus: {
		.5: "MATH210N"
	}
}

export { MathConfig };