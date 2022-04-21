
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Classes/Engineer');
const Intern = require('./lib/Classes/Intern');
const Manager = require('./lib/Classes/Manager');

const {
    // mainMenuQuestions,
    addTeammateQuestions
} = require('./lib/questions')




class TeamBuilder {
    constructor() {
        this.allEmployees = [];
        this.allEngineers = [];
        this.allInterns = [];
        this.allManagers = [];
    }


    async addTeammate() {
        const { teammateType, teammateName, teammateID, teammateEmail } = await inquirer.prompt(addTeammateQuestions.firstSeries);

        switch (teammateType) {
            case 'Engineer':
                const { engineerGithub } = await inquirer.prompt(addTeammateQuestions.engineerPrompt);

                const engineer = new Engineer(teammateName, teammateID, teammateEmail, engineerGithub);

                this.allEngineers.push(engineer);
                break;

            case 'Intern':
                const { internSchool } = await inquirer.prompt(addTeammateQuestions.internPrompt);

                const intern = new Intern(teammateName, teammateID, teammateEmail, internSchool);

                this.allInterns.push(intern);
                break;

            case 'Manager':
                const { managerOfficeNumber } = await inquirer.prompt(addTeammateQuestions.managerPrompt);

                const manager = new Manager(teammateName, teammateID, teammateEmail, managerOfficeNumber);

                this.allManagers.push(manager);
                break;

            case "I'm finished adding team members.":

                break;

            default:
                return;
        }
    }

    init() {
        console.log("Welcome to Managers Mate!\n");
        
        this.addTeammate();
    }


}

const team1 = new TeamBuilder();

team1.init();