// back-end

// this is the configuration - where the scores are mapped to courses
// a similar approach can be used for much of the config data

// this is the same content as the accuPlacerConfig.js file
// it was renamed to avoid an issue with NetBeans - avoid using Config.js in the filename

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