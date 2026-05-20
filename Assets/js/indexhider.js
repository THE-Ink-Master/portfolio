if (window.location.pathname.endsWith("index.html")) {
  var newUrl = window.location.pathname.replace("index.html", "");
  window.history.replaceState(null, null, newUrl);
}
