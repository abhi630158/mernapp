const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
module.exports = { add, subtract };

const user = {
  name: "John Doe",
  age: 30,
  email: "abhi@gmail.com"};

const { name, age, email } = user;
console.log(name);

const numbers = [1, 2, 3, 4, 5];
const numbers2 =[...numbers, 6, 7, 8];
console.log(numbers2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

const fetchData = async () => {
    const data = await  new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);}    );
    console.log(data);
}