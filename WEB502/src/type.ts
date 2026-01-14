type Person = {
    name: string;
};

type Student = {
    age:number;
};

//union: 1 trong 2 la  ok
// ket hop & bao gom ca 2


//1. intersection types
type Employee = Person & Student;

const e1: Employee = {
    name: "noname",
    age:33,
};

// union |
function privateValue(value:string | number)   {
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
        
    }
}

privateValue("helo");
privateValue(3,14);

// 3 Type Casting  (as)
const value: unknown = "hello world";
(value as string).toUpperCase(); // error

// 4 Enum

enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Error = "ERROR",
}

enum Status2 {
  Pending, // 0
  Success, // 1
  Error, // 2
}

console.log(Status.Pending); //  "PENDING
console.log(Status2.Pending); //  0

//5. literal types
type birection = "up"| "down"| "left"| "right";

// 6. Generic Type (T): object, funtion, array, class
function identity<T>(value: T): T {
  return value;
}

identity<number>(2);
identity("hello");
identity(true);
identity<{ name: string }>({ name: "noname" });

type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};

// res product, category, user, order
const res1: ApiResponse<{ id: number; name: string }> = {
  code: 200,
  message: "ok",
  data: { id: 1, name: "noanme" },
};

type Category = { id: number; title: string };

const res2: ApiResponse<Category> = {
  code: 200,
  message: "ok",
  data: { id: 1, title: "chiu thua" },
};