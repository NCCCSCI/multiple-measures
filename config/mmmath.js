// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores

const MathConfig = {
    Calculus: {
		.5: "MATH210 - Calculus I"
	},
	Precalculus_Trigonometry: {
		0: "MATH120 - PreCalculus",
		.75: "MATH210 - Calculus"
	},
	AlgebraIII: {
		.5: "MATH120 - PreCalculus"
	},
	AlgebraII_Statistics: {
		0: "MATH110 / MATH106 / MATH103",
		.75: "MATH120 - PreCalculus"
	},
	AlgebraI: {
		0: "Needs to Take Math AccuPlacer"
		.635: "MATH110 / MATH106 / MATH 103 with Co-Requisite",
		.75: "MATH110 / MATH106 / MATH103"
	}
}

export { MathConfig };