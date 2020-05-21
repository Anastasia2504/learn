// Конструктор
// объект
const fu = () => ({
  // ключ: значение
  items: [],
  // ключ addItem: значение function(good, count) {}
  addItem(good, count) {
    this.items.push({ good, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return _.sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return _.sumBy(this.items, (item) => item.good.price * item.count);
  },
});
let bag = fu();
bag.addItem();

// второй вариант
function fu2() {
  return {
    // ключ: значение
    items: [],
    // ключ addItem: значение function(good, count) {}
    addItem(good, count) {
      this.items.push({ good, count });
    },
    getItems() {
      return this.items;
    },
    getCount() {
      return _.sumBy(this.items, (item) => item.count);
    },
    getCost() {
      return _.sumBy(this.items, (item) => item.good.price * item.count);
    },
  };
}

let x = fu2();
x.addItem();

// тест на fu2
// let cart;
// beforeEach(() => {
//  cart = makeCart();
// });
// describe('makeCart', () => {
//   test('cart', () => { 
//     cart.addItem({ name: 'car', price: 3 }, 5);
//     cart.addItem({ name: 'house', price: 10 }, 2);
//     expect(cart.getItems().length).toEqual(2);
//     expect(cart.getCount()).toEqual(7);
//     expect(cart.getCost()).toEqual(35);
//   });
// });

function calcFu() {
  return {
    items: [],
    // ключ addItem: значение function(good, count) {}
    addItem(a, b) {
      for(let i = a; i < b; i++) {
        this.items.push(a + b);
      }

    },
    getCount() {
      return _.sum(this.items);
    },
    getLength() {
      return this.items.length;
    },
  }
}
let s = calcFu();
console.log(s.addItem(2, 7));
console.log(s.getCount());
console.log(s.getLength());