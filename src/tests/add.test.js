const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `hello ${name}!`;


test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
}); 

test('should return greeting with name', () => {
    const result = generateGreeting('bob');
    expect(result).toBe('hello bob!')
});

test('should return greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('hello anonymous!')
})