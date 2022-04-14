const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
        
        this.school = 'UNC Coding Bootcamp';
    }

}

module.exports = Intern;