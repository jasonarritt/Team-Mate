
const inquirer = require('inquirer');
class Employee {
    constructor(name = '') {
        this.name = name;
        this.employeeID = 1;
        this.email = 'email@email.com';
    }

    getName() {
        inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'Please enter employee name:'
        })
        .then(({ name }) => {
            this.Employee = new Employee(name);
          });
    }

    getID() {
        inquirer
        .prompt({
            type: 'text',
            name: 'employeeID',
            message: 'Please enter employee ID number:'
        })
        .then(({ employeeID }) => {
            this.Employee = new Employee(employeeID);
          });
    }

    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: 'Please enter employee email:'
        })
        .then(({ email }) => {
            this.Employee = new Employee(email);
          });
    }

    getRole() { return 'Employee'; }
}

let employee1 = new Employee();

console.log(employee1.getRole());

// console.log(employee1.getName());
module.exports = Employee;