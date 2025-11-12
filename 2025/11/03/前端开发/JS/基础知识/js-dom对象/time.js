// 做一个计时器
let timeId;
function start() {
    if(timeId)return;

    timeId = setInterval(() => {
        console.log(new Date())
    }, 1000)


}
function stop() {
    clearInterval(timeId)
    timeId = null
}
start()