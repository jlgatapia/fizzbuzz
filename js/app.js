$(document).ready(function(){

	for (var i = 1; i <= 100; i++) {
		
		var output;
		if (i % 3 === 0 && i % 5 === 0) {
			output = 'fizzbuzz';
		}
		else if (i % 3 === 0) {
			output = 'fizz';
		}
		else if (i % 5 === 0) {
			output = 'buzz';
		}
		else {
			output = i;
		}

		$('body').append('<div>' + output + '</div>');
	}

});
