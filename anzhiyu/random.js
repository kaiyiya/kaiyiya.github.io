var posts=["2025/06/09/引导程序/","2025/06/09/整数转罗马数字/","2025/06/09/罗马数字转整数/","2025/06/09/React进阶实践指南-认识JSX/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };