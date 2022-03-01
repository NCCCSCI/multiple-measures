// bring in the configuration (note the naming conventions)
import { satMathConfig } from '../config/satMath.js';

// this function gets the student's SAT Math score and checks it against the configuraton
function satMath() {

    // get the math sat score from the input
    const satMath = document.getElementById("satMath").value.trim();

    // get all the thresholds - properties of the configuration and reverse them
    const thresholds = Object.keys(satMathConfig).reverse();

    // find the first threshold the score is greater than
    const placement = thresholds.find(threshold => threshold < satMath);

    // "undefined" means the .find failed
    if (placement !== "undefined") {
        // return the value of the property (the placement)
        return satMathConfig[placement];
    }

    // if nothing is found - return null (cat comment)
    return null;
}

function go() {
    const satMath = satMath();
    const otherMath = satMath(); // maybe this is the accuplacer math
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    // this is the null coalescing operator, it will take the first value that's not null
    // so put the different options in order, separate them with ?? and you're all set
    const mathPlacement = satMath ?? otherMath;
    
    // update the recommendation at the bottom of the page
    document.getElementById("mathClass").textContent = mathPlacement;
}

// connect the event handler to the button
document.getElementById("btn-go").addEventListener("click", go);

export {
    go
};