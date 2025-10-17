function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
let pages = '<a href="/shaman2016.github.io/wiki/shaman2016">SHAMAN2016</a><br><a href="/shaman2016.github.io/wiki/Контакты SHAMAN2016">Контакты SHAMAN2016</a><br><a href="/shaman2016.github.io/wiki/Explore 2">Исследуй 2/Explore 2</a><br><a href="https://shaman2016scratch.github.io/shaman2016.github.io/wiki/Shaman2016-wiki">О Вики</a><br><a href="https://shaman2016scratch.github.io/shaman2016.github.io/wiki/Аккаунты SHAMAN2016">Аккаунты SHAMAN2016</a><br><a href="https://shaman2016scratch.github.io/shaman2016.github.io/wiki/Главная страница">Главная страница</a><br><a href="/shaman2016.github.io/wiki/scratchwikibyshaman2016">scratchwikiByShaman2016</a><br><a href="/shaman2016.github.io/wiki/wikipediaByShaman2016">wikipediaByShaman2016</a><br><a href="/shaman2016.github.io/wiki/CyberGuardianX">CyberGuardianX</a><br><a href="/shaman2016.github.io/wiki/2.0/">2.0 страницы</a>'
innerHTML('pages', pages)
