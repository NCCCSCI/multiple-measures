function addAnotherBtn() {

    let alladdAnotherBtns = document.querySelectorAll("button[id^='add-another-']");

    alladdAnotherBtns.forEach(item => {
        let i = 0;



        item.addEventListener("click", function (evt) {
            let itm = item;

            let bottomInput = itm.previousElementSibling;

            let cln = bottomInput.cloneNode(true);

            let clnChildId = cln.lastElementChild.id;
            let clnChildIdText = String(clnChildId);

            if (clnChildIdText.includes("_") === false) {
                let clnChildNewId = clnChildId + "_clone_" + ++i;
                cln.lastElementChild.setAttribute('id', clnChildNewId);
                cln.firstElementChild.setAttribute('for', clnChildNewId);
            } else {
                let originalChildId = itm.parentNode.firstElementChild.lastElementChild.id;
                let clnChildNewId = originalChildId + "_clone_" + ++i;
                cln.lastElementChild.setAttribute('id', clnChildNewId);
                cln.firstElementChild.setAttribute('for', clnChildNewId);
            }

            itm.parentNode.insertBefore(cln, itm);
        });


    });
}

// export the function so it can be imported in main.js
export { addAnotherBtn };