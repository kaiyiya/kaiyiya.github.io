function m(a, b) {
    console.log(this, a, b)
}

m()
m.call([1, 2, 3], 1, 2)//通过call更改this指向
m.apply([1, 2, 3], [1, 2])//只有参数不一样
// 练习题

var person = {
    name: '张三',
    age: 18,
    sayHai: function () {
        console.log(this.name + ' ' + this.age)
    }
}

person.sayHai()
// 为所有对象添加方法print
Object.prototype.print1 = function () {
    for (var key in this) {
        // 判断这个属性是否属于对象本身
        if (this.hasOwnProperty(key)) {
            console.log(key, this[key])
        }

    }
    for (var key in this) {

        // 还有一个in会判断对象本身和原型链上是否存在
        if (key in this) {
            console.log(key, this[key])
        }
    }
}
person.print1()
// 另一种创建对象的方式
function User(name, age) {
    this.name = name
    this.age = age
    this.print = function () {
        console.log(this.name + ' ' + this.age)
    }
}


var user = {
}
User.call(user, '张三', 18)

