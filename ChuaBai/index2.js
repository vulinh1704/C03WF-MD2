// Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.\
const arrColor = ["Red", "Pink", "Black"];
let [firstColor, secondColor, thirdColor] = arrColor; // Detructuring;
// console.log("firstColor", firstColor);
// console.log("secondColor", secondColor);
// console.log("thirdColor", thirdColor);
// let firstColor = arrColor[0];
// let secondColor = arrColor[1];
// let thirdColor = arrColor[2];

// Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
// let obj = {
//     name: "Linh",
//     age: 30,
//     gender: "Nam"
// }
// let { name, age } = obj;
// console.log("Name: ", nameObj);
// console.log("Age", age);
// let name = obj.name;
// let age = obj.age;

// Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator (Dải).
// let arr = [3, 5, 6];
// let arr2 = [40, 6, 54];
// let arr3 = [...arr, ...arr2];
// console.log(arr3);


// Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
// let arr = [3, 5, 6];
// let arr2 = [...arr]; // => arr2 và arr đang trỏ đến cùng 1 địa chỉ chứa mảng [3,5,6];
// arr2.push(33);
// console.log(arr);
// console.log(arr2);

// Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
// let arr = [4, 6, 9];
// arr = [...arr, 4];
// console.log(arr);

// Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
// let obj = {
//     name: "Vũ Linh",
//     age: 30
// }

// let obj2 = {
//     score: 5.6,
//     gender: "Nam",
//     name: "Ngọc"
// }

// let obj3 = {...obj, ...obj2, country: "Việt Nam"};
// console.log(obj3);

// Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".


//16. Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.

// let arr = [4, 5, 45, 5, 5, 10];
// // 4 - 1, 5 - 3, 45 - 1 , 10 - 1 

// let obj = arr.reduce((objFind, currentValue) => {
//     if(!objFind[currentValue]) { // objFind.4 = undefined    |    objFind.5 = 1
//         objFind[currentValue] = 1 // objFind.4 = 1
//     } else { 
//         objFind[currentValue] = objFind[currentValue] + 1; // objFind.5 = 2
//     }
//     return objFind;
// }, {})

// console.log(obj);

// let obj1 = {
//     "4": 1,
//     "5": 2
// }

// let string = "4"
// console.log(obj1[string]); // ~ obj.4 



// let obj = {
//     name: "Huy",
//     age: 30,
//     gender: "Nam"
// }
// let {name, age} = obj;
// console.log("Name: ", name);
// console.log("Age",age);


// Bất đồng bộ (Node Js)
