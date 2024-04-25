#!/usr/bin/node

const fs = require('fs');
const filePath = parcess.argv[2];
const string = parcess.argv[3];

function writeToFile(filePathe, string) {

	fs.writeFile(filePathe, string,  'utf8',  (error) => {

		if (erro) {
		  console.log(error);
		}

		console.log(`Content has been written to: ${filePath}`);


	})

}


writeToFile(filePathe, string);
