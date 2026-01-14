"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e1 = {
    name: "noname",
    age: 33,
};
// union |
function privateValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
privateValue("helo");
privateValue(3, 14);
// 3 Type Casting  (as)
const value = "hello world";
value.toUpperCase(); // error
// 4 Enum
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
})(Status || (Status = {}));
var Status2;
(function (Status2) {
    Status2[Status2["Pending"] = 0] = "Pending";
    Status2[Status2["Success"] = 1] = "Success";
    Status2[Status2["Error"] = 2] = "Error";
})(Status2 || (Status2 = {}));
console.log(Status.Pending); //  "PENDING
console.log(Status2.Pending); //  0
// 6. Generic Type (T): object, funtion, array, class
function identity(value) {
    return value;
}
identity(2);
identity("hello");
identity(true);
identity({ name: "noname" });
// res product, category, user, order
const res1 = {
    code: 200,
    message: "ok",
    data: { id: 1, name: "noanme" },
};
const res2 = {
    code: 200,
    message: "ok",
    data: { id: 1, title: "chiu thua" },
};
