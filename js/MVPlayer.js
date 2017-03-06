/**
 * Created by j-song on 2016-11-29.
 */
function MVPlayer(mvInfo) {
    function $(ele) {
        return document.querySelector(ele);
    };

    //video元素
    var video = $('.mv_container video');

    //初始化
    this.init = function () {
        this.initPlayer();
        this.bindEvent();
    };

    //初始化播放器
    this.initPlayer = function () {
        video.setAttribute('src', mvInfo.mvURL);
        $('.mv_container .title').innerHTML = mvInfo.mvName;
        //进度条 归0
        $('.mv_container .progress').style.width =   0 +'px';
        //缓冲进度条 归0
        $('.mv_container .buffer').style.width = 0 +'px';
    };

    //事件绑定
    this.bindEvent = function(){

        //播放
        $('.mv_container .play').onclick=function(){
            $('.mv_container .play').style.display = "none";
            $('.mv_container .pause').style.display = "block";
            video.play();
        };

        //暂停
        $('.mv_container .pause').onclick=function(){
            $('.mv_container .play').style.display = "block";
            $('.mv_container .pause').style.display = "none";
            video.pause();
        };

        //快退
        $('.mv_container .prev').onclick=function(){
            var newCurrentTime = parseInt(-video.duration * 0.05 + video.currentTime);
            newCurrentTime = newCurrentTime < 1 ? 0 : newCurrentTime;
            video.currentTime = newCurrentTime;
        };

        //快进
        $('.mv_container .next').onclick=function(){
            var newCurrentTime = parseInt(video.duration * 0.05 + video.currentTime);
            newCurrentTime  = newCurrentTime >= video.duration ? video.duration : newCurrentTime;
            video.currentTime = newCurrentTime;
        };

        //显示进度条
        $('.mv_container .screen').onmouseover
        = $('.mv_container .prev').onmouseover
        = $('.mv_container .next').onmouseover
        = function () {
            $('.mv_container .progress_wrap').style.display = "block";
        };

        //隐藏进度条
        $('.mv_container .screen').onmouseout
        = $('.mv_container .prev').onmouseout
        = $('.mv_container .next').onmouseout
        = function () {
            $('.mv_container .progress_wrap').style.display = "none";
        };

        //判断视频是否可以播放
        video.addEventListener('canplay',function () {
            showTime(0);
        },false);


        //显示剩余时间 和 播放进度条
        video.addEventListener('timeupdate', function () {
            showTime(1);
        });

        //当浏览器正在取媒介数据时运行脚本
        video.addEventListener('progress', function () {
            console.log('progress');
            bufferBar();
        });

        //调整播放时间
        $('.mv_container .progress_bar').onclick = function(e){
            changePlayPorgress(this,e);
        };

        //当媒介已停止播放但打算继续播放时运行脚本
        video.addEventListener('waiting', function () {
            $('.loading').style.display = "block";
        });

        //当浏览器可以再不因缓存而停顿的情况下播放时 oncanplaythrough
        video.addEventListener('canplaythrough', function () {
            console.log('canplaythrough');
            $('.loading').style.display = "none";
        });

        //视频是否播放完毕
        video.addEventListener('ended',function(){
            $('.mv_container .play').style.display = "block";
            $('.mv_container .pause').style.display = "none";
        },false);

        //全屏
        $('.mv_container .screen').ondblclick = function () {
            video.webkitRequestFullScreen();
        };

        //关闭视频
        $('.mv_container .mv_wrap').onclick = function (e) {
            e.stopPropagation();
        };
        $('.mv_container').onclick = function () {
            $('.mv_container .play').style.display = "block";
            $('.mv_container .pause').style.display = "none";
            video.pause();
            this.style.display = "none";
        };
    };

    /**
     * 显示时间
     * @param type 0:总时间  1：当前时间
     */
    function showTime(type) {
        if(!isNaN(video.duration)) {
            if (type === 0) {
                var allTime = video.duration;
                var allMinu = parseInt(allTime / 60);
                var allSecond = parseInt(allTime % 60);
                $('.mv_container .all_time').innerHTML = "-" + allMinu + ":" + allSecond;
            } else {
                var lessMinu = parseInt(video.currentTime / 60);
                var lessSecond = parseInt(video.currentTime % 60);
                lessMinu = lessMinu < 10 ? '0' + lessMinu : lessMinu;
                lessSecond = lessSecond < 10 ? '0' + lessSecond : lessSecond;

                $('.mv_container .cur_time').innerHTML = lessMinu + ":" + lessSecond;
                //播放进度条
                $('.mv_container .progress').style.width = video.currentTime / video.duration * 100 + "%";
            }
        }
    }

    /**
     * 显示缓冲进度条
     */
    function bufferBar() {
        var bufferLength = video.buffered.length;
        if(bufferLength > 0 && video.buffered != undefined){
            var bufferValue = video.buffered.end(bufferLength - 1) / video.duration;

            $('.mv_container .buffer').style.width = bufferValue * 100 + "%";
        }
    }
    /**
     * 调整播放进度条
     * @param node 进度条节点
     * @param e Event
     */
    function changePlayPorgress(node, e) {
        var e = window.event || e;
        //当前点击位置相对与进度条宽度的百分比
        var progressPercent = e.offsetX / node.offsetWidth;
        //点击后的时间
        var newCurrentTime = parseInt(progressPercent * video.duration);
        video.currentTime = newCurrentTime;
    }
}