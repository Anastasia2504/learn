// Исключения
// Функция, которая может выбросить исключение
const readFile = (filepath) => {
  if (!isFileReadable(filepath)) {
    // throw – способ выбросить исключение
    throw new Error(`'${filepath}' is not readable`);
  }
  // ...
}

// Где-то в другом месте программы

const run = (filepath) => {
  try {
    // Функция, которая вызывает readFile. Возможно не напрямую, а через другие функции.
    // Для механизма исключений это не важно.
    openFile(filepath);
  } catch (e) {
    // Этот блок выполняется только в одном случае, если в блоке try было выброшено исключение
    showErrorToUser(e);
  }
  // Если тут будет код, он продолжит выполняться
}

// Сами исключения – это объекты Error

const e = new Error('Тут любой текст');
// throw e; // Исключение можно создать отдельно, а можно сразу же там, где используется throw

// Наследование классов
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }
}

let animal = new Animal("Мой питомец");

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  hide() {
    alert(`${this.name} прячется!`);
  }
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}
// Для того, чтобы наследовать класс от другого, мы должны использовать ключевое слово "extends" и указать название родительского класса перед {..}

// После extends разрешены любые выражения
function f(phrase) {
  return class {
    sayHi() { alert(phrase) }
  }
}

class User extends f("Привет") {}

new User().sayHi(); // Привет

// У стрелочных функций нет super

// Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, то автоматически создаётся такой «пустой» конструктор:

class Rabbit2 extends Animal {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(...args) {
    super(...args);
  }
}

// Error!
class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Не работает!
let rabbit = new Rabbit("Белый кролик", 10); // Error: this is not defined.

// Если коротко, то в классах-потомках конструктор обязан вызывать super(...), и (!) делать это перед использованием this.
// В наследующем классе соответствующая функция-конструктор помечена специальным внутренним свойством [[ConstructorKind]]:"derived".
// Когда выполняется обычный конструктор, он создаёт пустой объект и присваивает его this .
// Когда запускается конструктор унаследованного класса, он этого не делает. Вместо этого он ждёт, что это сделает конструктор родительского класса.

// Чтобы унаследовать от класса: class Child extends Parent
  // При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
// При переопределении конструктора:
  // Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
//При переопределении другого метода:
  // Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
// Внутренние детали:
  // Методы запоминают свой объект во внутреннем свойстве [[HomeObject]]. Благодаря этому работает super, он в его прототипе ищет родительские методы.
  // Поэтому копировать метод, использующий super, между разными объектами небезопасно.

// У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.

// Статические свойства и методы
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS

class Article2 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

class Article3 {
  static publisher = "Илья Кантор";
}

alert( Article.publisher ); // Илья Кантор