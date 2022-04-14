
const inquirer = require('inquirer');
class Employee {
    constructor(name = '') {
        this.name = name;
        this.employeeID = 1;
        this.email = 'email@email.com';
    }

    getName() {

    }

    getID() {

    }

    getEmail() {

    }

    getRole() { return 'Employee'; }
}

module.exports = Employee;