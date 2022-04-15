const { jest: requiredJest, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('should create a manager object', () => {
    const manager = new Manager('Jason', 1, 'j@mail.com', 'D-3256');

    expect(manager.name).toBe('Jason');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.anything());
})

