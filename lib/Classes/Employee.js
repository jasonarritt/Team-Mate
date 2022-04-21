
class Employee {
    constructor(teammateName, teammateID, teammateEmail) {
        this.teammateName = teammateName;
        this.teammateID = teammateID;
        this.teammateEmail = teammateEmail;
    }

    getName() { return this.teammateName; }

    getID() { return this.teammateID; }

    getEmail() { return this.teammateEmail; }

    getRole() { return 'Employee'; }
}

// let employee1 = new Employee();

// console.log(employee1.getRole());

// console.log(employee1.getName());
module.exports = Employee;