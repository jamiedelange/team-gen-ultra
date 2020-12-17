const Manager = require("../lib/Manager");

test('creates employee object', () => {
    const manager = new Manager('Jamie');

    expect(manager.name).toEqual('Jamie');
});

test("gets employee's office number", () => {
    const manager = new Manager('Jamie');
    manager.officeNumber = 840
    expect(manager.getOffice()).toEqual(840);
});

test("gets employee's role", () => {
    const manager = new Manager('Jamie');
    
    expect(manager.getRole()).toEqual('Manager');
});