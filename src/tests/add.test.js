const add = (a, b) => a + b;

const generateGreeting = name => `Hello ${name}!`;

test("should add two nos", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("generate Greeting", () => {
  const greeting = generateGreeting("Mark");
  expect(greeting).toBe("Hello Mark!");
});
