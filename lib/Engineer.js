const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        
        this.github = 'jasonarritt';
    }

}

module.exports = Engineer;