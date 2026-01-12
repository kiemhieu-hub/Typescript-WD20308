//1. create class
 class Person {
    name: string;
    age: number;

    constructor(name:string , age: number){
        this.name= name;
        this.age = age;
    }
    showInfo(){
        return `Name: ${this.name} -Age:${this.age}`
    }
 }

 //2. khoi taoj doi tuongw moi
//  const p1 = new Person(1,2);   // error
 const p2 = new Person("Nooo",2) // ko bi loi
 console.log(p2.showInfo());

 //II.Interface
interface IProduct {
    name: string;
    price: number;
    isActive: boolean;
}

const product1: IProduct = {
    name: "IP 14",
    price: 1000,
    isActive: true,
};
console.log(product1);


//II.2 interface cho function 
interface SumFunction {
    (a: number , b:number): number;
}
const sum: SumFunction = (a,b )=> {
    return a+b;
};
sum(1,2)

console.log(sum(1, 2));


//III type object
type TProduct = {
    name:string;
    price:number;
};
const product2 : TProduct ={
    name:"Noname1",
    price:1234
};console.log(product2);


//III.2 type voi union
type Status = "pending" | "success" | "error";

const status : Status= "success";

type Description = string | null;

type TProduct2 = {
  name: string;
  price: number;
  description: Description;
};

type TBlog = {
  title: string;
  description: Description;
};



//III.3 type ket hop voi object

type User = {
    id:number;
    name:string;
    email:string;
}
type UserRes = User & {
    token: string;
};

const userRes : UserRes = {
    id:1,
    name:"Noname",
    email:"email@gmail.com",
    token:"chiu thua"
};
// extend interface
interface IUser extends User {
  token: string;
}