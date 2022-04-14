const { jest: requiredJest, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('should create a engineer object', () => {
    const engineer = new Engineer('Jason');

    expect(engineer.name).toBe('Jason');
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(string));
    expect(engineer.officeNumber).toEqual(expect.any(number));
})