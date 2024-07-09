// Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
// const sumArray = (arr) => {
//     // reduce
//     // let sum = 0;
//     // for (let i = 0; i < arr.length; i++) {
//     //     sum += arr[i];
//     // }
//     // return sum;
//     let sum = arr.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0)
//         //  0 + 1 = 1 + 5 = 6 + 8 = 14 + 3 = 17
//         // accumulator + currentValue
//     return sum;
// }

// let sum = sumArray([1, 5, 8, 3]);
// console.log(sum)


// Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
// const squareArray = (arr) => {
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     let newItem = arr[i] * arr[i];
//     newArr.push(newItem);
// }
// return newArr;
//     let newArr = arr.map((item) => { // [4, 25, 36, 9]
//         return item * item;
//     })
//     return newArr;
// }

// let oldArray = [2, 5, 6, 3];
// let a = squareArray(oldArray);
// console.log("oldArray", oldArray)
// console.log("a ", a)

// Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
// const filterGreaterThan = (arr, number) => {
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (number < arr[i]) {
//         newArr.push(arr[i]);
//     }
// }
// return newArr;

//     let newArr = arr.filter((item) => { // [7, 8]
//         return item > number; // 8 > 6 (true)
//     })
//     return newArr;
// }

// let result = filterGreaterThan([4, 5, 7, 8], 6);
// console.log(result);

// Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
const maxInArray = (arr) => {
    let max = arr.reduce(
        (m, current) => {
            if (m > current) return m;
            else return current;
        },
        arr[0]
    )
    return max;
    // let maxNumber = Math.max(...arr);
    // return maxNumber;

    // let max = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    // }
    // return max;
}

// let max = maxInArray([4, 5, 64, 3]);
// console.log(max)



// Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.



// Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
// let arr = [4, 25, 36, 9]
// let newArr = arr.map((item) => {
//     return item * item;
// })
// console.log(newArr);

// Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
//  let arr = ["Hello", "Hi", "Meo meo", "A"]
// let newArr = arr.map((item) => {
//     return item.length;
// })
// console.log(newArr); // [5, 2, 7, 1]

// Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
// let arr =  [
//     {
//         id: 1,
//         name: "Linh"
//     },
//     {
//         id: 2,
//         name: "Ngoc"
//     }
// ]
// let newArr = arr.map((item) => {
//     return item.name;
// })
// console.log(newArr); // ["Linh", "Ngoc"]


// Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
// [4, 5, 3, 6] => ["even", "odd", "even", "odd"]
// let arr = [4, 5, 3, 6]
// let newArr = arr.map((item) => {
//     return item % 2 === 0 ? "even" : "odd"; // Toan tu 3 ngoi
// })
// console.log(newArr);
// Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa
let arr = ["Linh", "Ngoc", "nal"]
let newArr = arr.map((item) => {
    return item.toLocaleUpperCase(); // Toan tu 3 ngoi
})
console.log(newArr);

// Find, Filter, Max,..