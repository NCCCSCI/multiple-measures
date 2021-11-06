// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// minimum threshold for scores
const Config = {
    math: {
        0: "advisor",
        200: "MATH103N",
        400: "MATH110N + CoReq"
    },
    english: {
        0: "advisor",
        200: "ENGL099N"
    }
};

export { Config };