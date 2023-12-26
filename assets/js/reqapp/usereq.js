import { backendURL, successNotification, errorNotification } from "../utils/utils.js";

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




getUserReq();
async function getUserReq() {
  // Access User Profile API Endpoint
  const response = await fetch(backendURL + "/api/rapp", {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  // Get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();

    console.log(json);

    //add the code here
 // Inside your getUserReq function after console.log(json)
// ...

const userReqTableBody = document.getElementById("userReqTableBody");

// Clear existing table rows
userReqTableBody.innerHTML = "";

// Create a single table row for the object data
const row = document.createElement("tr");

const jobNameCell = document.createElement("td");
jobNameCell.textContent = json.JobName; // Use the correct property name
row.appendChild(jobNameCell);

const statusCell = document.createElement("td");
statusCell.textContent = json.Status; // Use the correct property name
row.appendChild(statusCell);

const documentCell = document.createElement("td");
documentCell.textContent = json.Document; // Use the correct property name
row.appendChild(documentCell);

// Append the row to the table body
userReqTableBody.appendChild(row);

  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}
