// front-end

// import the back-end code which performs the placement
import { MultipleMeasures } from '../modules/multiplemeasures.js';

// handles the placement determination for the math input
function doPlacement() {
    
    // event handler - executes when the math input value changes
    function place(e) {
        
        // get the value from the input, discard any leading or trailing spaces
        const valueStr = e.target.value.trim();
        
        // add validation!
        const score = parseInt(valueStr);

        // prepare to evaluate the score
        const accuPlacer = new MultipleMeasures(new Date(), "math", score);
        
        // use the placement method of the AccuPlacer to get the placement 
        const placement = accuPlacer.placement()
        
        // if a placement isn't found
        if (placement === "undefined") {
            placement = "unknown"; // advisor
        }
        
        // update the display
        placementElement.textContent = placement;
    }
    
    // set up access to the DOM
    const highSchoolElement = document.getElementById("highschool");
	const gpa = document.getElementById("gpa");
	const englishClassElement = document.getElementById("englishclass");
	const mathClassElement = document.getElementById("mathclass");
    const placementElement = document.getElementById("placement");
    
    // setup the event listener
    scoreElement.addEventListener("change", place);
}

// export the function so it can be imported in main.js
export { doPlacement }; 