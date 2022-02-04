const oralsList = require('./oralsList');

test('each object contains a name property', () => {
    expect(oralsList[0].name).toBe('Letairis');
});