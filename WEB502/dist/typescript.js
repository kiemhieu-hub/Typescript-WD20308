"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello TypeScript";
//1.core types: numm , string , boolean
let myName = "noname"; //chuoi ki tu
const age = 36;
const isMarri = true;
console.log(myName);
//2. types inference suy dienex ra kieu dieu lieu
let count = 10;
// count = "20";// sai errror
console.log(count);
//3.cores types : object
let product = {
    id: 1,
    title: "ip11",
    cc: 22,
    isAs: true
};
console.log(product);
//4. cores types: array number[]
let numbers = [1, 2, 3, 4, "6"];
let names = ["noname", "abc", "xyz"];
//5. Special Types: tuple
let tuple = ["Alice", 25];
// Lỗi nếu sai kiểu hoặc độ dài
console.log(tuple);
//7. Type: Union và Literal Type
//Union Type: Cho phép một biến có thể thuộc nhiều kiểu khác nhau.
let result;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
result = true; // Lỗi
//Literal Type: Chỉ định giá trị cụ thể mà biến có thể nhận.
let status;
status = "success"; // Hợp lệ
status = "failed"; // Lỗi
//8. Null và Undefined
let value = null;
let score = undefined;
//vd
let status;
status = "suc";
status = "active";
//vd2
const data = {
    id: 1,
    title: "tp",
    des: "noooo",
    timeL: 123,
};
