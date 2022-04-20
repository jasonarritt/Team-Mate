
const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/Classes/Engineer');
const intern = require('./lib/Classes/Intern');
const manager = require('./lib/Classes/Manager');

const {
    mainMenuQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
} = require('./lib/questions')




class TeamBuilder {
    constructor() {
        this.allManagers = [];
        this.allEmployees = [];
        this.allInterns = [];
    }

    async mainMenu() {

        const { menuChoice } = await inquirer.prompt(mainMenuQuestions);

        switch (menuChoice) {
            case 'Engineer':
                this.addEngineer();
                break;

            case 'Intern':
                this.addIntern();
                break;

            case 'Manager':
                this.addManager();

                break;

            case "I'm finished adding team members.":

                break;

            default:
                return;
        }

    }

    async addManager() {
        const { name, employeeID, email, officeNumber } = await inquirer.prompt(managerQuestions);

        const manager = new Manager(name, employeeID, email, officeNumber)
        this.allManagers.push(manager);
    }

    async addEngineer() {
        const { name, employeeID, email, github } = await inquirer.prompt(engineerQuestions);

        const engineer = new Engineer(name, employeeID, email, github)
        this.allEngineers.push(engineer);
    }

    async addIntern() {
        const { name, employeeID, email, school } = await inquirer.prompt(internQuestions);

        const intern = new Intern(name, employeeID, email, school)
        this.allInterns.push(intern);
    }

    init() {
        console.log("Welcome to Managers Mate!\n");
        
        this.mainMenu();
    }


}

const team1 = new TeamBuilder();

team1.init();