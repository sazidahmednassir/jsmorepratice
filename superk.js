class Animal {
  constructor(color) {
    this.color = color;
  }

  printColor() {
    console.log(this.color);
  }
}

class Dog extends Animal {
  constructor(color, food) {
    super(color);
    this.food = food;
  }
  eating() {
    console.log(this.food);
  }
  display() {
    this.printColor();
    this.eating();
  }
}

const d = new Dog("red", "meat");

d.display();
d.eating();
