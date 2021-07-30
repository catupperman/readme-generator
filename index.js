//TO DO: a command-line application that accepts user input then prompted for information about my application repository
// A high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

//TODO: entering project title then, this is displayed as the title of the README

// TO DO: choose a license for my application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// TO DO: enter my GitHub username, then  this is added to the section of the README entitled Questions, with a link to my GitHub profile
// TODO: enter my email addres, then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// TODO: click on the links in the Table of Contents, then I am taken to the corresponding section of the README
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer")

function getLicenseBadge(license) {
    if (license === "MIT") {
        return `![MIT](https://img.shields.io/badge/License-MIT-blue)`
    } else if (license === "Appache 2.0"){
        return `![Appache 2.0](https://img.shields.io/badge/License-Appache%202.0-blue)`
    }
}

function getLicenseInfo(license) {
    if (license === "MIT") {
        return `"Copyright 2021 catupperman

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."`
    } else if (license === "Appache 2.0"){
        return `"Appache is the best"`
    }
}

function generateMD(responses) {
    return `
# ${responses.title}
${getLicenseBadge(responses.license)}
## Table of Contents
* [installation](#installation)
* [description](#description)
* [methods](#methods)
* [contributions](#contributions)
* [testing](#testing)
* [license](#license)


## Installation
> ${responses.installation}
## License
${getLicenseInfo(responses.license)}
            `


}
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your README?",
            name: "title"
        },
        {
            type: "input",
            message: "Please describe what your project is about.",
            name: "description"
        },
        {
            type: "input",
            message: "What was your installation process?",
            name: "installation"
        },
        {
            type: "input",
            message: "What methods did you use?",
            name: "methods"
        },
        {
            type: "input",
            message: "Contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "test instructions?",
            name: "testing"
        },
        {
            type: "list",
            message: "What license are you using?",
            name: "license",
            choices: ["MIT", "Appache 2.0", "BSD", "GPL"]
        }
    ])
    .then((answers) => {
        fs.writeFileSync(path.join(__dirname, "README.md"), generateMD(answers))
    });
