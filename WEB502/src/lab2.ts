//1.Tạo type Product có các trường sau:

// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
enum Rate {
  low = 'Thấp',
  medium = 'Trung bình',
  hight = 'Cao'
}

type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
};


//2.Tạo mảng listProducts có các phần tử có kiểu Product - Nhập ít nhất 5 phần tử
let listProducts: Product[] = [
  { name: 'Sản phẩm A', price: 3, sale: true, rate: Rate.low },
  { name: 'Sản phẩm B', price: 10, sale: false, rate: Rate.medium },
  { name: 'Sản phẩm C', price: 7, sale: true, rate: Rate.hight },
  { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
  { name: 'Sản phẩm E', price: 12, sale: false, rate: Rate.hight },
];

//3.Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
type ProWithDes = Product &{description: string};

function addDes(product:Product[]):ProWithDes[]{
    return product.map(product => ({...product, description: product.price > 5 ? 'Tốt' : 'Bình thường'}));
}

const ProWithDes = addDes(listProducts);
console.log(ProWithDes);