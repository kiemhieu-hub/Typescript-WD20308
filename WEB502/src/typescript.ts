let message: string = "Hello TypeScript";

//1.core types: numm , string , boolean
let myName: string = "noname"; //chuoi ki tu
const age: number = 36;
const isMarri:boolean = true;
console.log(myName);


//2. types inference suy dienex ra kieu dieu lieu
let count = 10;
// count = "20";// sai errror
console.log(count);



//3.cores types : object
let product:{
    id:number;
    title:string;
    cc:number;
    isAs:boolean
}={
    id:1,
    title:"ip11",
    cc:22,
    isAs:true
}
console.log(product);


//4. cores types: array number[]
let numbers: number[] = [1,2,3,4,"6"];
let names: string[] = ["noname","abc","xyz"]

//5. Special Types: tuple
let tuple: [string, number] = ["Alice", 25];
// Lỗi nếu sai kiểu hoặc độ dài
console.log(tuple);


//7. Type: Union và Literal Type
//Union Type: Cho phép một biến có thể thuộc nhiều kiểu khác nhau.
let result: number | string;
result = 42; // Hợp lệ
result = "Success"; // Hợp lệ
result = true; // Lỗi
//Literal Type: Chỉ định giá trị cụ thể mà biến có thể nhận.
let status: "success" | "error" | "loading";
status = "success"; // Hợp lệ
status = "failed"; // Lỗi


//8. Null và Undefined
let value: string | null = null;
let score: number | undefined = undefined;
//vd
let status: "active" | "inactive" | "pending";
status = "suc";
status = "active";
//vd2
const data:{
    id:number;
    title:string;
    des: string | null;
    timeL?: number | undefined;
}={
    id:1,
    title:"tp",
    des:"noooo",
    timeL:123,
}
