function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
let soderzh = '<p>22.08.2025 19:00 (мск): Добавлены новости</p><p>14.09.2025 15:00 (мск): Добавлена информация о SHAMAN2016-WIKI после объявления (надпись "SHAMAN2016 WIKI" в начале страницы) SHAMAN2016-WIKI</p><p>14.09.2025 15:29 (мск): Главная страница перешла с https://shaman2016scratch.github.io/shaman2016.github.io/wiki на https://shaman2016scratch.github.io/shaman2016.github.io/wiki/Главная страница</p>'
innerHTML('news', soderzh)
