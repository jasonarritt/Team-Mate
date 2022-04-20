const { jest: requiredJest, test } = require('@jest/globals');
const Manager = require('../lib/Classes/Manager');

test('should create a manager object', () => {
    const manager = new Manager('Jason', 1, 'j@mail.com', 'D-3256');

    expect(manager.name).toBe('Jason');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.anything());
})

test('should return manager name as Josh', () => {
    const manager = new Manager('Josh', 1, 'j@mail.com', 'D-3256');

    expect(manager.getName()).toBe('Josh');
})

test('should return manager employeeID as 10', () => {
    const manager = new Manager('Jason', 10, 'j@mail.com', 'D-3256');

    expect(manager.getID()).toBe(10);
})

test('should return manager email as email@email.net', () => {
    const manager = new Manager('Jason', 1, 'email@email.net', 'D-3256');

    expect(manager.getEmail()).toBe('email@email.net');
})

test('should return manager officeNumber as C-1325', () => {
    const manager = new Manager('Jason', 1, 'j@mail.com', 'C-1325');

    expect(manager.getOfficeNumber()).toBe('C-1325');
})

test('should return manager role as Manager', () => {
    const manager = new Manager('Jason', 1, 'mail@mail.com', 'D-3256');

    expect(manager.getRole()).toBe('Manager');
})