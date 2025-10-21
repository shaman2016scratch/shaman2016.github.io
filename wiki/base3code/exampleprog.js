function innerHTML(p1, p2) {
  document.getElementById(p1).innerHTML = p2
}
function TextContent(p1, p2) {
  document.getElementById(p1).textContent = p2
}
exampleprog1code1 = '<p>print<br>Hello World!<br>-50<br>0<br>80<br>90<br>30<br>0<br>0<br>0<br>0<br>0<br>0<br>0<br>0</p>'
exampleprog1code2 = '<p>252256238248260\\n235230244244250273265250256244228180\\n150094067\\n067\\n103067\\n105067\\n086067\\n067\\n067\\n067\n067\\n067\\n067\\n067\\n067</p>'
exampleprog1 = `<div class="project"><p>Давайте сейчас просто сделаем этот код без шифровки</p><code language=\'base3code\'>${exampleprog1code1}</code><p>А теперь давайте с шифровкой:<p><code language=\'base3code\'>${exampleprog1code2}</code></div>`
soderzh = `<h2>Примеры программ на машинном коде base3code</h2><div class='project'><h3>Выводит 'hello world!'</h3>${exampleprog1}</div>`
innerHTML('exampleprog', soderzh)
