let max = Math.max.apply(null, [1, 2, 3, 4, 5])
console.log(max)
// 求一个范围内的随机整数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// concat
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
console.log(Array.prototype.concat.apply(arr1, arr2))
let arr3 = arr1.concat(arr2)//返回新对象,是拼接
function Car() {
    this.name = 'car'
}
console.log(Car.__proto__ === Function.prototype)

console.log([1, 3, 5, 2, 4].sort((a, b) => a - b))

// 把伪数组变成真数组的方式
let obj1 = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
// console.log(Array.prototype.slice.call(obj1))
console.log([].slice.call(obj1))
// console.log(Array.from(obj1))