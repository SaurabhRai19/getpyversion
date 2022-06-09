const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

// `who-to-greet` input defined in action metadata file
const nameToGreet = core.getInput('module-name');
console.log(`Module Name:  ${nameToGreet}!`);

const searchFull = (filename, text) => {

    return new Promise((resolve) => {
        
        const regEx = new RegExp(text, "i")
        const result = [];

        fs.readFile(`${filename}`+'.txt', 'utf8', function (err, contents) {
            console.log(err)
            let lines = contents.toString().split("\n");
            lines.forEach(line => {
                if (line && line.search(regEx) >= 0) {
                    console.log('found in file ', filename)
                    result.push(line)
                    
                    
                }
            })
            console.log('finished search');
            resolve(result);
        })
    });
}

//searchFull('file', 'Flask==')