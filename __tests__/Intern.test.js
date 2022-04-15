const { jest: requiredJest, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('should create a intern object', () => {
    const intern = new Intern('Jason', 1, 'j@mail.com', 'UNC');

    expect(intern.name).toBe('Jason');
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.anything());
})

test('should return intern name as Josh', () => {
    const intern = new Intern('Josh', 1, 'j@mail.com', 'UNC');

    expect(intern.getName()).toBe('Josh');
})

test('should return intern employeeID as 10', () => {
    const intern = new Intern('Jason', 10, 'j@mail.com', 'UNC');

    expect(intern.getID()).toBe(10);
})

test('should return intern email as email@email.net', () => {
    const intern = new Intern('Jason', 1, 'email@email.net', 'UNC');

    expect(intern.getEmail()).toBe('email@email.net');
})

test('should return intern github as jarritt', () => {
    const intern = new Intern('Jason', 1, 'j@mail.com', 'NC State');

    expect(intern.getSchool()).toBe('NC State');
})

test('should return intern role as Intern', () => {
    const intern = new Intern('Jason', 1, 'mail@mail.com', 'UNC');

    expect(intern.getRole()).toBe('Intern');
})