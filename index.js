
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Classes/Engineer');
const Intern = require('./lib/Classes/Intern');
const Manager = require('./lib/Classes/Manager');
const generateHTML = require('./src/generateHTML');

const {
    mainMenuQuestion,
    addTeammateQuestions
} = require('./lib/questions')




class TeamBuilder {
    constructor() {
        this.allEmployees = [];
        this.allEngineers = [];
        this.allInterns = [];
        this.allManagers = [];
    };

    async mainMenu() {
        const { mainMenuChoice } = await inquirer.prompt(mainMenuQuestion);

        switch(mainMenuChoice) {
            case 'Add Teammate':
                this.addTeammate()
                break;

            case 'Build Team Page':
                this.createHTML();
                break;

            case 'Exit Team Mate':
                console.log('Exiting Team Mate!')
                return;

            default:
                return;
    
        }
    };

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

            default:
                return;
        }

        console.log(`\n${teammateName} has been successfully added to the team in the position of ${teammateType}.\n`);

        this.mainMenu();
    };

    async createHTML() {
        console.log('Entering createHTML');

        const file = await fs.promises.writeFile('./dist/index.html', generateHTML(this.allEngineers, this.allInterns, this.allManagers), 'utf8');

        console.log(`\nYour team index.html page has been successfully created and can be retrieved from the dist/ folder.`);

        return this.mainMenu();
    };

    init() {
        console.log("Welcome to Managers Mate!\n");
        
        this.mainMenu();
    };


};

const myTeam = new TeamBuilder();

myTeam.init();