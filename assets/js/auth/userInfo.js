import { backendURL, successNotification, errorNotification } from "../utils/utils.js";



// Form Register
const form_userInfo = document.getElementById("form_userInfo");

form_userInfo.onsubmit = async (e) => {
  e.preventDefault();

  console.log("ma click ni siya");
  // Disable Button
  document.querySelector("#form_userInfo button").disabled = true;
  document.querySelector(
    "#form_userInfo button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

  // Get Values of Form (input, textarea, select) set it as form-data
  const formData = new FormData(form_userInfo);

  // Fetch API User Register Endpoint
  const response = await fetch(backendURL + "/api/info", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  });

  // Get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();
    console.log(json);

    form_userInfo.reset();

    successNotification("Successfully Enter Credintials");

    window.location.pathname = "/dashboard.html";
    
  }
  // Get response if 422 status code
  else if (response.status == 422) {
    const json = await response.json();
    console.log(json.message);

    errorNotification(json.message, 5);
  }

  // Enable Button
  document.querySelector("#form_userInfo button").disabled = false;
  document.querySelector("#form_userInfo button").innerHTML = `Submit`;
};
