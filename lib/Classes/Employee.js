
class Employee {
    constructor(name, employeeID, email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }

    getName() { return this.name; }

    getID() { return this.employeeID; }

    getEmail() { return this.email; }

    getRole() { return 'Employee'; }
}

// let employee1 = new Employee();

// console.log(employee1.getRole());

// console.log(employee1.getName());
module.exports = Employee;