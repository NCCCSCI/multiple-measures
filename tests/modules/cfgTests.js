// put all the tests for the module in a single file to make it easier to work with

// import the module you want to test
import { Config as AccuPlacerConfig } from '../../config/accuPlacer.js';

// write a function that will call the function you want to test
// this example is checking to ensure there is a config for both math and english
function testAccuPlacerConfig() {
    // this is the test code
    // it should only test one thing/function
    const keys = Object.keys(AccuPlacerConfig);
    const result = keys.includes("math") && keys.includes("english");
    // return a boolean - true means the test passed, false means the test failed
    return result;
}

// export the functions
export { testAccuPlacerConfig };
