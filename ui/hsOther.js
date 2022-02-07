function hsOther() {

    let hsOptionSelect = document.getElementById("input-mm-1");
    let otherOption = document.getElementById("Other");
    let gpaBlockPopup = document.getElementById("gpa-popup");
    let hsNamePopup = document.getElementById("hs-name");
    let gpaInputBlock = document.getElementById("input-mm-3-block");


    // gpa other popup box function
    hsOptionSelect.addEventListener('input', function (evt) {
        let hsOptionSelectValue = hsOptionSelect.value;

        if (hsOptionSelectValue === 'Other') {
            gpaBlockPopup.setAttribute('class', 'gpa-popup-show');
            hsNamePopup.setAttribute('class', 'hs-name-show');
            gpaInputBlock.setAttribute('class', 'input-block hidden');

        } else {
            gpaBlockPopup.setAttribute('class', 'hidden');
            hsNamePopup.setAttribute('class', 'hidden');
            gpaInputBlock.setAttribute('class', 'input-block');
        }
    });

}

// export the function so it can be imported in main.js
export {
    hsOther
};
