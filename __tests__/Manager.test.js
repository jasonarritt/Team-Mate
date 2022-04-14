const { jest: requiredJest, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('should create a manager object', () => {
    const manager = new Manager('Jason');

    expect(manager.name).toBe('Jason');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(string));
    expect(manager.officeNumber).toEqual(expect.any(number));
})