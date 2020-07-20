class Animal { // Базовый класс, суперкласс 
  constructor(name, family) {
    this.name = name;
    this.family = family;
  }

  show() {
    console.log(this.family + " " + this.name);
  }

  run() {
    console.log(this.family + " " + this.name + " runs!");
  }
}


class Rabbit extends Animal { // Производный класс, подкласс
  static earCount = 2;
  color = "grey";

  constructor(name, age) {
    super(name, "Rabbit");
    this.age = age;
  }

  static greeting() {
    console.log("Hello from Rabbits!");
  }

  show() {
    console.log(this.family + " " + this.name + ` with ${Rabbit.earCount} ears`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, "Cat");
    this.color = color;
  }
}

class Zoo {
  animals = [];

  add(animal) {
    this.animals.push(animal);
  }

  show() {
    for (let animal of this.animals) {
      animal.show();
    }
  }

  run() {
    for (let animal of this.animals) {
      animal.run();
    }
  }
}

zoo = new Zoo();
let rabbit = new Rabbit("Mila", 3);
zoo.add(new Rabbit("Pinky", 18));
zoo.add(new Rabbit("Bunny", 5));
zoo.add(new Cat("Braset", "black"));

zoo.show();
Rabbit.earCount = 3;
zoo.show();
Rabbit.greeting();