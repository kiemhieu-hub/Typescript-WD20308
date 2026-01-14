"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stu1 = {
    id: 1,
    name: "noname",
    score: 9.9,
};
console.log("Student:", stu1);
const u1 = {
    id: 2,
    email: "u1@gmail.com",
};
const u2 = {
    id: 2,
    email: "u1@gmail.com",
    phone: "0123456789",
};
console.log("User 1:", u1);
console.log("User 2:", u2);
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
console.log("Add: ", add(3, 5));
console.log("Multiply: ", mul(4, 6));
function logStatus(status) {
    if (status === "loading")
        console.log("Đang tải...");
    if (status === "success")
        console.log("Thành công");
    if (status === "error")
        console.log("Có lỗi xảy ra");
}
logStatus("loading");
logStatus("success");
logStatus("error");
