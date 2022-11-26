function speedDetector(speed) {
	let points = (speed - 70) / 5;
	if (speed <= 70) {
		console.log("Ok");
	} else if (points > 12) {
		console.log("License supended");
	} else {
		console.log(`Points: ${points}`);
	}
}

speedDetector(142);
speedDetector(71);
speedDetector(80);
speedDetector(90);
speedDetector(60);
speedDetector(129);
speedDetector(130);
