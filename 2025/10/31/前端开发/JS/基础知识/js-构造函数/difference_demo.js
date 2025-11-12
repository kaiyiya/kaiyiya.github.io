// 演示两种创建对象方式的区别

// 工厂函数模式
function createPerson(name, age, sex) {
    var person = {
        name: name,
        age: age,
        sex: sex,
        show: function () {
            console.log(this.name + ' ' + this.age + ' ' + this.sex)
        }
    }
    return person
}

// 构造函数模式
function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.show = function () {
        console.log(this.name + ' ' + this.age + ' ' + this.sex)
    }
}

// 创建对象实例
var person1 = createPerson('张三', 18, '男')
var person2 = new Person('李四', 20, '女')

// 测试区别
console.log("=== 对象类型检查 ===")
console.log("person1 instanceof createPerson:", person1 instanceof createPerson) // false
console.log("person2 instanceof Person:", person2 instanceof Person)             // true
console.log("person1.constructor:", person1.constructor)                        // Object
console.log("person2.constructor:", person2.constructor)                        // Person

console.log("\n=== 调用方法 ===")
person1.show() // 张三 18 男
person2.show() // 李四 20 女

console.log("\n=== 属性检查 ===")
console.log("person1 的属性:", Object.keys(person1))
console.log("person2 的属性:", Object.keys(person2))