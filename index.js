// FizzBuzz Implementation in Javascript
// Author: Calcaware

const fs = require('fs');

var i = 1;
while (true) {
	
	var result = ((i % 3 == 0) && (i % 5 == 0)) ? "FizzBuzz"
		: (i % 3 == 0) ? "Fizz"
			: (i % 5 == 0) ? "Buzz"
				: i.toString();

	console.log(result);
	fs.appendFileSync("fizzbuzz.txt", result + "\n");

	i++;
}
