// reports the results of tests - shouldn't need to be modified

const testResults = document.getElementById("test-results");
const testResultTemplate = document.getElementById("test-result-template");

const PASS = "PASS";
const FAIL = "FAIL";

export function assert(test = "unknown", result = true) {
    const newResult = testResultTemplate.content.cloneNode(true);
    const div = newResult.querySelector("div");
    const dt = newResult.querySelector("dt");
    const dd = newResult.querySelector("dd");
    testResults.appendChild(newResult);
    dt.textContent = test;
    dd.textContent = PASS; // let's be optimistic
    if (!result) {
        dd.textContent = FAIL;
        div.classList.add("fail");
        return false;
    }
    return true;
}

