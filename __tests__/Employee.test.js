const { jest: requiredJest, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('should create a employee object', () => {
    const employee = new Employee('Jason');

    expect(employee.name).toBe('Jason');
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    // expect(employee.officeNumber).toEqual(expect.any(number));
})