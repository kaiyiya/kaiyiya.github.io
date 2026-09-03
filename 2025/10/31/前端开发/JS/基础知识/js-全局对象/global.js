// 不希望变量和函数污染全局
(function () {
    var a = 1
    function b() {
        console.log(a)
    }
})();
// 希望能获取某个值
var c = (function () {
    var a = 1
    function b() {
        console.log(a)
    }
    return b
})()
