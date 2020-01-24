var textIndex = 0;
var text = new Array();
text[0] = "施工中";
text[1] = "施工中.";
text[2] = "施工中..";
text[3] = "施工中...";

function textChange() {
  document.getElementById("TEXT").innerHTML = text[textIndex];
  if(textIndex < 3) {
    textIndex++;
  }else{
    textIndex = 0;
  }
}