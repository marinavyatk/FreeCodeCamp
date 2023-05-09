// 1. Create a Basic JavaScript Object
let dog = {
  name: "Jupel",
  numLegs: 4,
};

// 2. Use Dot Notation to Access the Properties of an Object
let dog = {
  name: "Spot",
  numLegs: 4,
};
console.log(dog.name);
console.log(dog.numLegs);

// 3. Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has 4 legs.";
  },
};

dog.sayLegs();

// 4. Make Code More Reusable with the this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs();

// 5. Define a Constructor Function
function Dog() {
  this.name = "Bobik";
  this.color = "brown";
  this.numLegs = 4;
}

// 6. Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();

// 7. Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
const terrier = new Dog("Cake", "white");

// 8. Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
myHouse instanceof House;

// 9. Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  ownProps.push(property);
}

// 10. Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
