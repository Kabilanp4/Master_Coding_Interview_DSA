function User(name) {
  this.name = name;
}
User.prototype.name = "kabil";
console.log("Prototype", User.name);
// User.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// const u1 = new User("Kabilan");
// const u2 = new User("Alex");

// u1.sayHi();
// u2.sayHi();
