"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// - Hàm tính điểm trung bình (Return type + Arrow Function)
const tinhDTB = (toan, van, anh) => {
    return (toan + van + anh) / 3;
};
//goij hamf
console.log(tinhDTB(9, 7, 8));
const isEven = (n) => {
    return n % 2 === 0;
};
console.log(isEven(4));
console.log(isEven(7));
// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
const createU = (name, age, role = 'User') => {
    return { name, age, role };
};
console.log(createU("Hieeus", 19, "admin"));
console.log(createU("nam222")); // ko cos tuoi
const addPro = (list, ...newPro) => {
    return [...list, ...newPro];
};
//data
const product = [
    { name: "xuc xich", price: 999 },
];
const newList = addPro(product, { name: "nam kim cham", price: 666 }, { name: "keo kera", price: 888 });
console.log(newList);
