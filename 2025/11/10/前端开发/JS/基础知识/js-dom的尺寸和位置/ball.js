const ball = document.querySelector('.ball');
// 获取整个视口的大小
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
let directionX = 10; // 水平移动方向，1表示向右，-1表示向左
let directionY = 10; // 垂直移动方向，1表示向下，-1表示向上


setInterval(() => {
    // 解析当前数值并转换为数字
    let currentLeft = parseInt(ball.style.left) || 0;
    let currentTop = parseInt(ball.style.top) || 0;
    // 获取小球的位置,碰到边界反弹
    ball.style.left = (currentLeft + directionX) + 'px';
    ball.style.top = (currentTop + directionY) + 'px';
    if (currentLeft + ball.offsetWidth >= viewportWidth) {
        directionX = -10;
    } if (currentTop + ball.offsetHeight >= viewportHeight) {
        directionY = -10;
    } if (currentLeft - ball.offsetWidth / 2 <= 0) {
        directionX = 10;
    } if (currentTop - ball.offsetHeight / 2 <= 0) {
        directionY = 10;
    }
}, 10);