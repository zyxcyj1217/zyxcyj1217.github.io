// 選擇顯示文字
const displayText = 1;

// 文字陣列
let text = [];
text[0] = [
    20, "新年快樂！！！　", "新年快樂！！！＿",
    "ㄒ＿", "ㄒㄧ＿", "ㄒㄧㄣ＿", "新＿",
    "新ㄋ＿", "新ㄋㄧ＿", "新ㄋㄧㄢ＿", "新年＿",
    "新年ㄎ＿", "新年ㄎㄨ＿", "新年ㄎㄨㄞ＿", "新年快＿",
    "新年快ㄌ＿", "新年快ㄌㄜ＿", "新年快樂＿",
    "新年快樂！＿", "新年快樂！！＿", "新年快樂！！！＿",
];
text[1] = [
    19, "啊吧啦吧啦吧　", "啊吧啦吧啦吧＿",
    "ㄚ＿", "啊＿",
    "啊ㄅ＿", "啊ㄅㄚ＿", "啊吧＿",
    "啊吧ㄌ＿", "啊吧ㄌㄚ＿", "啊吧啦＿",
    "啊吧啦ㄅ＿", "啊吧啦ㄅㄚ＿", "啊吧啦吧＿",
    "啊吧啦吧ㄌ＿", "啊吧啦吧ㄌㄚ＿", "啊吧啦吧啦＿",
    "啊吧啦吧啦ㄅ＿", "啊吧啦吧啦ㄅㄚ＿", "啊吧啦吧啦吧＿",
];

// 文字指標
let textIndex = 3;

// 主程式
function dynamicText(index) {
    document.getElementById("dynamic-text").innerHTML = text[displayText][textIndex];
    if(index == 0) {
        if(textIndex < text[displayText][0]) {
            textIndex++;
        }else{
            textIndex = 1;
            clearInterval(timer0);
            setInterval(function(){dynamicText(1)},500);
        }
    }else{
        if(textIndex < 2) {
            textIndex++;
        }else{
            textIndex = 1;
        }
    }
}
