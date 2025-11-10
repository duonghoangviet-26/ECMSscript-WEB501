// Bài tập Array Destructuring
// Array destructuring cho phép extract dữ liệu từ mảng và gán vào các biến riêng biệt.


// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast(array) {
    const [first, ...rest] = array;
    const last = rest.pop(); // Lấy phần tử cuối cùng 
    return [first, last];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

function swapElements(arr) {
    const [first, second, third, fourth, ...rest] = arr;
    return [first, fourth, third, second, ...rest];
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Object Destructuring
// Object destructuring cho phép extract thuộc tính từ object và gán vào biến.

// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user

const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

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

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("2 seconds passed"));



// Bài 2: Viết hàm fetchMultipleData

function fetchMultipleData(urls) {
    const promises = urls.map((url) =>
        fetch(url).then((response) => response.json())
    );
    return Promise.all(promises);
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);



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


async function processOrder(orderId) {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const product = await getProducts(order.productIds);
    return { order, user, product };
}