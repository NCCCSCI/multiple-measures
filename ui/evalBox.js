function evalBox() {

    let evalBtn = document.getElementById("eval-btn");
    let allInputs = document.querySelectorAll(".accordion > input, select");

// evaluate button / evaluation box popup function
    evalBtn.addEventListener("click", function (evt) {
        let evalBox = document.getElementById("eval-box");
        let evalBoxStatus = evalBox.getAttribute('class');

        if (evalBoxStatus === 'eval-box hidden') {
            evalBox.setAttribute('class', 'eval-box');
        }
    });

// when any of the inputs change, hide the box again
    allInputs.forEach(item => {
        item.addEventListener("input", function (evt) {
            let evalBox = document.getElementById("eval-box");
            let evalBoxStatus = evalBox.getAttribute('class');
            // console.log("evalBoxStatus: " + evalBoxStatus);

            /*if (evalBoxStatus === 'eval-box') {
             evalBox.setAttribute('class', 'eval-box hidden');
             }*/
        });
    });
}

// export the function so it can be imported in main.js
export { evalBox };