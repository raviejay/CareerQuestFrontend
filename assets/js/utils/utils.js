import { setRouter } from "../router/router.js";

const backendURL = 'https://37fc-120-28-216-201.ngrok-free.app/QuestCareer/public';
// Set Router
setRouter();


// Notifications
function successNotification(message, seconds = 0) {
    document.querySelector(".alert-success").classList.remove("d-none");
    document.querySelector(".alert-success").classList.add("d-block");
    document.querySelector(".alert-success").innerHTML = message;
  
    if (seconds != 0) {
      setTimeout(function () {
        document.querySelector(".alert-success").classList.remove("d-block");
        document.querySelector(".alert-success").classList.add("d-none");
      }, seconds * 1000);
    }
  }
  
  function errorNotification(message, seconds = 0) {
    document.querySelector(".alert-danger").classList.remove("d-none");
    document.querySelector(".alert-danger").classList.add("d-block");
    document.querySelector(".alert-danger").innerHTML = message;
  
    if (seconds != 0) {
      setTimeout(function () {
        document.querySelector(".alert-danger").classList.remove("d-block");
        document.querySelector(".alert-danger").classList.add("d-none");
      }, seconds * 1000);
    }
  }
  
export { backendURL, successNotification, errorNotification}