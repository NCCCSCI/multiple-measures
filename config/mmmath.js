// module is using gpa percentage to calculate which math class
// module uses classs taken in high school as a key
// then it reverses the order of the scores listed
// then it looks for the first percentage listed here that is **LESS** than the
// gpa percentage. That's why the numbers are a little funky.

/* Example
 * A person who took Calculus in High School with a GPA of 2.0 on a 4.0 scale
 * would be recommended for MATH210 with Co-Req because gpa percentage will
 * calculate to .5 (that's 2.0/4.0) and the first percentage listed under
 * Calculus that's less than .5 is .49999
 */

// This is a better approach than looking for the first number that's greater
// than the calculated percentage, because the documentation provided by 
// admissions does not usually specify upper limits, only lower ones.

const MathConfig = {
    Calculus: {
        0: "N/A",
        .49999: "MATH210 - Calculus I"
    },
    Precalculus_Trigonometry: {
        0: "MATH120 - PreCalculus",
        .74999: "MATH210 - Calculus"
    },
    AlgebraIII: {
        0: "N/A",
        .49999: "MATH120 - PreCalculus"
    },
    AlgebraII_Statistics: {
        0: "MATH110 / MATH106 / MATH103",
        .74999: "MATH120 - PreCalculus"
    },
    AlgebraI: {
        0: "Needs to Take Math AccuPlacer",
        .63499: "MATH103 / MATH106 / MATH 110 with Co-Requisite",
        .74999: "MATH103 / MATH106 / MATH110"
    }
}

export { MathConfig };