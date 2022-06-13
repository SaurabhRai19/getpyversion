const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');

// `who-to-greet` input defined in action metadata file
const nameToGreet = core.getInput('module-name');
console.log(`Module Name:  ${nameToGreet}!`);

const filepath = core.getInput('file-path');
console.log(`Module Name:  ${filepath}!`);

const file= fs.readFileSync(
    path.join(process.env.GITHUB_WORKSPACE, 'file.txt')
)

console.log(file);

const searchFull = (filename, text) => {

    return new Promise((resolve) => {
        
        const regEx = new RegExp(text, "i")
        const result = [];

        fs.readFile(`./file`+'.txt', 'utf8', function (err, contents) {
            console.log(err)
            let lines = contents.toString().split("\n");
            lines.forEach(line => {
                if (line && line.search(regEx) >= 0) {
                    console.log('found in file ', filename)
                    result.push(line)
                    console.log(line);        
                    
                }
            })
            console.log('finished search');
            
            resolve(result);
        })
    });
}

searchFull('file', nameToGreet)
//https://stackoverflow.com/questions/43378060/meaning-of-the-github-message-push-declined-due-to-email-privacy-restrictions