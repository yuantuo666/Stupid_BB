// ==UserScript==
// @name         Stupid_BB
// @namespace    https://imwcr.cn/
// @version      0.3
// @description  修复BB愚蠢的notice页面滚动条 + 登录页面优化
// @author       yuantuo666
// @match        https://bb.cuhk.edu.cn/webapps/streamViewer/streamViewer?cmd=view&streamName=alerts**
// @match        https://bb.cuhk.edu.cn/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cuhk.edu.cn
// @grant        none
// ==/UserScript==


// 劫持方法
// let oldAdd = EventTarget.prototype.addEventListener
// EventTarget.prototype.addEventListener=function(...args){
//     if (args[0] === 'mousewheel') {
//         console.log(args);
//         return;
//     }
//     oldAdd.call(this,...args);
// }


window.onload = function(){
    function modify(){
        window.addEventListener('mousewheel', function(e){e.stopPropagation()}, true)

        let alerts = document.getElementById('left_stream_alerts');
        // edit overflow to scroll
        if (alerts) alerts.style.overflow = 'scroll';

        let scrollbar = document.getElementsByClassName('scrollbar_track');
        if (scrollbar.length === 3) {
            scrollbar[2].style.display = 'none';
        }
    }
    function check() {
        let alerts = document.getElementById('left_stream_alerts');
        if (alerts && alerts.style.overflow != 'scroll') modify();

        let bg = document.getElementsByClassName('login-page');
        if (bg[0] && !bg[0].style.backgroundSize) {
            // bg[0].style.background = 'url()'; // 可以修改背景图片
            bg[0].style.backgroundSize = 'cover';
        }
        let login = document.getElementsByClassName('loginBody');
        if (login[0] && !login[0].style.backgroundColor) {
            login[0].style.backgroundColor = 'rgb(255 255 255 / 75%)';
        }
        if (document.getElementById('user_id') && document.getElementById('user_id').value && document.getElementById('password').value){
            let login_btn = document.getElementsByName('login');
            if (login_btn) login_btn[1].click();
        }
    }
    setInterval(check, 100)
}
