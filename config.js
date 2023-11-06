// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "22岁生日啦",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "首先 祝我的小嘟生日快乐！",
        "虽然很简陋",
        "但是我来给老婆简单献个丑",  // 同上...
        "小嘟宝宝真的好可爱",
        "从一开始就是",
        "看见你做什么都喜欢的不行",
        "我真本来没那么信一见钟情的",
        "但你真改变我了",
        
        "谢谢宝宝",
        "和你一起真好"
        "我的宝宝 要每天都开开心心我才满意",
        "我惹你不高兴了你可一定要告诉我",
        "我们简单快乐的相爱就很幸福了",
        "记得头顶上还有属于一颗我们的星星",
        "时间还长 我们以后还有好久",
        "不过我们有时间也可以打算打算以后",
        "同时你一定要",
        "健健康康",
        "开开心心",
        "幸福好运常相伴",
        "代码是抄的 嘿嘿",
        "生日快乐宝宝",
        "我爱你～"
        
        "还有别的悄悄话一会告诉你...",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "首先 祝我的小嘟生日快乐！": "./imgs/3141699246393_.pic.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "START",
        play: "放音乐！",
        bannar_coming: "小横幅",
        balloons_flying: "嘟",
        cake_fadein: "小蛋糕",
        light_candle: "点火",
        wish_message: "生日快乐！！！",
        story: "A MESSAGE FOR YOU",
    }
};
