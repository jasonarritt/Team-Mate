const { jest: requiredJest, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('should create a engineer object', () => {
    const engineer = new Engineer('Jason');

    expect(engineer.name).toBe('Jason');
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.anything());
})