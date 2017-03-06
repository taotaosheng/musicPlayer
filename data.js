/**
 * Created by Administrator on 2016-12-1.
 */
var data = {
    playList : [
        {
            'artist' : 'Archer',
            'musicName' : '红A-无限剑制',
            'musicAlbum' : 'fate grander order',
            'musicURL' : 'media/Archer.mp3',
            'avatarURL' : 'images/archer.bmp',
            'musicTime' : '53',
            'mvInfo': {
                mvName: 'fate grander order',
                mvURL: 'media/fategranderorder.mp4'
            }
        },
        {
            'artist' : '陈奕迅',
            'musicName' : '爱情呼叫转移',
            'musicAlbum' : '未知',
            'musicURL' : 'media/陈奕迅 - 爱情转移.mp3',
            'avatarURL' : 'images/cyx.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '陈奕迅',
            'musicName' : '一个人',
            'musicAlbum' : '未知',
            'musicURL' : 'media/陈奕迅 - 一个人(洗冤录主题曲).mp3',
            'avatarURL' : 'images/cyx.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '陈奕迅',
            'musicName' : '不要说话',
            'musicAlbum' : '未知',
            'musicURL' : 'media/陈奕迅 - 不要说话.mp3',
            'avatarURL' : 'images/cyx.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '陈奕迅',
            'musicName' : '红玫瑰',
            'musicAlbum' : '未知',
            'musicURL' : 'media/陈奕迅 - 红玫瑰.mp3',
            'avatarURL' : 'images/cyx.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '陈奕迅',
            'musicName' : '葡萄成熟时',
            'musicAlbum' : '未知',
            'musicURL' : 'media/陈奕迅 - 葡萄成熟时.mp3',
            'avatarURL' : 'images/cyx.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'IU',
            'musicName' : 'IF YOU (Live)',
            'musicAlbum' : '未知',
            'musicURL' : 'media/IU - IF YOU (Live).mp3',
            'avatarURL' : 'images/IU.bmp',
            'musicTime' : '262'
        },
        {
            'artist' : '川井郁子',
            'musicName' : '赤とんぼ',
            'musicAlbum' : '未知',
            'musicURL' : 'media/川井郁子 - 赤とんぼ.mp3',
            'avatarURL' : 'images/CJYZ.bmp',
            'musicTime' : '262'
        },
        {
            'artist' : 'Saber',
            'musicName' : '初遇',
            'musicAlbum' : '未知',
            'musicURL' : 'media/Saber.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262',
            'mvInfo': {
                mvName: 'fate grander order',
                mvURL: 'http://cn-gdjm4-dx.acgvideo.com/vg7/5/9e/5121163.mp4?expires=1480867200&ssig=-Ke4UOaChpRg2MMSLfKKnA&oi=242578636&rate=160000'
            }
        },
        {
            'artist' : 'LOL',
            'musicName' : '团灭',
            'musicAlbum' : 'ROIT GAME',
            'musicURL' : 'media/ACE.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'LOL',
            'musicName' : '五杀',
            'musicAlbum' : 'ROIT GAME',
            'musicURL' : 'media/PT.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '【网络资源】',
            'musicName' : '拔剑神曲βios',
            'musicAlbum' : '罪恶王冠',
            'musicURL' : 'http://183.6.245.221/m10.music.126.net/20161202204438/a943aee604796cd31ddff244b37ac294/ymusic/11d9/e5b4/18c6/c326f56c7014d4dcbb9ed8fe914ee23b.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262',
            'source': 'net'
        },
        {
            'artist' : '暗香',
            'musicName' : 'MRking',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/MRking - 暗香-钢琴曲.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Adele',
            'musicName' : 'Adele - Someone Like You (Live from the BRITs).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Adele - Someone Like You (Live from the BRITs).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'BAAD',
            'musicName' : 'BAAD (バード) - 君が好きだと叫びたい (好想大声说喜欢你).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/BAAD (バード) - 君が好きだと叫びたい (好想大声说喜欢你).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Black Eyed Peas',
            'musicName' : 'Black Eyed Peas - Boom Boom Pow.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Black Eyed Peas - Boom Boom Pow.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Carly Rae Jepsen',
            'musicName' : 'Carly Rae Jepsen - Call Me Maybe.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Carly Rae Jepsen - Call Me Maybe.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Dr. Dre',
            'musicName' : 'Dr. Dre - I Need A Doctor.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Dr. Dre - I Need A Doctor.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Eminem',
            'musicName' : 'Eminem - Lose Yourself.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Eminem - Lose Yourself.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Eminem',
            'musicName' : 'Eminem - Love The Way You Lie (Clean).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Eminem - Love The Way You Lie (Clean).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Fall Out Boy',
            'musicName' : 'Fall Out Boy - Centuries.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Fall Out Boy - Centuries.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Fall Out Boy',
            'musicName' : 'Fall Out Boy - Immortals ( End Credit Version).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Fall Out Boy - Immortals ( End Credit Version).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Fall Out Boy',
            'musicName' : 'Fall Out Boy - My Songs Know What You Did In The Dark Light Em Up.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Fall Out Boy - My Songs Know What You Did In The Dark Light Em Up.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Fall Out Boy',
            'musicName' : 'Fall Out Boy - The Phoenix.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Fall Out Boy - The Phoenix.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Gala',
            'musicName' : 'Gala - Young For You.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Gala - Young For You.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Idina Menzel',
            'musicName' : 'Idina Menzel - Let It Go.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Idina Menzel - Let It Go.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'JAM Project',
            'musicName' : '一拳超人主题曲',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/JAM Project (ジャム・プロジェクト) - THE HERO!! ~怒れる拳に火をつけろ~ (英雄!!~点燃愤怒之拳~).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Kalafina',
            'musicName' : 'Kalafina (カラフィナ) - to the beginning.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Kalafina (カラフィナ) - to the beginning.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Lana Grande',
            'musicName' : 'Lana Grande - Love Me Like You Do (Karaoke Radio Remix Originally Performed By Ellie Goulding).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Lana Grande - Love Me Like You Do (Karaoke Radio Remix Originally Performed By Ellie Goulding).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'little by little',
            'musicName' : 'little by little - 悲しみをやさしさに (把悲伤化作温柔).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/little by little - 悲しみをやさしさに (把悲伤化作温柔).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Marc Terenzi',
            'musicName' : 'Marc Terenzi - Love To Be Loved By You.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Marc Terenzi - Love To Be Loved By You.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'McFly',
            'musicName' : 'McFly - Love Is On the Radio (Me & Mrs F Mix).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/McFly - Love Is On the Radio (Me & Mrs F Mix).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Michel Teló',
            'musicName' : 'Michel Teló - Ai Se Eu Te Pego.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Michel Teló - Ai Se Eu Te Pego.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'MRking',
            'musicName' : 'MRking - 暗香-钢琴曲.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/MRking - 暗香-钢琴曲.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Nightwish',
            'musicName' : 'Nightwish - Nemo.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Nightwish - Nemo.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Rie Fu',
            'musicName' : 'Rie Fu (リエ フゥ) - Life is Like a Boat.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Rie Fu (リエ フゥ) - Life is Like a Boat.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'LMFAO',
            'musicName' : 'LMFAO - Party Rock Anthem.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/LMFAO - Party Rock Anthem.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : 'Sarah Connor',
            'musicName' : 'Sarah Connor - Just One Last Dance.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Sarah Connor - Just One Last Dance.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'T-ara',
            'musicName' : 'T-ara (티아라) - DAY BY DAY.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/T-ara (티아라) - DAY BY DAY.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Timbaland',
            'musicName' : 'Timbaland - Apologize.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Timbaland - Apologize.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Usher',
            'musicName' : 'Usher - Yeah.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/Usher - Yeah.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'いきものがかり',
            'musicName' : 'いきものがかり (生物股长) - ブルーバード (青鸟).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/いきものがかり (生物股长) - ブルーバード (青鸟).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : 'Walküre',
            'musicName' : 'ワルキューレ (Walküre) - いけないボーダーライン (禁绝边境线).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/ワルキューレ (Walküre) - いけないボーダーライン (禁绝边境线).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '井上杏美',
            'musicName' : '井上あずみ (井上杏美) - 君をのせて (伴随着你).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/井上あずみ (井上杏美) - 君をのせて (伴随着你).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '初音ミク',
            'musicName' : '初音ミク (初音未来) - 千本桜.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/初音ミク (初音未来) - 千本桜.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '和田光司',
            'musicName' : '和田光司 (わだ こうじ) - Butter-Fly.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/和田光司 (わだ こうじ) - Butter-Fly.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '张学友',
            'musicName' : '张学友 - 爱你痛到不知痛.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/张学友 - 爱你痛到不知痛.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '田中爱美',
            'musicName' : '田中あいみ (田中爱美) - かくしん的☆めたまるふぉ～ぜっ! (革新的变身).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/田中あいみ (田中爱美) - かくしん的☆めたまるふぉ～ぜっ! (革新的变身).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '秦基博',
            'musicName' : '秦基博 (はたもとひろ) - 透明だった世界 (曾经透明的世界).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/秦基博 (はたもとひろ) - 透明だった世界 (曾经透明的世界).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '群星',
            'musicName' : '群星 - Crossing Field (交叉领域).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/群星 - Crossing Field (交叉领域).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '藍井エイル',
            'musicName' : '藍井エイル (蓝井艾露) - IGNITE.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/藍井エイル (蓝井艾露) - IGNITE.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '蓝井艾露',
            'musicName' : '藍井エイル (蓝井艾露) - INNOCENCE.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/藍井エイル (蓝井艾露) - INNOCENCE.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
        {
            'artist' : '蓝井艾露',
            'musicName' : '藍井エイル (蓝井艾露) - シンシアの光 (辛西娅之光).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/藍井エイル (蓝井艾露) - シンシアの光 (辛西娅之光).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '高梨康治',
            'musicName' : '高梨康治 (たかなし やすはる) - 儀礼.mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/高梨康治 (たかなし やすはる) - 儀礼.mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },        {
            'artist' : '高橋洋子',
            'musicName' : '高橋洋子 (たかはし ようこ) - 残酷な天使のテーゼ (残酷天使的行动纲领).mp3',
            'musicAlbum' : '钢琴曲',
            'musicURL' : 'media/qqMusic/高橋洋子 (たかはし ようこ) - 残酷な天使のテーゼ (残酷天使的行动纲领).mp3',
            'avatarURL' : 'images/demo.jpg',
            'musicTime' : '262'
        },
    ]
};