
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(teammateName, teammateID, teammateEmail, engineerGithub) {
        super(teammateName, teammateID, teammateEmail);

        this.engineerGithub = engineerGithub;
    }

    getGithub() { return this.engineerGithub; }

    getRole() { return 'Engineer'; }

}

module.exports = Engineer;