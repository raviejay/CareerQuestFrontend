import { backendURL, successNotification, errorNotification } from "../utils/utils.js";


// Form Register
const form_login2 = document.getElementById("form_login2");

form_login2.onsubmit = async (e) => {
  e.preventDefault();

  console.log("ma click ni siya");
  // Disable Button
  document.querySelector("#form_login2 button").disabled = true;
  document.querySelector(
    "#form_login2 button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

  // Get Values of Form (input, textarea, select) set it as form-data
  const formData = new FormData(form_login2);

  // Fetch API User Register Endpoint
  const response = await fetch(backendURL + "/api/login2", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  // Get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();
    console.log(json);

    localStorage.setItem("token", json.token);

    form_login2.reset();

    successNotification("Successfully Login", 5);

    window.location.pathname = "/adminpanel.html";
  }
  // Get response if 422 status code
  else if (response.status == 422) {
    const json = await response.json();

    errorNotification(json.message, 5);
  }

  // Enable Button
  document.querySelector("#form_login2 button").disabled = false;
  document.querySelector("#form_login2 button").innerHTML = `Login`;
};

