function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true);
    Request.send();
}
