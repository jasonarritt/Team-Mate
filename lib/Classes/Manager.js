
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(teammateName, teammateID, teammateEmail, managerOfficeNumber) {
        super(teammateName, teammateID, teammateEmail);

        this.managerOfficeNumber = managerOfficeNumber;
    }

    getOfficeNumber() { return this.managerOfficeNumber; }

    getRole() { return 'Manager'; }
}

module.exports = Manager;