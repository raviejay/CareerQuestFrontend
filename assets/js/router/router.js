function setRouter() {
    switch (window.location.pathname) {
      // If you are logged in you cant access outside pages; redirect to dashboard
      case "/":
      case "/login.html":
      case "/index.html":
        if (localStorage.getItem("token")) {
          window.location.pathname = "/dashboard.html";
        }
        break;
  
      // If you are not logged in you cant access dashboard pages; redirect to /
      case "/dashboard.html":
        if (!localStorage.getItem("token")) {
          window.location.pathname = "/";
        }
        break;
  
      default:
        break;
    }
  }
  
  export { setRouter };