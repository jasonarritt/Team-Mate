const { jest: requiredJest, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('should create a intern object', () => {
    const intern = new Intern('Jason', 1, 'j@mail.com', 'UNC');

    expect(intern.name).toBe('Jason');
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.anything());
})