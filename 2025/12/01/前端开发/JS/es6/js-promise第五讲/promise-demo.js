var a;
var b = new Promise((resolve, reject) => {
    console.log('Promise1');
    setTimeout(() => {
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise2');
}).then(() => {
    console.log('Promise3');
}).then(() => {
    console.log('Promise4');
});
a = new Promise(async (resolve, reject) => {
    console.log(a)
    // console.log(b)
    await b;
    console.log(a)
    console.log('after1');
    await a;
    resolve(true);
    console.log('after2');
})
console.log('script end');

