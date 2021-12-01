;(function() {
    function remSize() {
        var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
        var designWidth = 750, // 设计稿的宽度为750px 满屏
            rate = 100, // 为了方便计算，假设1rem = 100px
            fullScreen = designWidth / rate; // 则满屏为750px / 100px = 7.5, 也就是7.5rem满屏
        if(deviceWidth >= 750) { // 屏幕超过750即为PC端，定住750px
            deviceWidth = 750;
        }
        if(deviceWidth <= 320) { // 屏幕小于750设置最小宽度为320px
            deviceWidth = 320;
        }

        // 改变html的字体大小,利用rem布局
        document.documentElement.style.fontSize = (deviceWidth / fullScreen) + 'px';
        document.body.style.fontSize = 0.32 + 'rem'; // 可能需要将脚本置于body内，记得要乘以2，相对于移动端
    }
    
    remSize(); // 初始化操作
    window.onresize = () => { // 窗口尺寸发生变化时调用
        remSize();
    }
})();