// setTimeout(() => {
//     layDuLieu();
// }, 5000); // Đợi 5s => Lấy dữ liệu (Thao tác bất đồng bộ)



// function layDuLieu() {
//     console.log("Lấy dữ liệu")
// }

// function xuLLyDuLieu() {
//     console.log("Xử lý");
// }


// let promise = new Promise((resolve, reject) => {
//     return reject("Lỗi rồi")
//     setTimeout(() => {
//     layDuLieu()
//        resolve(1);
//     }, 3000)
// });

// promise.then((data) => {
//     console.log(data)
//     xuLLyDuLieu()
// }).catch((err) => {
//     console.log(err)
// })


// api 
// axios
const axios = require("axios");

// axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//     console.log(res.data)
// });

// Khởi tạo project node js: npm init
// Cài thư viện : npm i <tên thư viện>
// Chạy 1 file js trong dự án node: node <tên file> 

async function demo() {
    await a(); // a => Promise, Khi sử dụng await thì nó sẽ bắt được data ở trong resolve của Promise đó.
    await b();
    await c();
}

async function getData() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1"); // {header: ..., statuscode:.., data:..}
    console.log(res.data, 1);
    let res2 = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
    console.log(res2.data, 2);
}

getData();