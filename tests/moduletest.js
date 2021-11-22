// front-end

// import the back-end code which performs the placement
import { MultipleMeasuresEnglish } from '../modules/mmenglish.js';


let gobttn = document.getElementById("gobttn");

function generatePlacement(e) {
	let highschool = document.getElementById("highschool").value;
	let score = document.getElementById("score").value;
	let rec = document.getElementById("recommendation");
	
	const MultipleMeasuresEnglish = new MultipleMeasuresEnglish(highschool, score, true, "AP");
	
	const placement = MultipleMeasuresEnglish.englishplacement();
	
	rec.textContent = placement;
}

gobttn.addEventListener("click", generatePlacement);