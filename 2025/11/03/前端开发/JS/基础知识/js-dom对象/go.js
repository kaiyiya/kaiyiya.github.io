// 利用继承解决重复代码
function User(userName, password) {
    this.userName = userName;
    this.password = password;
}
User.prototype.playFreeVideo = function () {
    console.log('播放免费视频');
}
function VIPUser(userName, password, expireTime) {
    User.call(this, userName, password);
    this.expireTime = expireTime;
}
VIPUser.prototype.playVIPVideo = function () {
    console.log('播放VIP视频');
}
VIPUser.prototype.playFreeVideo = function () {
    console.log('播放没有广告的免费视频');
}

Object.setPrototypeOf(VIPUser.prototype, User.prototype)
var vip = new VIPUser('vip', '123456', '2020-01-01')
console.log(vip);
vip.playFreeVideo()

