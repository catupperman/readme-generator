//TO DO: a command-line application that accepts user input then prompted for information about my application repository
// A high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer")

// TO DO: choose a license for my application from a list of options, then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function getLicenseBadge(license) {
    if (license === "MIT") {
        return `![MIT](https://img.shields.io/badge/License-MIT-blue)`
    } else if (license === "Appache 2.0"){
        return `![Appache 2.0](https://img.shields.io/badge/License-Appache%202.0-blue)`
    } else if (license === "BSD"){
        return `![BSD](https://img.shields.io/badge/License-BSD-blue)`
    }  else {
        return `![BSD](https://img.shields.io/badge/License-GPL-blue)`
    }
}

function getLicenseInfo(license) {
    if (license === "MIT") {
        return `"Copyright 2021
        
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."`
    } else if (license === "Appache 2.0"){
        return `"Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        
        http://www.apache.org/licenses/LICENSE-2.0
        
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License."`
    } else if (license === "BSD"){
        return `"Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."`
    } else {
        return `"This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
        
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
        
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <http://www.gnu.org/licenses/>."`
    }
}

// TODO: click on the links in the Table of Contents, then I am taken to the corresponding section of the README
//TODO: entering project title then, this is displayed as the title of the README
function generateMD(responses) {
    return `
    # ${responses.title}
## Table of Contents
* [description](#description)
* [installation](#installation)
* [methods](#methods)
* [contributions](#contributions)
* [testing](#testing)
* [license](#license)
* [contact](#contact)


## Description of Project
> ${responses.description}
## Installation
> ${responses.installation}
## Methods Used
> ${responses.methods}
## Contributions
> ${responses.contributions}
## Testing Process
> ${responses.testing}
## License
${getLicenseBadge(responses.license)}
Copyright (C) 2021 ${responses.username}
${getLicenseInfo(responses.license)}
## Contact
> "github.com/"${responses.username}
> "email: " ${responses.email}
> "Prefered Contact: " ${responses.contact}
            `
}

// TO DO: enter my GitHub username, then  this is added to the section of the README entitled Questions, with a link to my GitHub profile
// TODO: enter my email addres, then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
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
        },
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What's your email address?",
            name: "email"
        },
        {
            type: "list",
            message: "What is your preferred method of contact?",
            name: "contact",
            choices: ["Email", "Text", "Owl"]
        }
    ])
    .then((answers) => {
        fs.writeFileSync(path.join(__dirname, "README.md"), generateMD(answers))
    });
