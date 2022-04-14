const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.officeNumber = 345;
    }
}

module.exports = Manager;