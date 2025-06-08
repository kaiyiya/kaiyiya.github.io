var posts=["2025/06/07/罗马数字转整数/","2025/06/08/引导程序/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };