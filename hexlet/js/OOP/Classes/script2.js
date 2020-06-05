// Класс
// Статические свойства и методы
class Money2 {
  constructor() {
    this.rates = {
      usd: {
        eur: 0.7,
      },
      eur: {
        usd: 1.2,
      },
    };
  }
}

class Money {
  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  // Определение статического свойства
  static rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };

  // Определение статического метода
  static setRate(from, to, value) {
    this.rates[from][to] = value;
    console.log(value);
  }
  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    } else {
      let newVal = this.constructor.rates[this.currency][newCurrency] * this.value;
      return new Money(newVal, newCurrency);
    }
  }
}
// Использование ровно такое же как и в примерах выше
let money = new Money(120);
let money2 = money.exchangeTo('eur');
Money.rates.usd.eur; // 0.7
Money.setRate('usd', 'eur', 0.7);
console.log(Money.rates.usd.eur);
Money.rates.usd.eur; // 0.8

// Изнутри объектов обращаться можно через this.constructor;

// Статики как и классы – всего лишь сахар над функциями. Но они становятся популярны, так как позволяют сделать код чище.
