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

// 4. Hàm hiển thị danh sách sản phẩm (forEach)
function displayProducts(products: ProWithDes[]): void {
  products.forEach(p => {
    console.log(
      `Tên: ${p.name} | Giá: ${p.price} | Sale: ${p.sale ? 'Có' : 'Không'} | Đánh giá: ${p.rate} | Mô tả: ${p.description}`
    );
  });
}

// 5. Hàm tính tổng giá bán (reduce)
function totalPrice(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.price, 0);
}

// 6. Hàm lọc sản phẩm đang sale & đánh giá từ Trung bình trở lên (filter)
function filterSaleProducts(products: Product[]): Product[] {
  return products.filter(
    p =>
      p.sale === true &&
      (p.rate === Rate.medium || p.rate === Rate.hight)
  );
}

///phần gọi hàm

// Thêm description cho sản phẩm
const productsWithDes = addDes(listProducts);

// Hiển thị danh sách sản phẩm
console.log('Danh sách sản phẩm: ');
displayProducts(productsWithDes);

// Tính tổng giá bán
console.log('Tổng giá bán:', totalPrice(listProducts));

// Lọc sản phẩm sale & đánh giá từ Trung bình trở lên
console.log('Sản phẩm đang sale & đánh giá từ Trung bình trở lên: ');
console.log(filterSaleProducts(listProducts));