// - Hàm tính điểm trung bình (Return type + Arrow Function)
const tinhDTB = (toan: number , van: number , anh: number):number =>{
    return (toan + van + anh ) / 3;
}
//goij hamf
console.log(tinhDTB(9,7,8));


// - Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
type KiemTraChanLe = (n:number) => boolean;

const isEven: KiemTraChanLe = (n) => {
    return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));


// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
const createU = (name: string, age?:number, role:string ='User') => {
    return {name,age,role};
}
console.log(createU("Hieeus",19,"admin"));
console.log(createU("nam222"));// ko cos tuoi


// - Hàm xử lý danh sách sản phẩm (Spread + Rest)
type Product = {
    name: string; price: number;
}
const addPro = (list: Product[],...newPro: Product[]):Product[] => {
    return [...list,...newPro]
}

//data
const product:Product[] =[
    {name:"xuc xich" , price: 999},
];

const newList = addPro(product,
    {name:"nam kim cham", price: 666},
    {name:"keo kera", price: 888},
);
console.log(newList);
