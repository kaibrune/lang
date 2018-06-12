window.onload = lang();
function lang() {
var userLang = navigator.language || navigator.userLanguage;
  if (userLang == 'en' || userLang == 'en-US' || userLang == 'en-GB' || userLang == 'en-CA') //if lang is english
  {
  console.log("english_recognized");
  document.getElementById("lang").style.display = "block"; //display consent
}
else {
  console.log("otherlang_recognized");
  document.getElementById("lang").style.display = "none"; //else hide consent
}
}