const fs = require('fs');
var scores = [];
for(r = 0; r <= 25; r++) {
	console.clear();
	console.log(`This may take a while depending on your device... [${r}/25]`);
	run();
}

function run() {
	startTime = Date.now();
	for(i = 0; i <= 1000000; i++) {
		i.toString(2);
	}
	endTime = Date.now();
	score = endTime - startTime;
	scores.push(score);
}
fs.writeFile('score.txt', `Your score is ${Math.round(median(scores))}!`);

function median(values) {
	values.sort(function(a, b) {
		return a - b;
	});
	var half = Math.floor(values.length / 2);
	if(values.length % 2)
		return values[half];
	else
		return (values[half - 1] + values[half]) / 2.0;
}
