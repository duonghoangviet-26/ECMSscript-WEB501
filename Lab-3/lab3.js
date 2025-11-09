// Bài tập 1: Chuyển đổi hàm

// Chuyển các hàm sau thành arrow functions:


// Function 1
// function multiply(a, b) {
//     return a * b;

// }
const multiply = (a, b) => a * b;

// Function 2
// function isPositive(number) {
//     return number >= 0;

// }
const isPositive = number => number >= 0;

// Function 3
// function getRandomNumber() {
//     return Math.random();
// }
const getRandomNumber = () => Math.random();

// Function 4
// document.addEventListener("click", function () {
//     console.log("Clicked!");
// });

// document.addEventListener("click", () => console.log("Clicked!"));



// Bài tập 2: Sử dụng Default Parameters
// Viết lại hàm sau sử dụng default parameters:

// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

function createUser(name = "Anonymous", age = 18, isAdmin = false) {


    return { name, age, isAdmin };
}

// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
// Hàm sumAll tính tổng tất cả tham số truyền vào
// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định


const mergeArrays = (arr5, arr6) => [...arr5, ...arr6];
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];
console.log(mergeArrays(arr5, arr6));

// 2
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(sumAll(5, 3));

// 3
function createProduct(name = "Dương", age = "20", address = "Nam Từ Liêm") {
    return { name, age, address };
}



// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng

function shoppingCart(name, ...product) {
    return {
        name: name,
        list: product,
        sumProduct: product.length,
        date: new Date()
    }
}

const order = shoppingCart("Dương", "Dell", "20", "Nam Từ Liêm");
console.log(order);