// test data
const testData = require('./test-data');
const licenses = require('./utils/softwareLicenses.js');


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/file-utils.js');


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
      message: "Describe the installation process (if any): ",
      default: ""
    },
    {
      // not required
      type: "input",
      name: "usage",
      message: "What is this project usage?",
      default: ""
    },
    {
      // not required
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: licenses.map(a => a.fullName)
    },
    {
      // not required
      type: "input",
      name: "tests",
      message: "Please explain any testing procedures:"
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

const propmtContributor = answers => {
  console.log(`
=================
Add Project contributors
=================
`);
console.log('answers.contributors',answers.contributors);
  // If there's no 'projects' array property, create one
  if (!answers.contributors) {
    answers.contributors = [];
  }
  return inquirer
    .prompt([
      {
        // required
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this projects (Required)?",
        validate: contributorsInput => {
          if (contributorsInput) {
            return true;
          } else {
            console.log('You need to enter at least one project contributor!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddContributor',
        message: 'Would you like to enter another contributor?',
        default: false
      }
    ])
    .then(contributorData => {
      // let name = contributorData.contributors;
      answers.contributors.push(contributorData.contributors);
      
      if (contributorData.confirmAddContributor) {
        return propmtContributor(answers);
      } else {
        return answers;
      }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
  .then (answers => propmtContributor(answers))
  .then (projectInfo => generateMarkdown(projectInfo))
  .then(pageMarkDown => {
    return writeFile(pageMarkDown);
  })

//   console.log(generateMarkdown(testData));

// 
// let pageMarkDown = generateMarkdown(testData);
// console.log(pageMarkDown);
// writeFile(pageMarkDown);

  