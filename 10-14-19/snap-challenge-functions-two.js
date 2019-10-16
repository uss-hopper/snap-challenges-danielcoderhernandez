window.onload = function() {
	weightConverter();
};

function weightConverter(valNum) {
	document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

