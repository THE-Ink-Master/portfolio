function goback() {
  var path = window.location.pathname;
  if (path.endsWith("/portfolio/") || path.endsWith("/portfolio")) {
    var newUrl = path.replace(/\/portfolio\/?$/, "");
    window.location.href = newUrl + window.location.search;
  }
}