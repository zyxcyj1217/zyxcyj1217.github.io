var textIndex = 0;

var text1 = [
  "注入神奇能量中...&nbsp", "注入神奇能量中..._"
];
var text0 = [
  "ㄓ_", "ㄓㄨ_", "注_",
  "注ㄖ_", "注ㄖㄨ_", "注入_",
  "注入ㄕ_", "注入ㄕㄣ_", "注入神_",
  "注入神ㄑ_", "注入神ㄑㄧ_", "注入神奇_",
  "注入神奇ㄋ_", "注入神奇ㄋㄥ_", "注入神奇能_",
  "注入神奇能ㄌ_", "注入神奇能ㄌㄧ_", "注入神奇能ㄌㄧㄤ_", "注入神奇能量_",
  "注入神奇能量ㄓ_", "注入神奇能量ㄓㄨ_", "注入神奇能量ㄓㄨㄥ_", "注入神奇能量中_",
  "注入神奇能量中._", "注入神奇能量中.._", "注入神奇能量中..._",
];

function textChange(index) {
  if(index == 0) {

    document.getElementById("TEXT").innerHTML = text0[textIndex];

    if(textIndex < 25) {
      textIndex++;
    }else{
      textIndex = 0;
      clearInterval(timer);
      setInterval(function(){textChange(1)},480);
    }

  }else{

    document.getElementById("TEXT").innerHTML = text1[textIndex];

    if(textIndex < 1) {
      textIndex++;
    }else{
      textIndex = 0;
    }

  }
}
