let pro = new Promise((resolve, reject) => {
    resolve();
}).then((res) => {
    console.log(res.toString());
    return 2;
}).catch((err) => {
    return 3;
}).catch((res) => {
    console.log(res);
    return 4;
})

setTimeout(() => {
    console.log(pro);
}, 1000);