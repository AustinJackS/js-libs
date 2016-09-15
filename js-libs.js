function loadScript(url) {
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.code = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
  eval(window.code)
}
