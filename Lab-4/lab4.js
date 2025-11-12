// Bài tập Array Destructuring
// Array destructuring cho phép extract dữ liệu từ mảng và gán vào các biến riêng biệt.


// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = rest.pop(); // Lấy phần tử cuối cùng 
    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4, 5, 6])); // [1, 6]


// // Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

// function swapElements(arr) {
//     const [first, second, third, fourth, ...rest] = arr;
//     return [first, fourth, third, second, ...rest];
// }

// console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Object Destructuring
// Object destructuring cho phép extract thuộc tính từ object và gán vào biến.

// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user

// const user = {
//     id: 1,
//     personalInfo: {
//         name: "javascript",
//         contact: {
//             email: "javascript@email.com",
//             phone: "123-456-7890",
//         },
//     },
// };

function getUserInfo(user) {
    const {
        personalInfo: {
            name,
            contact: { email }
        }
    } = user;
    return { name, email };
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }




// Bài 2: Viết hàm với tham số mặc định

function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }


// Promises
// Lý thuyết
// Promise đại diện cho giá trị sẽ có trong tương lai, có 3 trạng thái: pending, fulfilled, rejected.
// Bài tập Promises
// Bài 1: Viết hàm delay trả về Promise

const delay = (ms) => { return new Promise((resolve) => setTimeout(resolve, ms)) }

delay(2000).then(() => console.log("2 seconds passed"));

console.log(delay);




// Bài 2: Viết hàm fetchMultipleData

const fetchMultipleData = (urls) => {
    const promises = urls.map((url) =>
        fetch(url).then((response) => response.json())
    );
    return Promise.all(promises);
}

fetchMultipleData(["https://jsonplaceholder.typicode.com/users/1"])
    .then((users) => console.log(users))
    .catch((error) => console.log(error))







// Async/Await
// Lý thuyết
// Async/await cung cấp cú pháp đồng bộ để viết code bất đồng bộ.
// Viết lại callback hell thành async/await




// Viết lại hàm này sử dụng async/await
// function processOrder(orderId, callback) {
//     getOrder(orderId, (order) => {
//         getUser(order.userId, (user) => {
//             getProducts(order.productIds, (products) => {
//                 callback({ order, user, products });
//             });
//         });
//     });
// }


// function getOrder(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: orderId, userId: 1, productIds: [101, 102, 103] }), 1000);
//   });
// }

// function getUser(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: userId, name: "Nam", email: "nam@example.com" }), 1000);
//   });
// }

// function getProducts(productIds) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(productIds.map(id => ({ id, name: `Sản phẩm ${id}`, price: 100000 + id }))), 1000);
//   });
// }


async function processOrder(orderId) {
    try {
        const order = await getOrder(orderId);
        const user = await getUser(userId);
        const product = await getProducts(productIds);
        return { order, user, product };
    } catch (error) {
        console.log(error);
    }
}

// processOrder()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


// Bài 2: Xử lý lỗi với async/await

async function safeApiCall(apiFunction, ...args) {
    try {
        const result = await apiFunction(...args);
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}