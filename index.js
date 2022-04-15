const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

// Manager questions
managerQuestionsArray = [
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
    },
    // Check for adding another employee
    {
        type: 'confirm',
        name: 'addEmployee',
        message: "Would you like to add another employee?",
        validate: addEmployeeIDInput => {
            if (addEmployeeIDInput) {
              return true;
            } else {
              console.log('Please enter the employee ID of the team manager!');
              return false;
            }
        }
    },
    // Get manager's officeNumber
    {
        type: 'list',
        name: 'employeeType',
        message: "Please choose the type of employee you want to add:",
        choices: ['Engineer', 'Intern', "I don't want to add another employee"]
    },
    
];

// Engineer questions
engineerQuestionsArray = [
    // Get engineer's name
    {
        type: 'text',
        name: 'name',
        message: "Please enter the engineer's name:"
    },
    // Get engineer's employeeID
    {
        type: 'text',
        name: 'employeeID',
        message: "Please enter the engineer's employee ID:"
    },
    // Get engineer's email
    {
        type: 'text',
        name: 'email',
        message: "Please enter the engineer's email:"
    },
    // Get engineer's officeNumber
    {
        type: 'text',
        name: 'github',
        message: "Please enter the engineer's GitHub username:"
    }
]