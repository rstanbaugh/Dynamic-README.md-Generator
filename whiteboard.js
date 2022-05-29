const promtContributor = answers => {
  console.log(`
=================
Add Project contributors
=================
`);

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
      answers.contributors.push(contributorData);
      if (contributorData.confirmAddContributor) {
        return promptContrbutor(contributorData);
      } else {
        return contributorData;
      }
    });
};
