const { jest: requiredJest, test } = require('@jest/globals');
const Engineer = require('../lib/Classes/Engineer');

test('should create a engineer object', () => {
    const engineer = new Engineer('Jason', 1, 'j@mail.com', 'jasonarritt');

    expect(engineer.teammateName).toBe('Jason');
    expect(engineer.teammateID).toEqual(expect.any(Number));
    expect(engineer.teammateEmail).toEqual(expect.stringContaining('@'));
    expect(engineer.engineerGithub).toEqual(expect.anything());
})

test('should return engineer name as Josh', () => {
    const engineer = new Engineer('Josh', 1, 'j@mail.com', 'jasonarritt');

    expect(engineer.getName()).toBe('Josh');
})

test('should return engineer employeeID as 10', () => {
    const engineer = new Engineer('Jason', 10, 'j@mail.com', 'jasonarritt');

    expect(engineer.getID()).toBe(10);
})

test('should return engineer email as email@email.net', () => {
    const engineer = new Engineer('Jason', 1, 'email@email.net', 'jasonarritt');

    expect(engineer.getEmail()).toBe('email@email.net');
})

test('should return engineer github as jarritt', () => {
    const engineer = new Engineer('Jason', 1, 'j@mail.com', 'jarritt');

    expect(engineer.getGithub()).toBe('jarritt');
})

test('should return engineer role as Engineer', () => {
    const engineer = new Engineer('Jason', 1, 'mail@mail.com', 'jasonarritt');

    expect(engineer.getRole()).toBe('Engineer');
})