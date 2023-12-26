import { backendURL, successNotification, errorNotification } from "../utils/utils.js";
// Retrieve job_id from localStorage
const jobId = localStorage.getItem("job_id");
const jobName = localStorage.getItem("job_name");
const jobDesc = localStorage.getItem("job_desc");

// Log the value to the console
console.log(jobId);

document.getElementById("jobId").value = jobId;
document.getElementById("jobName").textContent = jobName;
document.getElementById("jobDesc").textContent = jobDesc;


const btn_logout = document.getElementById("btn_logout");
btn_logout.onclick = async () => {
  // Access Logout API Endpoint
  const response = await fetch(backendURL + "/api/logout", {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  
  // Get response if 200-299 status code
  if (response.ok) {
    // Clear Tokens
    localStorage.clear();

    alert("Logout Successfully!!")
    // Redirect Page
    window.location.pathname = "/login.html";
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    alert(json.message);
  }
};



// Form Register
const form_reqapp = document.getElementById("form_reqapp");
form_reqapp.onsubmit = async (e) => {
  e.preventDefault();

  console.log("ma click ni siya");
  // Disable Button
  document.querySelector("#form_reqapp button").disabled = true;
  document.querySelector(
    "#form_reqapp button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                    </div>
                    <span>Loading...</span>`;

  // Get Values of Form (input, textarea, select) set it as form-data
  const formData = new FormData(form_reqapp);

  // Fetch API User Register Endpoint
  const response = await fetch(backendURL + "/api/rapp", {
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
    
    form_reqapp.reset();

    alert("Successfully Request Application");

    window.location.pathname = "/usereq.html";
    
  }
  // Get response if 422 status code
  else if (response.status == 422) {
    const json = await response.json();
    console.log(json.message);

    alert(json.message);
  }

  // Enable Button
  document.querySelector("#form_reqapp button").disabled = false;
  document.querySelector("#form_reqapp button").innerHTML = `Submit`;
};



