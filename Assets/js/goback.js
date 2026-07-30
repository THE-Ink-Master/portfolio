function goback() {
  if (window.location.pathname.endsWith("/portfolio/")) {
    var newUrl = window.location.pathname.replace("/portfolio/", "");
    window.history.replaceState(null, null, newUrl);
    setTimeout(() => {
        window.location.reload();
    }, 1000); 
  } else if (window.location.pathname.endsWith("/portfolio")) {
    var newUrl = window.location.pathname.replace("/portfolio", "");
    window.history.replaceState(null, null, newUrl);
    setTimeout(() => {
        window.location.reload();
    }, 1000); 
  }
}