// put all the tests for the module in a single file to make it easier to work with

// import the module you want to test
import { Config as EnglishConfig } from '../../config/mmenglish.js';

// write a function that will call the function you want to test
// this example is checking to ensure there is a config for both math and english
function testAccuPlacerConfig() {
    // this is the test code
    // it should only test one thing/function
    const keys = Object.keys(EnglishConfig);
    const result = keys.includes("English_Foundational_Fundamental") && keys.includes("Honors_or_College_Prep" && keys.includes("AP");
    // return a boolean - true means the test passed, false means the test failed
    return result;
}

// export the functions
export { testAccuPlacerConfig };
