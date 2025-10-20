function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
let razd1 = '<p>1. Все строки кода зашифрованы в кодировку base3code, каждую строку надо шифровать отдельно, а между ними ставить \n а в конце кода ;, к примеру вот код из двух строк: \[код первой  строки зашифрованный в кодировку base3code\]\n\[код второй строки зашифрованный в кодировку base3code\];</p><p>2. \n как разделитель строк не надо шифровать в кодировку base3code также и с ;.</p>'
let razd2 = `<h4>print — команда вывода</h4>`
let soderzh = `<h2>Программирование на base3code</h2><p>Программировать на base3code сложно</p><p>Тут используется base3code дельта</p><h3>Базовые правила</h3>${razd1}<h3>Команды</h3>${razd2}`
