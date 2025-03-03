const hello = require('./hello');

describe('My hello function', () => {
    test('works', () => {
        expect(hello.hello()).toEqual("Hello World from Saudi Arabia!");
    });
});
