class Bag {
  constructor() {
    this.state = {
      value: 0,
      name: null,
    }
    this.goods = 3;
  }
  handleAdd() {
    console.log(2);
  }
  addGood() {
    for (let i = 0; i < this.goods; i++) {
      $('good').click(() => {
        handleAdd();
      })
    }

  }
}
let bag = new Bag();
bag.addGood();