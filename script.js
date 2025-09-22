console.log("Привет разработчик!");
test = "testing js";
console.log(test);
const url = new URL(window.location);
const searchParams = url.searchParams;
pdebug = searchParams.get('_ym_debug');
function debug() {
  document.getElementById("title").textContent = `YandexMetrica_debug_${pdebug}`;
}
lang_ym = searchParams.get('?_ym_status-check');
function ymlang() {
  document.getElementById("title").textContent = `YandexMetrica_ymlang_${lang_ym}`;
}
if pdebug = '' {
  console.log("ym_debug не обнаружен!")
}
else {
  debug()
}
if lang_ym = '' {
  console.log("ym_status-check")
}
else {
  ymlang()
}
