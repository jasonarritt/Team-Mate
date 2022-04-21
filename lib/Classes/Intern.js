
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(teammateName, teammateID, teammateEmail, internSchool) {
        super(teammateName, teammateID, teammateEmail);
        
        this.internSchool = internSchool;
    }

    getSchool() { return this.internSchool; }

    getRole() { return 'Intern'}
}

module.exports = Intern;