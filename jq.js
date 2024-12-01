

// const { ipcRenderer } = require('electron');
//!动态 注入js
// 创建一个新的 script 元素
var scriptElement = document.createElement('script');
// 设置 script 元素的 src 属性为 jQuery 的 CDN 地址
scriptElement.src = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js';
// 确保在加载完成后执行后续代码
scriptElement.onload = function () {
  var newDiv = $('<div>', {
    id: 'logBar', // 设置 id 属性
    text: '', // 设置文本内容
  });


  var newDiv1 = $('<div>', {
    text: '欢迎使用echo登录器', // 设置文本内容
    id: "logbarUser"
  });
  newDiv.append(newDiv1);


  var newDiv2 = $('<div>', {
    text: '', // 设置文本内容
    id: "logbarStatus"
  });
  newDiv.append(newDiv2);
  newDiv2.css({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  });



  // 设置新的 div 的样式
  newDiv.css({
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    height: '25px',
    backgroundColor: 'white', // 设置背景颜色，可以根据需要修改
    zIndex: 100,
    fontSize: '13px',
    alignItems: 'center',
    display: 'flex',
  });
  // 将新的 div 插入到文档的 body 最底部
  $('body').append(newDiv);
  document.body.style.height = 'calc(100% - 25px)';
  // 创建一个resize事件
  setTimeout(() => {
    var resizeEvent = new Event('resize');
    // 发送resize事件
    window.dispatchEvent(resizeEvent);
  }, 2000)
};
document.head.appendChild(scriptElement); 0;

