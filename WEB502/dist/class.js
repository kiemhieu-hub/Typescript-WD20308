"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. create class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        return `Name: ${this.name} -Age:${this.age}`;
    }
}
//2. khoi taoj doi tuongw moi
//  const p1 = new Person(1,2);   // error
const p2 = new Person("Nooo", 2); // ko bi loi
console.log(p2.showInfo());
const product1 = {
    name: "IP 14",
    price: 1000,
    isActive: true,
};
console.log(product1);
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
console.log(sum(1, 2));
const product2 = {
    name: "Noname1",
    price: 1234
};
console.log(product2);
const status = "success";
const userRes = {
    id: 1,
    name: "Noname",
    email: "email@gmail.com",
    token: "chiu thua"
};
