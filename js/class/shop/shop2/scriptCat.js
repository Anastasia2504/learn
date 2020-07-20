class Good {
  constructor(good) {
    this.good = good;
  }

  render(node) {
    node.innerHTML = `
    <div class="card good" id="good1">
      <img src="${this.good.srcImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.good.name}</h5>
        <p class="card-text">${this.good.desk}</p>
        <button href="#" class="btn btn-primary mybtn plus"><img src="bag.png" class="bag_img"></button>
        <div class="count">${this.good.count}</div>
      </div>
    </div>
    `;
    let btn = node.getElementsByTagName("button")[0];
    btn.onclick = () => this.handleClick(node);
  }

  // TODO: неправильно передававть node здесь
  handleClick(node) {
    this.good.count++;
    // TODO: как получить доступ к bag???
    //this.bag.push(this.good[index]);
    //console.log(this.bag);
    this.render(node);
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
  }
}