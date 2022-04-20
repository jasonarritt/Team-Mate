const { jest: requiredJest, test } = require('@jest/globals');
const Employee = require('../lib/Classes/Employee');

test('should create a employee object', () => {
    const employee = new Employee('Jason', 1, 'j@mail.com');

    expect(employee.name).toBe('Jason');
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
})

test('should return employee name as Josh', () => {
    const employee = new Employee('Josh', 1, 'j@mail.com');

    expect(employee.getName()).toBe('Josh');
})

test('should return employeeID as 10', () => {
    const employee = new Employee('Jason', 10, 'j@mail.com');

    expect(employee.getID()).toBe(10);
})

test('should return employee email as email@email.net', () => {
    const employee = new Employee('Jason', 1, 'email@email.net');

    expect(employee.getEmail()).toBe('email@email.net');
})

test('should return role as Employee', () => {
    const employee = new Employee('Jason', 1, 'mail@mail.com');

    expect(employee.getRole()).toBe('Employee');
})