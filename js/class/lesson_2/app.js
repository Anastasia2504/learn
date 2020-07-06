class Counter {
  constructor(value, name) {
    this.state = {
      value,
      name
    }
  }

  render(node) {
    node.innerHTML = `
      <span class="badge badge-secondary">${this.state.value}</span>
      <button class="btn btn-primary">+</button>
      <button class="btn btn-primary">-</button>
      ${this.state.name}
    `;
  }
}

cnt1 = new