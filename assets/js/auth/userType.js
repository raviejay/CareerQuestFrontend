document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the login button
    var loginButton = document.querySelector("#form_loginAs button");
    loginButton.addEventListener("click", redirectBasedOnLoginType);
});

function redirectBasedOnLoginType() {
    // Get the selected login type
    var selectedLoginType = document.getElementById("loginType").value;

    // Redirect based on the selected login type
    if (selectedLoginType === "user") {
        window.location.pathname = "/login.html";
    } else if (selectedLoginType === "admin") {
        window.location.pathname = "/login2.html";
    }
}