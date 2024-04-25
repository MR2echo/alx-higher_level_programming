#!/usr/bin/node

const fs = require('fs');
const file = process.argb[2];

fs.readFile(file, 'utf-8', function (err, data) {
	if (err) {
		console.log(`An error occurred: ${err}`);
	}
	else {
		console.log(data);
	}
});
