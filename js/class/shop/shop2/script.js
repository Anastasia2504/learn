class HeaderBag {
  constructor(data) {
    this.total = data;
  }
  render() {
    let html = `<div class = "totalBag">
    <div class = "windowBag">${this.total}</div>
    <button class = "btn mybtn" id = "btnHeader"></button>
    </div> 
    `;
    let total = document.getElementById("total-bag");
    total.innerHTML = html;
  }
}
class Page {
  constructor() {
    this.good = [{
        srcImg: "dressP.jpg",
        name: "Dress 'Pink'",
        desk: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        count: 0
      },
      {
        srcImg: "dressgor.jpg",
        name: 'Dress "Polka dot"',
        desk: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        count: 0
      },
      {
        srcImg: "dress.jpeg",
        name: 'Dress "Evening"',
        desk: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        count: 0
      },


    ]
    this.total = 0;
    this.bag = [];
  }
  render() {
    let headerBag = new HeaderBag(this.total);
    headerBag.render();
    console.log(headerBag);
    let html = '';
    for (let i = 0; i < this.good.length; i++) {
      html += `
      <div class="card good" id="good1">
      <img src="${this.good[i].srcImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.good[i].name}</h5>
        <p class="card-text">${this.good[i].desk}</p>
        <button href="#" class="btn btn-primary mybtn plus" id = "btn - ${i}"><img src="bag.png" class="bag_img"></button>
        <div class="count">${this.good[i].count}</div>
      </div>
    </div>
      `
    }
    let node = document.getElementById('goods');
    node.innerHTML = html;

    for (let i = 0; i < this.good.length; i++) {
      let el = document.getElementById(`btn - ${i}`);
      el.onclick = (event) => {
        event.preventDefault();
        this.handleClick(i);

      };
    }
  }
  handleClick(index) {
    this.good[index].count++;
    this.bag.push(this.good[index]);
    this.sumGoods();
    console.log(this.bag);
    this.render();
  }
  sumGoods() {
    for (let i = 0; i < this.good.length; i++) {
      this.total += this.good[i].count;
    }
  }

}
let page = new Page();
page.render();

class Bag {
  constructor() {
    this.goods = [];
    let data = new Page();
    for (let i = 0; i < data.bag.length; i++) {
      this.goods.push(data.bag[i]);
    }
    console.log(this.goods);
  }
  render() {
    let html = `<div class = "bag" id = "bag"> <ul>`;
    for (let i = 0; i < this.goods.length; i++) {
      html += `<li>${this.goods[i]}</li>`;
    }
    html += `</div> </ul>`;
    let nodeBag = document.getElementById("contanier-bag");
    nodeBag.innerHTML = html;
  }

}
let bag = new Bag();