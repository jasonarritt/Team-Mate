
const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.officeNumber = 345;
    }

    getOfficeNumber() {

    }

    getRole() { return 'Manager'; }
}

module.exports = Manager;