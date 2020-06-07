class Node {
  constructor(data, next=null) {
      this.data = data
      this.next = next
  }
}
let ari = new Node('Ari');
let malcolm = new Node('Malcolm', ari);
let pete = new Node('Pete', malcolm);
let ricky = new Node('Ricky', pete);
let sean = new Node('Sean', ricky);

class LinkedList {
  constructor() {
    // головной атрибут содержит указатель на первый узел нашего связного списка
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    // Вставка в начало связного списка
    // головной элемент становится вторым
    this.head = new Node(data, this.head); 
    this.length++;
  }

  remove_value(value) {
    // удаляет любое значение данных из связного списка

    // нам нужно сохранить указатель из удаляемого узла,
    // чтобы, удалив значение, мы могли просто изменить указатель!
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        if (prevNode) {
          // Устанавливаем значение next предыдущего узла равным значению next того узла,
          // который мы удаляем, таким образом исключая его из последовательности
          prevNode.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }
        currentNode = null;
        this.length--;
        return true;
      }
      // переходим к следующим узлам
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  iterate() {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
  
  search(data) {
    let idx = 0
    let node = this.head
    while (node) {
      if (node.data === data) return idx
      node = node.next
      idx += 1
    }
    return -1
  }
}

let thankUNext = new LinkedList();
thankUNext.insert('Ari');
thankUNext.insert('Malcolm');
thankUNext.insert('Pete');
thankUNext.insert('Ricky');
thankUNext.insert('Sean');

// thankUNext.remove_value('Ricky');