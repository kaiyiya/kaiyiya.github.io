// 面试题
function User() { }
User.prototype.sayHello = function () { }
var u1 = new User()
var u2 = new User()
console.log(u1.sayHello === u2.sayHello)//true
console.log(User.prototype === Function.prototype)//false
console.log(User.__proto__ === Function.prototype)//true
console.log(User.__proto__ === Function.__proto__)//true
console.log(u1.__proto__ === u2.__proto__)//true
console.log(u1.__proto__ === User.__proto__)//false
console.log(Function.__proto__ === Object.__proto__)//true
console.log(Function.prototype.__proto__ === Object.prototype.__proto__)//false
console.log(Function.prototype.__proto__ === Object.prototype)//true

// 2

console.log({} instanceof Object)//true
console.log({}.toString instanceof Function)//true
console.log(Object instanceof Function)//true
console.log(Function instanceof Object)//true
// 3

Function.prototype.a = 1
Object.prototype.b = 2
function A() { }
var a = new A()
console.log(a.a, a.b)//undefined 2
console.log(A.a, A.b)//1 2