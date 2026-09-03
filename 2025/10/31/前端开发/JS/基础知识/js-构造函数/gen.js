// 创建对象
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

var person1 = createPerson('张三', 18, '男')
// 构造函数
function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.show = function () {
        console.log(this.name + ' ' + this.age + ' ' + this.sex)
    }
}
var person2 = new Person('张三', 18, '男')//构造函数的写法
// 作业:创建一副扑克牌

/**
 * 创建一副扑克牌
 * @param (number) number 1-A,...,11-J,12-Q,13-K,14-小王 15-大王
 * @param (string) color 1-黑桃,2-红桃, 3-梅花, 4-方块
*/
function Poker(number, color) {
    this.number = number
    this.color = color
    this.print = function () {
        // 先打印花色,再打印点数
        if (this.number === 14) {
            console.log('joker')
            return
        }
        if (this.number === 15) {
            console.log('JOKER')
            return
        }

        // 其它情况
        var colors = ['♠', '♥', '♣', '♦']
        var color = colors[this.color - 1]
        var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        var number = numbers[this.number - 1]
        console.log(color + number)
    }
}




function Deck() {
    this.pokers = []
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 13; j++) {
            var poker = new Poker(j, i)
            this.pokers.push(poker)
        }
    }
    // 大小王
    var poker = new Poker(14, 1)
    this.pokers.push(poker)
    var poker = new Poker(15, 1)
    this.pokers.push(poker)
    this.print = function () {
        for (var i = 0; i < this.pokers.length; i++) {
            this.pokers[i].print()
        }
    }
}
var deck = new Deck()
deck.print()