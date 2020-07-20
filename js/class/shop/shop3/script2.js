class Page {
  constructor() {
    this.good = data;
    this.total = 0;
    this.bag = new Bag();
    this.state = [];
  }
  render() {
    let html = '';
    for (let i = 0; i < this.good.length; i++) {
      html += `
      <div class="good card" id="good1">
        <img src="${this.good[i].srcImg}" class="card-img-top" alt="...">
        <div class="card-text  card-body">
          <h5 class="card-title">${this.good[i].name}</h5>
          <p class="card-text">${this.good[i].desk}</p>
          <div class="sale" id="sale">$ ${this.good[i].sale}</div>
        </div>
        <div class="card-text  card-footer">
        <div class = "count" id = "count">${this.good[i].count}</div>
        <button type="button" class="btn btn-danger" id="btn - ${i}" ${this.getBtnAttrs(i)}>Добавить</button>
        </div>
      </div>
      `
      // <button href="#" class="btn btn-primary mybtn plus" id = "btn - ${i}"><img src="bag.png" class="bag_img"></button>
      // <div class="count">${this.good[i].count}</div>
    }

    let node = document.getElementById('goods');
    node.innerHTML = html;

    for (let i = 0; i < this.good.length; i++) {
      if (this.good[i].count > 0) {
        document.getElementById(`btn - ${i}`).innerText = "Заказать";
      }
      let el = document.getElementById(`btn - ${i}`);
      el.onclick = (event) => {
        event.preventDefault();
        if (this.good[i].count === 0) {
          this.handleAdd(i);
        }
      };
    }
    console.log(this.state);
  }

  getBtnAttrs(index) {
    if (this.good[index].count > 0) {
      return `data-toggle="modal" data-target="#exampleModal"`;
    } else {
      return "";
    }
  }

  handleAdd(index) {
    this.good[index].count++;
    this.bag.addGood(this.good[index]);
    this.state.push({
      number: index,
      state: !false
    });
    this.sumGoods();
    // console.log(this.bag);
    this.render();
  }
  sumGoods() {
    this.total = 0;
    for (let i = 0; i < this.good.length; i++) {
      this.total += this.good[i].count;
    }
  }

}

class Bag {
  constructor() {
    this.goods = [];
  }
  addGood(good) {
    this.goods.push(good);
    this.render();
  }
  sumPrice() {
    let sum = 0;
    for (let i = 0; i < this.goods.length; i++) {

      let total = +this.goods[i].sale * +this.goods[i].count;
      sum += total;
      console.log(this.goods[i].sale);
    }
    return sum;
  }
  render() {
    let html = `<div class="bag" id="bag"> <ul>`;
    for (let i = 0; i < this.goods.length; i++) {
      html += `<li>${this.goods[i].name} ----- $ ${this.goods[i].sale} ----------- <div class = "count borderNone" id = "count">${this.goods[i].count}</div></li>`;

    }
    html += `<div class="result" id="res">Итого: ----------- $ ${this.sumPrice()}</div>`;
    html += `</div> </ul>`;
    let nodeBag = document.getElementById("contanier-bag");
    nodeBag.innerHTML = html;
    // nodeGoods.style.display = 'none';
  }
}

let page = new Page();
page.render();