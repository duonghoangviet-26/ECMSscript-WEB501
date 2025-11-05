// {
//     let x = 1;
//     var y = 2;
//     console.log(x);
// }
// console.log(y);



// var - function scoped (let , const k chạy được vì nó nằm ngoài block scoped)
// function varExample() {
//     if (true) {
//         const x = 10;
//     }
//     console.log(x);
// }
// varExample();

//  liên quan đến dấu {} nó là block scoped








// Bài 1: Sửa lỗi scope

// Sửa đoạn code sau để hoạt động đúng
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {

//         console.log(i); // Hiện tại in ra 3,3,3
//     }, 100);
// }
// Yêu cầu: Sửa để in ra 0,1,2




// Bài 2:
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
// const student = {
//     name: "ThuyTien",
//     age: 21,
//     grade: "A"
// };
// console.log(JSON.stringify(student));

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student







// 2.Template Literals
// Bài 1: Tạo email template

// Tạo template cho email thông báo
// const user = {
//     firstName: "Nguyen",
//     lastName: "Van A",
//     product: "Laptop Dell XPS",
//     price: 25000000,
//     orderDate: "2024-01-15",
// };

// Tạo template string cho email
// const emailTemplate = `Xin chào bạn ${user.firstName} ${user.lastName} cảm ơn bạn đã mua ${user.product} và giá ${user.price} vào ngày ${user.orderDate}`; // Viết template ở đây

// console.log(emailTemplate);

// Bài 2: Tạo HTML template

// Tạo HTML template cho card sản phẩm
// const product = {
//     name: "iPhone 15",
//     price: 20000000,
//     discount: 10,
//     inStock: true,
// };

// // Tính giá sau giảm
// const finalPrice = product.price * (1 - product.discount / 100);

// // Tạo template HTML
// const productCard = `Cảm ơn bạn đã mua ${product.name} với giá ${product.price} và được giảm giá ${product.discount} giá còn lại là  ${finalPrice} `; // Viết template ở đây

// console.log(productCard);


// 3. Enhanced Object Literals
// Bài tập thực hành
// Bài 1: Sử dụng property và method shorthand

// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
    width,
    height,
    color,
    calculateArea() {
        return this.width * this.height;
    },
    describe() {
        return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
    },
};

// console.log(rectangle);
console.log(rectangle.calculateArea());
console.log(rectangle.describe());


