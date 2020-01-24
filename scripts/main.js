var textIndex = 0;
var text0 = [
//  "注入神奇能量中...&nbsp", "注入神奇能量中...＿"
  "新年快樂！！！　", "新年快樂！！！＿"
];
var text1 = [
  "ㄓ＿", "ㄓㄨ＿", "注＿",
  "注ㄖ＿", "注ㄖㄨ＿", "注入＿",
  "注入ㄕ＿", "注入ㄕㄣ＿", "注入神＿",
  "注入神ㄑ＿", "注入神ㄑㄧ＿", "注入神奇＿",
  "注入神奇ㄋ＿", "注入神奇ㄋㄥ＿", "注入神奇能＿",
  "注入神奇能ㄌ＿", "注入神奇能ㄌㄧ＿", "注入神奇能ㄌㄧㄤ＿", "注入神奇能量＿",
  "注入神奇能量ㄓ＿", "注入神奇能量ㄓㄨ＿", "注入神奇能量ㄓㄨㄥ＿", "注入神奇能量中＿",
  "注入神奇能量中.＿", "注入神奇能量中..＿", "注入神奇能量中...＿",
];
var text2 = [
  "ㄒ＿", "ㄒㄧ＿", "ㄒㄧㄣ＿", "新＿",
  "新ㄋ＿", "新ㄋㄧ＿", "新ㄋㄧㄢ＿", "新年＿",
  "新年ㄎ＿", "新年ㄎㄨ＿", "新年ㄎㄨㄞ＿", "新年快＿",
  "新年快ㄌ＿", "新年快ㄌㄜ＿", "新年快樂＿",
  "新年快樂！＿", "新年快樂！！＿", "新年快樂！！！＿",
]
function textChange(index) {

  if(index == 0) {

    document.getElementById("TEXT").innerHTML = text2[textIndex];

    if(textIndex < 17) {
      textIndex++;
    }else{
      textIndex = 0;
      clearInterval(timer0);
      setInterval(function(){textChange(1)},480);
    }

  }else{

    document.getElementById("TEXT").innerHTML = text0[textIndex];

    if(textIndex < 1) {
      textIndex++;
    }else{
      textIndex = 0;
    }

  }

}

var menuIndex = 0;
var menu = [
  "霹", "靂", "卡", "霹", "靂", "啦",
  "波", "力", "那", "貝", "魯", "多"
];
function menuChange(index) {

  document.getElementById("MENU").innerHTML = menu[menuIndex];

  if(menuIndex < 11) {
    menuIndex++;
  }else{
    menuIndex = 0;
  }

}
