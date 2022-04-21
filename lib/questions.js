
module.exports = {
    //Main menu question
    mainMenuQuestion: {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please select an option:',
        choices: ['Add Teammate', 'Build Team Page']
    },
    // Teammate questions
    addTeammateQuestions: {
        firstSeries: [
            // Check adding employees
            {
                type: 'list',
                name: 'teammateType',
                message: "Please choose the type of teammate you want to add:",
                choices: ['Engineer', 'Intern', 'Manager']
            },
            // Get teammate's name
            {
                type: 'text',
                name: 'teammateName',
                message: "Please enter the teammate's name:",
                validate: teammateNameInput => {
                    if (teammateNameInput) {
                    return true;
                    } else {
                    console.log('Please enter the name of this teammate!');
                    return false;
                    }
                }
            },
            // Get teammate's ID
            {
                type: 'text',
                name: 'teammateID',
                message: "Please enter the teammate's employee ID:",
                validate: teammateIDInput => {
                    if (teammateIDInput) {
                    return true;
                    } else {
                    console.log('Please enter the employee ID of this teammate!');
                    return false;
                    }
                }
            },
            // Get teammate's email
            {
                type: 'text',
                name: 'teammateEmail',
                message: "Please enter the teammate's email:",
                validate: teammateEmailInput => {
                    if (teammateEmailInput) {
                    return true;
                    } else {
                    console.log('Please enter the email address of this team mate!');
                    return false;
                    }
                }
            }
        ],

        engineerPrompt: [
            // Get engineer's github username
            {
                type: 'text',
                name: 'engineerGithub',
                message: "Please enter the engineer's GitHub username:",
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                    return true;
                    } else {
                    console.log('Please enter the github username of this engineer!');
                    return false;
                    }
                }
            }
        ],

        // Intern prompt
        internPrompt: [
            // Get intern's school name
            {
                type: 'text',
                name: 'internSchool',
                message: "Please enter the intern's school name:",
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                    return true;
                    } else {
                    console.log('Please enter the school name of this intern!');
                    return false;
                    }
                }
            }
        ],

        managerPrompt: [
            // Get manager's officeNumber
            {
                type: 'text',
                name: 'managerOfficeNumber',
                message: "Please enter the team manager's office number:",
                validate: managerOfficeNumberInput => {
                    if (managerOfficeNumberInput) {
                    return true;
                    } else {
                    console.log('Please enter the office number of the team manager!');
                    return false;
                    }
                }
            }
        ]
    }
}











// // Engineer questions






// module.exports = {
//     mainMenuQuestions,
//     managerQuestions,
//     engineerQuestions,
//     internQuestions
// }