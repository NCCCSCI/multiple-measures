// put all the tests for the module in a single file to make it easier to work with

// import the module you want to test
import { MultipleMeasuresEnglish } from '../../modules/mmenglish.js';

// write a function that will call the function you want to test
// this example is checking to ensure there is a config for both math and english
function testAccuPlacerConfig() {
   const mmmTest = new MultipleMeasuresEnglish("Alvirne", 4, false, "English_Foundational_Fundamental");
    
    const recommendation = mmmTest.englishplacement();
    
    return (recommendation === "ENGL101N");
    /* // this is the test code
    // it should only test one thing/function
    const keys = Object.keys(MathConfig);
    const result = keys.includes("Calculus") && keys.includes("Precalculus_Trigonometry") && keys.includes("AlgebraIII") && keys.includes("AlgebraII_Statistics") && keys.includes("AlgebraI");
    // return a boolean - true means the test passed, false means the test failed
    return result; */
}

// export the functions
export { testAccuPlacerConfig };
