// bring in the assert function which checks and reports the results
import { assert } from './lib.js';

// import your tests here - avoid using config in filenames, it caused issues with NetBeans 8.2
import { testAccuPlacerConfig } from './modules/cfgTests.js';
import { pass, fail } from './modules/test.js';

// add your tests here
// each test has a name and the function name (note there are no parenthesis)
const tests = [
    {name: "a test that will pass",
        fn: pass},
    {name: "a test that will fail",
        fn: fail},
    {name: "test config has all 5 math classes",
        fn: testAccuPlacerConfig}
];

// run the tests
export function runTests() {
    // the progress bar may not be very useful, but sometimes it's fun to watch
    const progressBar = document.getElementById("progress-bar");
    progressBar.value = 0;
    progressBar.max = tests.length;
    
    // loop though the array of tests, calling each function and reporting the results
    // update the progress bar
    tests.forEach(t => {
        assert(t.name, t.fn());
        progressBar.value++;
    });
}