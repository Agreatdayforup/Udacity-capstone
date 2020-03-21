const functions = require('./server')

test('Test User should be Patrick Cayer Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Patrick', 
        lastName: 'Cayer'
    });
});