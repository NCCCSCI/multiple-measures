import { Config as AccuPlacerConfig } from '../../config/accuPlacer.js';

function testAccuPlacerConfig() {
    const keys = Object.keys(AccuPlacerConfig);
    const result = keys.includes("math") && keys.includes("english");
    return result;
}

export { testAccuPlacerConfig };