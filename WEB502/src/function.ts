//function có return , param
function add(a:number,b){
    return a + b;
}

const addResult = (a:number , b:number):number => a+ b; 

add(2,3);
// add(undefined,null);
addResult(4,5);

// function ko co return ;kieu void
function logMessage(message: string):void{
    console.log("Message: " ,message);
}

//props trong react sang component : onclick: () =>void
//props trong react sang component : onclick: () =>onSearch: (keyword:string) =>string


//tham so mac dinh (default parammets)'
function greetUser(name: string, greetUser: string | number = "Hello"): string {
    return `${greetUser},${name}`;
}
greetUser("noname");
greetUser("chiuthua", "xin chao");

//4. Tham số tùy chọn (Optional Parameter)
function describePerson(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old.`;
  }
  return `${name} has no age specified.`;
}

console.log(describePerson("John")); // Kết quả: John has no age specified.
console.log(describePerson("Jane", 25)); // Kết quả: Jane is 25 years old.


// 5. Toán tử spread (Spread Operators)
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Kết quả: 6
console.log(sum(4, 5, 6, 7)); // Kết quả: 22


