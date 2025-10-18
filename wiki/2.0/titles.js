function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
const url = new URL(window.location)
const searchParams = url.searchParams
let id = searchParams.get('id')
if (id == '1') {
  TextContent('title', '2.0 wiki-pages в shaman2016-wiki');
} else {
  if (id == '2') {
    TextContent('title', '2.0 pages • shaman2016-wiki 2.0');
  }
}
