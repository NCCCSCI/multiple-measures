let evalBtn = document.getElementById("eval-btn");

evalBtn.addEventListener("click", function (evt) {
    let evalBox = document.getElementById("eval-box");
    let evalBoxStatus = evalBox.getAttribute('class');

    if (evalBoxStatus === 'eval-box hidden') {
        evalBox.setAttribute('class', 'eval-box');
    } else {
        evalBox.setAttribute('class', 'eval-box hidden');
    }
});

770