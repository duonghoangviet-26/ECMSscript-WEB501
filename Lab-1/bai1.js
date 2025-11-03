// Bài tập 1: Sử dụng let, const và Template Literals
// Yêu cầu:
// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
// 👉 BMI = weight / (height * height)

function calculateBMI(weight, height) {
    // TODO: Sử dụng const cho các hằng số
    // TODO: Sử dụng template literals để tạo thông báo
    // TODO: Phân loại BMI theo:
    // - Dưới 18.5: Thiếu cân
    // - 18.5 - 24.9: Bình thường
    // - 25 - 29.9: Thừa cân
    // - Trên 30: Béo phì

    const BMI = weight / (height * height);
    let message = "";
    if (BMI < 18.5) {
        message = `Chỉ số BMI của bạn là ${BMI}. Bạn đang thiếu cân.`;
    } else if (BMI > 18.5 && BMI <= 24.9) {
        message = `Chỉ số BMI của bạn là ${BMI}. Bạn đang Bình thường.`;
    } else if (BMI > 25 && BMI <= 29.9) {
        message = `Chỉ số BMI của bạn là ${BMI}. Bạn đang Thừa cân.`;
    } else if (BMI > 30) {
        message = `Chỉ số BMI của bạn là ${BMI}. Bạn đang Béo phì.`;
    }
    return message;
}

// Ví dụ sử dụng
console.log(calculateBMI(76, 1.70)); // "BMI: 22.86 - Phân loại: Bình thường"










// Bài tập 2: Enhanced Object Literals
// Yêu cầu:
// Tạo đối tượng quản lý sách sử dụng enhanced object literals.

function createBook(title, author, year, price) {
    // TODO: Sử dụng shorthand properties
    // TODO: Thêm method getBookInfo() trả về thông tin sách
    // TODO: Thêm method tính giá sau giảm giá (discount %)
    // TODO: Sử dụng computed property names

    const book = {
        title, author, year, price,
        getBookInfo() {
            return `Giá trị trả về ---- Sách: ${this.title} - Tác giả: ${this.author} - Năm: ${this.year} - Giá: ${this.price}`;
        },
        calculateDiscount(discount) {
            if (discount < 0 || discount > 100) {
                return ` Mức giảm giá phải nằm trong khoảng từ 0-100%`;
            }
            return `Giảm giá ${discount} %`;
        }
    }
    return book;

}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%

