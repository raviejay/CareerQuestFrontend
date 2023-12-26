import { backendURL, successNotification, errorNotification } from "../utils/utils.js";


// Form Register
const form_register = document.getElementById("form_register");

form_register.onsubmit = async (e) => {
  e.preventDefault();

  // Disable Button
  document.querySelector("#form_register button").disabled = true;
  document.querySelector(
    "#form_register button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

  // Get Values of Form (input, textarea, select) set it as form-data
  const formData = new FormData(form_register);

  // Fetch API User Register Endpoint
  const response = await fetch(backendURL + "/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  // Get response if 200-299 status code
  if (response.ok) {
    // Perform login after successful registration
    const loginResponse = await fetch(backendURL + "/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData, // Use the same form data for login
    });

    if (loginResponse.ok) {
      const json = await loginResponse.json();
      // Reset registration form
      form_register.reset();

      localStorage.setItem("token", json.token);

      // Display success notification for registration
      successNotification("Successfully registered and logged in.", 5);
      
      // Redirect to user info page
      window.location.pathname = "/userInfo.html";
    } else {
      // Display error notification for login
      const loginJson = await loginResponse.json();
      errorNotification(loginJson.message, 5);
    }
  }
  // Get response if 422 status code
  else if (response.status == 422) {
    const json = await response.json();

    errorNotification(json.message, 5);
  }
  
  // Enable Button
  document.querySelector("#form_register button").disabled = false;
  document.querySelector("#form_register button").innerHTML = `Create Account`;
};
