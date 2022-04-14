
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
        
        this.school = 'UNC Coding Bootcamp';
    }

    getSchool() {

    }

    getRole() { return 'Intern'}
}

module.exports = Intern;