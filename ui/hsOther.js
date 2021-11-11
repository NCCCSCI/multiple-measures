function hsOther() {

    let hsOptionSelect = document.getElementById("input-mm-1");
    let otherOption = document.getElementById("Other");
    let gpaBlockPopup = document.getElementById("gpa-popup");
    let hsNamePopup = document.getElementById("hs-name");


// gpa other popup box function
    hsOptionSelect.addEventListener('input', function (evt) {
        let hsOptionSelectValue = hsOptionSelect.value;

        if (hsOptionSelectValue === 'Other') {
            gpaBlockPopup.setAttribute('class', 'gpa-popup-show');
            hsNamePopup.setAttribute('class', 'hs-name-show');

        } else {
            gpaBlockPopup.setAttribute('class', 'hidden');
            hsNamePopup.setAttribute('class', 'hidden');
        }
    });
    
}

// export the function so it can be imported in main.js
export { hsOther };