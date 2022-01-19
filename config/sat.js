// module is using sat score in specific section to calculate which english 
// and math class to recommend
// module uses section of SAT as key
// then it reverses the order of the scores listed
// then it looks for the first score listed here that is **LESS** than the
// gpa percentage. That's why the numbers are a little funky.

/* Example
 * A person who scored 420 in the Critical_Reading_and_Writing section of the 
 * SATs would be recommended for ENGL101N with Co-Req because  the first
 * score listed under Critical_Reading_and_Writing that's less than 420
 * is 400
 */

// This is a better approach than looking for the first number that's greater
// than the calculated percentage, because the documentation provided by 
// admissions does not usually specify upper limits, only lower ones.

const SATConfig = {
    Critical_Reading_and_Writing: {
		0: "Needs to Take English AccuPlacer",
		400: "ENGL101N with Co-Requisite Workshop",
		469: "ENGL101N"
    },
    Mathematics: {
        0: "CTP (MATH090)",
		459: "MATH103N with Co-Requisite, MATH106 with Co-Requisite",
		499: "MATH103N, MATH106N, or MATH100N with Co-Requisite",
		529: "MATH110N",
		569: "MATH120N",
		629: "MATH210N"
    }
};

export { SATConfig };