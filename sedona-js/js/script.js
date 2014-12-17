(function() {

	var plus = document.querySelectorAll(".js-plus");
	var minus = document.querySelectorAll(".js-minus");
	var input = document.querySelectorAll(".counter-input");

	for (var i = 0; i < plus.length; i++) {

		plus[i].addEventListener("click", function(event) {
			event.preventDefault();
			var inputer = this.parentNode.querySelector(".counter-input");

			if (parseInt(inputer.value) >= 0) {
				inputer.value = parseInt(inputer.value) + 1;
			}
			else {
				return false;
			}
		});

		minus[i].addEventListener("click", function(event) {
			event.preventDefault();
			var inputer = this.parentNode.querySelector(".counter-input");

			if (parseInt(inputer.value) > 0) {
				inputer.value = parseInt(inputer.value) - 1;
			}
			else {
				return false;
			}
		});
	}

})();