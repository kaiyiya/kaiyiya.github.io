// 在 index.js 中添加以下代码
document.addEventListener('DOMContentLoaded', () => {
    const moveBar = document.querySelector('.move-bar');
    let isDragging = false;
    let offsetX, offsetY;
    const maxX = window.innerWidth - moveBar.offsetWidth;
    const maxY = window.innerHeight - moveBar.offsetHeight;

    // 鼠标按下事件
    moveBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        // 计算鼠标相对于元素的位置
        offsetX = e.clientX - moveBar.getBoundingClientRect().left;
        offsetY = e.clientY - moveBar.getBoundingClientRect().top;
        moveBar.style.cursor = 'grabbing';
    });

    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            console.log(e.clientX, e.clientY);
            // 更新元素位置
            moveBar.style.left = (e.clientX - offsetX) + 'px';
            moveBar.style.top = (e.clientY - offsetY) + 'px';
            // 计算不能超出边界
            let left = parseInt(moveBar.style.left);
            let top = parseInt(moveBar.style.top);
            if (left < 0) moveBar.style.left = '0px';
            if (top < 0) moveBar.style.top = '0px';
            if (left > maxX) moveBar.style.left = maxX + 'px';
            if (top > maxY) moveBar.style.top = maxY + 'px';
        }
    });

    // 鼠标释放事件
    document.addEventListener('mouseup', () => {
        isDragging = false;
        moveBar.style.cursor = 'grab';
    });
});