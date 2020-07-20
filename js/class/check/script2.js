class ToDo {
  constructor() {
    this.tasks = [];
    this.render();
  }
  render() {
    // generate html
    let html = '';
    console.log(this.tasks);
    for (let i = 0; i < this.tasks.length; i++) {
      html += `<li class = "task-li" id="task-id-${i}">${this.tasks[i].task} 
        <div class="del" id="del-${i}">\u2718</div>
        <div class="del label-pic" id="lab-${i}">&#x270e;</div>
        </li>`;
    }
    document.getElementById("tasks-list").innerHTML = html;
    document.getElementById("inp").value = "";

    // add event handlers
    let btn = document.getElementById("button-addon2");
    btn.onclick = () => {
      let inputValue = document.getElementById("inp").value;
      this.addTask(inputValue);
    };

    for (let i = 0; i < this.tasks.length; i++) {
      // complete btn
      let complete = document.getElementById(`task-id-${i}`);
      if (!this.tasks[i].state) {
        complete.onclick = () => {
          console.log(complete);
          this.markComplete(i);
        }
      } else {
        complete.classList.add("checkOn");
        complete.classList.remove("list-label");
      }

      // delete btn
      let del = document.getElementById(`del-${i}`);
      console.log(del);
      del.addEventListener("click", (ev) => {
        this.stopEvent(ev, i);
      }, false);

      // label
      let label = document.getElementById(`lab-${i}`);
      if (!this.tasks[i].label) {
        label.addEventListener("click", (ev) => {
          this.setLabel(ev, i);
        }, false);
      } else {
        complete.classList.add("list-label");
      }
    }
  }

  addTask(value) {
    console.log(value);
    if (value !== '') {
      this.tasks.push({
        task: value,
        state: false,
        label: false,
      });
    }
    this.render();
  }

  markComplete(index) {
    this.tasks[index].state = true;
    this.tasks[index].label = false;
    this.render();
  }

  stopEvent(ev, index) {
    ev.stopPropagation();
    this.tasks.splice(index, 1);
    this.render();
  }

  setLabel(ev, index) {
    ev.stopPropagation();
    this.tasks[index].label = true;
    this.render();
  }
}

let todo = new ToDo();