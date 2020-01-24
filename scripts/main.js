var textIndex = 0;
var text0 = [
//  "注入神奇能量中...&nbsp", "注入神奇能量中..._"
  "新年快樂！！！&nbsp", "新年快樂！！！_"
];
var text1 = [
  "ㄓ_", "ㄓㄨ_", "注_",
  "注ㄖ_", "注ㄖㄨ_", "注入_",
  "注入ㄕ_", "注入ㄕㄣ_", "注入神_",
  "注入神ㄑ_", "注入神ㄑㄧ_", "注入神奇_",
  "注入神奇ㄋ_", "注入神奇ㄋㄥ_", "注入神奇能_",
  "注入神奇能ㄌ_", "注入神奇能ㄌㄧ_", "注入神奇能ㄌㄧㄤ_", "注入神奇能量_",
  "注入神奇能量ㄓ_", "注入神奇能量ㄓㄨ_", "注入神奇能量ㄓㄨㄥ_", "注入神奇能量中_",
  "注入神奇能量中._", "注入神奇能量中.._", "注入神奇能量中..._",
];
var text2 = [
  "ㄒ_", "ㄒㄧ_", "ㄒㄧㄣ_", "新_",
  "新ㄋ_", "新ㄋㄧ_", "新ㄋㄧㄢ_", "新年_",
  "新年ㄎ_", "新年ㄎㄨ_", "新年ㄎㄨㄞ_", "新年快_",
  "新年快ㄌ_", "新年快ㄌㄜ_", "新年快樂_",
  "新年快樂！_", "新年快樂！！_", "新年快樂！！！_",
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
  "霹", "靂", "卡", "霹", "靂", "啦", "啦",
  "波", "波", "力", "那", "貝", "貝", "魯", "多"
];
function menuChange(index) {

  document.getElementById("MENU").innerHTML = menu[menuIndex];

  if(menuIndex < 14) {
    menuIndex++;
  }else{
    menuIndex = 0;
  }

}
