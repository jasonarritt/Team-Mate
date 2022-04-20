
// Main menu questions
mainMenuQuestions = [
    // Check adding employees
    {
        type: 'list',
        name: 'menuChoice',
        message: "Please choose the type of employee you want to add:",
        choices: ['Engineer', 'Intern', 'Manager', "I'm finished adding team members."]
    }
    
];

// Manager questions
managerQuestions = [
    // Get manager's name
    {
        type: 'text',
        name: 'name',
        message: "Please enter the team manager's name:",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the team manager!');
              return false;
            }
        }
    },
    // Get manager's employeeID
    {
        type: 'text',
        name: 'employeeID',
        message: "Please enter the team manager's employee ID:",
        validate: employeeIDInput => {
            if (employeeIDInput) {
              return true;
            } else {
              console.log('Please enter the employee ID of the team manager!');
              return false;
            }
        }
    },
    // Get manager's email
    {
        type: 'text',
        name: 'email',
        message: "Please enter the team manager's email:",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the email address of the team manager!');
              return false;
            }
        }
    },
    // Get manager's officeNumber
    {
        type: 'text',
        name: 'officeNumber',
        message: "Please enter the team manager's office number:",
        validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log('Please enter the office number of the team manager!');
              return false;
            }
        }
    }
];

// Engineer questions
engineerQuestions = [
    // Get engineer's name
    {
        type: 'text',
        name: 'name',
        message: "Please enter the engineer's name:",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of this engineer!');
              return false;
            }
        }
    },
    // Get engineer's employeeID
    {
        type: 'text',
        name: 'employeeID',
        message: "Please enter the engineer's employee ID:",
        validate: employeeIDInput => {
            if (employeeIDInput) {
              return true;
            } else {
              console.log('Please enter the employee ID number of this engineer!');
              return false;
            }
        }
    },
    // Get engineer's email
    {
        type: 'text',
        name: 'email',
        message: "Please enter the engineer's email:",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the email address of this engineer!');
              return false;
            }
        }
    },
    // Get engineer's github username
    {
        type: 'text',
        name: 'github',
        message: "Please enter the engineer's GitHub username:",
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter the github username of this engineer!');
              return false;
            }
        }
    }
];


// Intern questions
internQuestions = [
    // Get intern's name
    {
        type: 'text',
        name: 'name',
        message: "Please enter the intern's name:",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of this intern!');
              return false;
            }
        }
    },
    // Get intern's employeeID
    {
        type: 'text',
        name: 'employeeID',
        message: "Please enter the intern's employee ID:",
        validate: employeeIDInput => {
            if (employeeIDInput) {
              return true;
            } else {
              console.log('Please enter the employee ID number of this intern!');
              return false;
            }
        }
    },
    // Get intern's email
    {
        type: 'text',
        name: 'email',
        message: "Please enter the intern's email:",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter the email address of this intern!');
              return false;
            }
        }
    },
    // Get intern's github username
    {
        type: 'text',
        name: 'school',
        message: "Please enter the intern's school name:",
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter the school name of this intern!');
              return false;
            }
        }
    }
];



module.exports = {
    mainMenuQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
}