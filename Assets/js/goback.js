function goback() {
  if (window.location.pathname.endsWith("/portfolio")) {
    var newUrl = window.location.pathname.replace("/portfolio", "");
    window.history.replaceState(null, null, newUrl);
    window.location.reload();
  }
}