
const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/Classes/Engineer');
const intern = require('./lib/Classes/Intern');
const manager = require('./lib/Classes/Manager');

const { mainMenuQuestions } = require('./lib/questions')




class TeamBuilder {
    constructor() {
        this.manager = [];
        this.allEmployees = [];
        this.allInterns = [];
    }

    async mainMenu() {

        const { menuChoice } = await inquirer.prompt(mainMenuQuestions);

        switch (menuChoice) {
            case 'Engineer':

            break;

            case 'Intern':

                break;

            case 'Manager':

                break;

            case "I'm finished adding team members.":

                break;

            default:
                return;
        }

    }

    init() {
        console.log("Welcome to Managers Mate!\n");
        
        this.mainMenu();
    }


}

const team1 = new TeamBuilder();

team1.init();