// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      // required
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a project title!');
          return false;
        }
      }
    },
    {
      // required
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      // not mandatory
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      // not required
      type: "input",
      name: "usage",
      message: "What is this project usage for?"
    },
    {
      // not required
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
    },
    {
      // required
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects (Required)?",
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('You need to enter at least one project contributor!');
          return false;
        }
      }
    },
    {
      // not required
      type: "input",
      name: "tests",
      message: "Is there a test included?"
    },
    {
      // not required
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? "
    },
    {
      // required
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      // not required
      type: "input",
      name: "email",
      message: "Please enter your email: "
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
  .then (answers => console.log(answers));
