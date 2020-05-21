// import makeStack from '../src/stack.js';

const stack = makeStack();
stack.isEmpty(); // true
stack.push(1); // (1)
stack.push(2); // (2, 1)
stack.push(3); // (3, 2, 1)
stack.isEmpty(); // false
stack.pop(); // 3. В стеке (2, 1)
stack.pop(); // 2. В стеке (1)
stack.pop(); // 1. В стеке пусто
stack.isEmpty(); // true

// Тестируем основную функциональность
// import makeStack from '../src/stack.js';

test("stack's main flow", () => {
  const stack = makeStack();
  // Добавляем два элемента в стек и затем извлекаем их
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

// Тестируем дополнительную функциональность
test('isEmpty', () => {
  const stack = makeStack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});
// начальное состояние стека
// состояние стека после добавления элементов
// состояние стека после извлечения всех элементов

// Пограничные случаи
test('pop in empty stack', () => {
  const stack = makeStack();
  // Вызов метода pop обёрнут в функцию, иначе матчер не сможет перехватить исключение
  expect(() => stack.pop()).toThrow();
});

const now = Date.now(); // текущий timestamp

test('first example', () => console.log(now));
test('second example', () => console.log(now));

let now;
// Запускается перед каждым тестом
beforeEach(() => {
  now = Date.now(); // текущий timestamp
});
test('first example', () => console.log(now));
test('second example', () => console.log(now));

