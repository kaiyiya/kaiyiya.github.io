(function () {
    var list = document.querySelector('.list')
    var items = list.querySelectorAll('li')
    var index = 0
    setInterval(function () {
        list.scrollTop += 5;  // 减少每次滚动距离
        index++;
        if (index === 16) {   // 相应增加判断次数
            list.scrollTop = 0;
            index = 0;
        }
    }, 200);  // 缩短时间间隔



})()