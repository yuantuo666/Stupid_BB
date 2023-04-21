// ==UserScript==
// @name         Stupid_BB
// @namespace    https://imwcr.cn/
// @version      0.1
// @description  修复BB愚蠢的notice页面滚动条
// @author       You
// @match        https://bb.cuhk.edu.cn/webapps/streamViewer/streamViewer?cmd=view&streamName=alerts&globalNavigation=false
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
    }
    setInterval(check, 100)
}
