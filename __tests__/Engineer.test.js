const Engineer = require("../lib/Engineer");

test('creates employee object', () => {
    const engineer = new Engineer('Jamie');

    expect(engineer.name).toEqual('Jamie');
});

test("gets employee's github username", () => {
    const engineer = new Engineer('Jamie');
    engineer.github = 'engineerhub'

    expect(engineer.getGithub()).toEqual('engineerhub')
});

test("gets employee's role", () => {
    const engineer = new Engineer('Jamie');
    
    expect(engineer.getRole()).toEqual('Engineer');
});