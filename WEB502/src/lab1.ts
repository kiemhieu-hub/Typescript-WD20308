// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật

const hinhChuNhat = (dai: number, rong: number) => ({
    chuVi: (dai + rong) * 2,
    dienTich: dai * rong
});
console.log(hinhChuNhat(3,4));

// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter

const tinhTong = (...numbers:number[]): number => 
    numbers.reduce((sum, n) => sum + n,0);
console.log(tinhTong(11,3,5,7));

// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi

const demKyTu = (str: string, char: string): number =>
  [...str].filter(c => c === char).length;
console.log(demKyTu("hello world", "o"));

// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố

const laSoNguyenTo = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(10));
