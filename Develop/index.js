// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (required)',
            validate: gitInput => {
                if (gitInput) {
                    return true
                } else {
                    console.log('Please enter your GitHub username!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your email address!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter a title for your project!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of your project',
            validate: descInput => {
                if (descInput) {
                    return true
                } else {
                    console.log('Please enter a description!');
                    return false
                }
            }
        },  
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instuctions for the installation of your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines for this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is this project protected under? (required)',
            choices: ['BSD', 'MIT', 'GNU']
        },
        
    ])
};
// TODO: Create a function to write README file
function writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Congratulations! Your README has been successfully created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err)
    })
};

// Function call to initialize app
init();
