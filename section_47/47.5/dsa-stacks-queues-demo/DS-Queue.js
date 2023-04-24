class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.push(val);
  }
  dequeue(val) {
    return this.data.shift();
  }
}

function makePizza() {
  console.log("MAKING PIZZA!");
  bake([formDough(), getCheese()]);
  console.log("PIZZA IS DONE!");
}

function bake(...args) {
  console.log("BAKING", args);
  return "🍕";
}

function formDough() {
  console.log("FORMING DOUGH!");
  return "Here is your dough";
}
function getDough() {
  return "🍞";
}

function getCheese() {
  console.log("GETTING CHEESE!");
  return "🧀";
}

function start() {
  debugger;
  makePizza();
}

start();
