// Bai1
type Student = {
  id: number;
  name: string;
  score: number;
};

const stu1: Student ={
    id:1,
    name: "noname",
    score: 9.9,
} 
console.log("Student:",stu1);


// Bai2
interface User {
  id: number;
  email: string;
  phone?: string;
}

const u1:User = {
    id:2,
    email: "u1@gmail.com",
};
const u2:User = {
    id:2,
    email: "u1@gmail.com",
    phone: "0123456789",
};

console.log("User 1:", u1);
console.log("User 2:", u2);

// Bai3
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => a + b;
const mul: Calculate = (a, b) => a * b;

console.log("Add: ", add(3,5));
console.log("Multiply: ",mul(4,6));



// Bai4
type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  if (status === "loading") console.log("Đang tải...");
  if (status === "success") console.log("Thành công");
  if (status === "error") console.log("Có lỗi xảy ra");
}

logStatus("loading");
logStatus("success");
logStatus("error");