function print() {
    let print = document.getElementById("print-btn");
    let accordionCollapses = document.querySelectorAll(".accordion-collapse");

    print.addEventListener('click', function (evt) { 
        accordionCollapses.forEach(collapse => {
            collapse.classList.add("show");
        });
        window.print();
    });

	window.addEventListener('beforeprint', function (evt) { 
        accordionCollapses.forEach(collapse => {
            collapse.classList.add("show");
        });
        window.print();
    });

	window.addEventListener('afterprint', function (evt) {
		accordionCollapses.forEach(collapse => {
				collapse.classList.remove("show");
		});
	});
}

export {
    print
};