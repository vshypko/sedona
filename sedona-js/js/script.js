(function() {

	var plus = document.querySelectorAll(".js-plus");
	var minus = document.querySelectorAll(".js-minus");
	var input = document.querySelectorAll(".counter-input");

	for (var i = 0; i < plus.length; i++) {
		plus[i].addEventListener("click", function(event, i) {
			event.preventDefault();
			if (parseInt(input[0].value) >= 0) {
				input[0].value = parseInt(input[0].value) + 1;
			}
			else {
				return false;
			}
		});
	}

	for (var i = 0; i < minus.length; i++) {
		minus[i].addEventListener("click", function(event, i) {
			event.preventDefault();
			if (parseInt(input[0].value) > 0) {
				input[0].value = parseInt(input[0].value) - 1;
			}
			else {
				return false;
			}
		});
	}

})();