/**
 * Created by j-song on 2016-11-28.
 */
function musicPlayer(playList) {
    function $(ele) {
        return document.querySelector(ele);
    };

    var player = this;
    //audio元素
    var audio = $('.music-player #audio');
    //设置按钮
    var options = $('.music-player .option-btn').getElementsByTagName('div');
    //顺序数据字典
    var musicModeDict = ['list', 'random', 'loop'];
    //播放顺序
    var musicMode = musicModeDict[0];
    //第几首歌曲
    var musicIndex = 1;
    //缓冲时间计时器
    var bufferTimer = null;
    //播放时间
    var volumeTimer = null;

    /*================================ 初始化 ================================*/
    this.init = function () {
        //初始化帮助界面
        var helpFlag = localStorage.getItem('musicPlayer_flag');
        if(!helpFlag){
            $('.help_window').style.display = "block";
            localStorage.setItem('musicPlayer_flag', 'hasHelp')
        }
        //初始化主体
        var themeName = localStorage.getItem('musicPlayer_theme');
        themeName = themeName ? themeName : "Theme-pink";
        themeChange(themeName);
        //初始化歌曲
        var beforeMusicIndex = localStorage.getItem('beforeMusicIndex');
        if(beforeMusicIndex){
            musicIndex = beforeMusicIndex;
        }
        //初始化歌单
        showplayList(playList);
        //初始化歌单中当前播放的歌曲的选中状态
        addCurrentClass(musicIndex);
        //初始化播放器
        this.initPlayer(musicIndex - 1);
        //初始化音量
        audio.volume = 0.5;
        $('.volume_now').style.height = audio.volume * 100 + "%";
        //初始化监听事件
        this.bindEvent();
    };



    /*================================ 初始化播放器 ================================*/
    this.initPlayer = function (index) {
        //音乐路径
        audio.setAttribute('src', playList[index].musicURL);
        //歌曲名称
        $('.music-player .music-name').innerHTML = playList[index].musicName;
        //专辑名字
        $('.music-player .music-album').innerHTML = '&lt;' + playList[index].musicAlbum + '&gt;';
        //歌手名称
        $('.music-player .singer-name').innerHTML = playList[index].artist + "：";
        //歌手头像
        $('.music-player .singer-head img').setAttribute("src", playList[index].avatarURL);//进度条
        //进度条 归0
        $('.music-player .progress').style.width =   0 +'px';
        //缓冲进度条 归0
        audio.removeEventListener('canplay',bufferBar,false);
        clearInterval(bufferTimer);
        $('.music-player .buffer').style.width = 0 +'px';
    };



    /*================================ 播放器监听事件绑定 ================================*/
    this.bindEvent = function () {
        //播放
        $('.music-player .play').onclick=function(){
            toPlay('play');
        };

        //暂停
        $('.music-player .pause').onclick=function(){
            toPlay('pause');
        };

        //上一首
        $('.music-player .prev').onclick=function(){
            toPlay('prev');
        };

        //下一首
        $('.music-player .next').onclick=function(){
            toPlay('next');
        };

        //调整播放时间
        $('.music-player .progress_bar').onclick = function(e){
            changePlayPorgress(this,e);
        };


        //调整播放顺序
        for(var i = 0; i < 3; i ++){
            options[i].index = i;
            options[i].onclick = function () {
                for(var i = 0; i < 3; i ++){
                    options[i].classList.remove('active');
                }
                this.classList.add('active');
                musicMode = musicModeDict[this.index];
            };
        }

        //调整音量
        $('.music-player .voice').onmouseover = $('.volume_bar').onmouseover = function () {
            $('.volume_bar').style.display = "block";
            //鼠标滚轮滑动调节音量
            document.onmousewheel = function (e) {
                changeVolume(e);
            };
        };
        $('.music-player .voice').onmouseout = $('.volume_bar').onmouseout = function () {
            $('.volume_bar').style.display = "none";
            //鼠标滚轮滑动调节音量
            document.onmousewheel = null;
        };
        //鼠标点击音量条 调节音量
        $('.music-player .volume_bar').onclick =  function (e) {
            console.log(e.offsetY);
            var volume_percent = e.offsetY / this.offsetHeight;
            audio.volume = parseFloat(volume_percent).toFixed(2);
            $('.music-player .volume_now').style.height = volume_percent * this.offsetHeight + 'px';
        };


        //显示剩余时间 和 播放进度条
        audio.addEventListener('timeupdate',function(){
            if (!isNaN(audio.duration)) {
                //剩余时间
                var lessTime = audio.duration - audio.currentTime;
                //剩余分
                var lessMinu = parseInt(lessTime / 60);
                //剩余秒
                var lessSecond = parseInt(lessTime % 60);
                //补零
                lessMinu = lessMinu < 10 ? '0' + lessMinu : lessMinu;
                lessSecond = lessSecond < 10 ? '0' + lessSecond : lessSecond;
                //填充时间
                $('.music-player .time').innerHTML = "-" + lessMinu + ":" + lessSecond;
                //进度条填充
                $('.music-player .progress').style.width = audio.currentTime / audio.duration * 100 + "%"
            }
        }, false);

        //判断歌曲是否可以播放
        audio.addEventListener('canplay',bufferBar,false);

        //一首歌曲是否播放完毕
        audio.addEventListener('ended',function(){
            changeWithMusicMode(musicMode, 'ended');
        },false);

        //键盘监控
        document.onkeyup = function (e) {
            //空格
            if(e.keyCode == 32){
                if($('.music-player .play').style.display == "block"){
                    toPlay('play');
                }else{
                    toPlay('pause');
                }
            }
            //->
            else if(e.keyCode == 39){
                toPlay('next');
            }
            //<-
            else if(e.keyCode == 37){
                toPlay('prev');
            }
        };
    };



    /*================================ 播放音乐 ================================*/
    function toPlay(action) {
        switch(action){
            case 'play':
                //播放
                $('.music-player .play').style.display = "none";
                $('.music-player .pause').style.display = "block";
                audio.play();
                //缓存当前播放的歌曲编号
                localStorage.setItem('beforeMusicIndex', musicIndex);
                //歌单选中当前播放的歌曲
                addCurrentClass(musicIndex);
                break;

            case 'pause':
                //暂停
                $('.music-player .play').style.display = "block";
                $('.music-player .pause').style.display = "none";
                audio.pause();
                break;

            case 'prev':
                //上一首
                changeWithMusicMode(musicMode, 'prev');
                break;
            case 'next':
                //下一首
                changeWithMusicMode(musicMode, 'next');
                break;
        }
    }



    /*================================ 根据歌单索引播放音乐 ================================*/
    function playWithIndex(index) {
        //重新加载歌曲信息
        player.initPlayer(index);
        //重新加载音乐
        audio.load();
        //判断新的歌曲是否可以播放
        audio.addEventListener('canplay',bufferBar,false);
        //播放
        toPlay('play');
        //存储当前的播放下标
        localStorage.setItem('beforeMusicIndex', musicIndex);
        //歌单选中当前播放的歌曲
        addCurrentClass(musicIndex);
    }



    /*================================ 根据播放顺序切换音乐 ================================*/
    function changeWithMusicMode(musicMode, action) {
        var musicNums = playList.length;
        switch(musicMode){
            //顺序播放
            case 'list':
                //上一曲
                if(action == "prev"){
                    //第一首 ?
                    musicIndex = musicIndex == 1 ? musicNums : --musicIndex;
                }
                //下一曲 || 当前音乐播放结束
                else if(action == "next" || action == "ended"){
                    //最后一首 ?
                    musicIndex = musicIndex == musicNums ? 1 : ++musicIndex;
                }
                break;
            //随机播放
            case 'random':
                musicIndex = parseInt(musicNums * Math.random()) + 1;
                break;
            //单曲循环
            case 'loop':
                if(action == "prev"){
                    musicIndex = musicIndex == 1 ? musicNums : --musicIndex;
                }
                else if(action == "next"){
                    musicIndex = musicIndex == musicNums ? 1 : ++musicIndex;
                }else{
                    //action == "ended"
                }
                break;
        }
        playWithIndex(musicIndex - 1);
    }




    /*================================ 显示缓冲进度条 ================================*/
    function bufferBar() {
        //用计时器没歌一秒刷新一下缓冲条子
        bufferTimer = setInterval(function () {
            //缓冲进度
            var bufferLength = audio.buffered.length;
            if(bufferLength > 0 && audio.buffered != undefined){
                //计算缓存条宽度
                var bufferValue = audio.buffered.end(bufferLength - 1) / audio.duration;

                //填充缓存条
                $('.music-player .buffer').style.width = bufferValue * 100 + "%";

                if(bufferValue == 1){
                    clearInterval(bufferTimer);
                }
            }
        }, 1000);
    }


    /*================================ 调整播放进度条 ================================*/
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
        var newCurrentTime = parseInt(progressPercent * audio.duration);
        audio.currentTime = newCurrentTime;
        audio.removeEventListener('canplay',bufferBar,false);
    }



    /*================================ 调整音量 ================================*/
    /**
     * 调整音量
     * @param e Event
     */
    function changeVolume(e) {
        var e = window.event || e;
        if(e.wheelDelta <= 0){
            //向下 音量降低
            audio.volume = parseFloat(audio.volume <=0 ? 0 : audio.volume - 0.1).toFixed(1);
        }else{
            //向上 音量加高
            audio.volume = parseFloat(audio.volume ==1 ? 1 : audio.volume + 0.1).toFixed(1);
        }
        $('.music-player .volume_now').style.height = audio.volume * 100 + "%";
    }



    /*================================ 歌单部分代码 ================================*/
    /**
     * 展示歌曲列表
     * @param playList 歌单
     */
    function showplayList(playList) {
        var html = "", hasMV = false, hasNoNet = false;
        for (var i = 0; i < playList.length; i++) {
            //如果没网不加载网络资源的歌曲
            hasNoNet = !navigator.onLine && playList[i].source == "net";
            //判断是否隐藏MV按钮
            var hid = playList[i].mvInfo ? '' : ' hidden';

            html+= '<li data-id="' + i + '"' + (hasNoNet ? 'style="display:none;"' : "") + '>'
            +'<span class="name"><i class="left font-over">' + playList[i].musicName + '</i>'
            + '<i class="right' + hid + '" data-id="' + i + '">mv</i></span>'
            +'<span class="singer font-over">' + playList[i].artist + '</span>'
            +'<span class="album font-over">' + playList[i].musicAlbum + '</span>'
            +'</li>'
        }
        $('.playList').innerHTML = html;
        for (var i = 0; i < playList.length; i++) {
            //点击歌单选择音乐
            $('.music-player .playList').getElementsByTagName('li')[i].onclick = function () {
                musicIndex = parseInt(this.dataset.id) + 1;
                changeWithMusicMode(musicIndex, 'next');
            };
            //显示MV
            $('.music-player .playList').getElementsByTagName('li')[i].querySelector('.right').onclick = function (e) {
                toPlay('pause');
                var mvInfo = playList[this.dataset.id].mvInfo;
                $('.mv_container').style.display = "block";
                var mvplayer = new MVPlayer(mvInfo);
                mvplayer.init();
                e.stopPropagation();
            }
        }

        //显示歌单
        $('.music-player .music-info').onclick = function () {
            var container = $(".container");
            if(container.classList.contains('showList')){
                container.classList.remove('showList');
                $('.music-player .playerWrap').classList.remove('showList');
            }else{
                container.classList.add('showList');
                $('.music-player .playerWrap').classList.add('showList');
            }
            //监听动画结束
            container.addEventListener('transitionend', function () {
                addCurrentClass(musicIndex);
            });
        };
    }

    /**
     * 当前歌单歌曲添加样式
     */
    function addCurrentClass(musicIndex) {
        for (var i = 0; i < playList.length; i++) {
            $('.playList').getElementsByTagName('li')[i].classList.remove('current');
        }
        var currentNode = $('.playList').getElementsByTagName('li')[musicIndex - 1];
        currentNode.classList.add('current');
        //让选中的可取始终居中
        $('.playList').scrollTop = currentNode.offsetTop - $('.playList').offsetHeight / 2;
    }



    /*================================ 主题部分代码 ================================*/

    //切换主题
    for (var i = 0; i < 3; i++) {
        $('.music-player .theme').onclick = function (e) {
            e.stopPropagation();
        };
        $('.music-player .theme').getElementsByTagName('div')[i].onclick = function (e) {
            var e = window.event || e;
            !$('#' + this.className) && themeChange(this.className);
            localStorage.setItem('musicPlayer_theme', this.className);
            e.stopPropagation();
        };
    }
    function themeChange(themeName){
        var css = '';
        if(themeName == "Theme-pink"){
            $('#Theme-green') && $('head').removeChild($('#Theme-green'));
            $('#Theme-blue') && $('head').removeChild($('#Theme-blue'));
        }
        else if(themeName == "Theme-blue"){
            css = '<link id="' + themeName + '" rel="stylesheet" href="css/' + themeName + '.css">';;
            $('head').innerHTML += css;
            $('#Theme-green') && $('head').removeChild($('#Theme-green'));
        }
        else if(themeName == "Theme-green"){
            css = '<link id="' + themeName + '" rel="stylesheet" href="css/' + themeName + '.css">';;
            $('head').innerHTML += css;
            $('#Theme-blue') && $('head').removeChild($('#Theme-blue'));
        }
    }
}