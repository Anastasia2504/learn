class ToDo {
  constructor() {
    this.tasks = [];
    this.stateDiv = false;
    this.stateCross = false;
    this.render();
  }
  render() {
    // let inputValue = document.getElementById("inp").value;
    let btn = document.getElementById("button-addon2");
    // document.getElementById("tasks-contanier").appendChild("li");
    btn.onclick = () => {
      this.addTask();
    };
    let li = document.getElementsByTagName('li');
    let complete = document.getElementsByClassName("complete");
    for (let i = 0; i < complete.length; i++) {
      complete[i].onclick = null;
      if (this.tasks[i].state === false) {
        complete[i].onclick = () => {
          this.markComplete(complete[i], i);
        }
        console.log(this.tasks[i].state);
      }

    }
    for (let i = 0; i < complete.length; i++) {
      let cross = document.getElementsByClassName("cross");
      cross[i].innerText = `\u2718`;
      cross[i].addEventListener("click", stopEvent, false);
    }

  }
  addTask() {
    let inputValue = document.getElementById("inp").value;
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      let li = document.createElement('li');
      let div = document.createElement('div');
      let div2 = document.createElement('div');
      div.className = 'check';
      div2.className = 'cross';
      div.id = 'check';
      li.className = 'complete';
      li.innerHTML = inputValue;
      document.getElementById("tasks-list").appendChild(li);
      li.prepend(div);
      li.prepend(div2);
      this.tasks.push({
        task: inputValue,
        state: false
      });
      console.log(this.tasks);
      this.render();
      document.getElementById("inp").value = "";
    }
  }


  // li.id = `${this.getId(li)}`;
  markComplete(tag, index) {
    tag.classList.add('checkOn');
    let div = document.getElementsByClassName("check");
    let txt = document.createTextNode(`\u2714`);
    div[index].appendChild(txt);
    this.tasks[index] = true;
    console.log(this.tasks[index]);
    // div.innerText = "&#x2714";
    // &#x2714;
  }

}


let todo = new ToDo();