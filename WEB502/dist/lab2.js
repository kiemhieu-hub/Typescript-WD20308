"use strict";
//1.Tạo type Product có các trường sau:
Object.defineProperty(exports, "__esModule", { value: true });
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
//2.Tạo mảng listProducts có các phần tử có kiểu Product - Nhập ít nhất 5 phần tử
let listProducts = [
    { name: 'Sản phẩm A', price: 3, sale: true, rate: Rate.low },
    { name: 'Sản phẩm B', price: 10, sale: false, rate: Rate.medium },
    { name: 'Sản phẩm C', price: 7, sale: true, rate: Rate.hight },
    { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
    { name: 'Sản phẩm E', price: 12, sale: false, rate: Rate.hight },
];
function addDes(product) {
    return product.map(product => ({ ...product, description: product.price > 5 ? 'Tốt' : 'Bình thường' }));
}
const ProWithDes = addDes(listProducts);
console.log(ProWithDes);
