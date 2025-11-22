TERMINversion = '1.1';
let terminSDKzag = (false);
const url = new URL(window.location);
const searchParams = url.searchParams;
function getversion() {
  return (TERMINversion);
}
function textContent(e,t) {
 document.getElementById(e).textContent = t;
}
function search_urlparams(t) {
  return (searchParams.get(t));
}
function urlparams() {
  return (searchParams);
}
function innerHTML(e,t) {
  document.getElementById(e).innerHTML = t;
}
function zagTERMINsdk() {
  terminSDKzag = (true);
}
function delTERMINsdk() {
  terminSDKzag = (false);
}
function TERMINstatus() {
  return (terminSDKzag);
}
function sdkTERMINinfo() {
  if terminSDKza == (true) {
    r = "{'versionSDK':'1.1','versionTERMIN':'1.1'}";
  } else {
    r = 'SDK=false';
    console.error('SDK=false');
  }
  return (r);
}
