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


getAllProccessingReq();
async function getAllProccessingReq() {

  // Access User Profile API Endpoint
  const response = await fetch(backendURL + "/api/rappP", {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  // Get response if 200-299 status code
if (response.ok) {
    const json = await response.json();

    let htmlContent = "";

    // Add the table header row
    htmlContent += `
      <div class="table-container">
        <div class="table-row">
          <div class="table-cell">Index</div>
          <div class="table-cell">rapp_id</div>
          <div class="table-cell">app_id</div>
          <div class="table-cell">job_id</div>
          <div class="table-cell">Document</div>
          <div class="table-cell">Status</div>
          <div class="table-cell">Actions</div> <!-- New cell for buttons -->
          <!-- Add more columns if needed -->
        </div>`;

    // Populate the table with data
    json.forEach((element, index) => {
      // Increment index by 1 to start from 1
      const currentIndex = index + 1;
      htmlContent += `
        <div class="table-row">
          <div class="table-cell">${currentIndex}</div>
          <div class="table-cell">${element.rapp_id}</div>
          <div class="table-cell">${element.app_id}</div>
          <div class="table-cell">${element.job_id}</div>
          <div class="table-cell">
                <img src="${backendURL}/storage/${element.Document}" alt="Image" style="max-width: 100px; max-height: 100px;">
          </div>
          <div class="table-cell">${element.status}</div>
          <div class="table-cell">
            <button onclick="window.reject(${element.rapp_id})">Reject</button>
            <button onclick="window.approve(${element.rapp_id})">Approve</button>
          </div>
          <!-- Add more cells if needed -->
        </div>`;
    });

    // Close the table container
    htmlContent += `</div>`;

    const jobsContainer = document.getElementById("reqss_container");
    jobsContainer.innerHTML = htmlContent;

    console.log(json);
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}

getAllApproveReq();
async function getAllApproveReq() {

  // Access User Profile API Endpoint
  const response = await fetch(backendURL + "/api/rappA", {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  // Get response if 200-299 status code
if (response.ok) {
    const json = await response.json();

    let htmlContent = "";

    // Add the table header row
    htmlContent += `
      <div class="table-container">
        <div class="table-row">
          <div class="table-cell">Index</div>
          <div class="table-cell">rapp_id</div>
          <div class="table-cell">app_id</div>
          <div class="table-cell">job_id</div>
          <div class="table-cell">Document</div>
          <div class="table-cell">Status</div>
          <div class="table-cell">Actions</div> <!-- New cell for buttons -->
          <!-- Add more columns if needed -->
        </div>`;

    // Populate the table with data
    json.forEach((element, index) => {
      // Increment index by 1 to start from 1
      const currentIndex = index + 1;
      htmlContent += `
        <div class="table-row">
          <div class="table-cell">${currentIndex}</div>
          <div class="table-cell">${element.rapp_id}</div>
          <div class="table-cell">${element.app_id}</div>
          <div class="table-cell">${element.job_id}</div>
          <div class="table-cell">
                <img src="${backendURL}/storage/${element.Document}" alt="Image" style="max-width: 100px; max-height: 100px;">
          </div>
          <div class="table-cell">${element.status}</div>
          <div class="table-cell">
            <button onclick="window.delete(${element.rapp_id})">Delete</button>
          </div>
          <!-- Add more cells if needed -->
        </div>`;
    });

    // Close the table container
    htmlContent += `</div>`;

    const jobsContainer = document.getElementById("reqsApp_container");
    jobsContainer.innerHTML = htmlContent;

    console.log(json);
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}
getAllRejectReq();
async function getAllRejectReq() {

  // Access User Profile API Endpoint
  const response = await fetch(backendURL + "/api/rappR", {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  // Get response if 200-299 status code
if (response.ok) {
    const json = await response.json();

    let htmlContent = "";

    // Add the table header row
    htmlContent += `
      <div class="table-container">
        <div class="table-row">
          <div class="table-cell">Index</div>
          <div class="table-cell">rapp_id</div>
          <div class="table-cell">app_id</div>
          <div class="table-cell">job_id</div>
          <div class="table-cell">Document</div>
          <div class="table-cell">Status</div>
          <div class="table-cell">Actions</div> <!-- New cell for buttons -->
          <!-- Add more columns if needed -->
        </div>`;

    // Populate the table with data
    json.forEach((element, index) => {
      // Increment index by 1 to start from 1
      const currentIndex = index + 1;
      htmlContent += `
        <div class="table-row">
          <div class="table-cell">${currentIndex}</div>
          <div class="table-cell">${element.rapp_id}</div>
          <div class="table-cell">${element.app_id}</div>
          <div class="table-cell">${element.job_id}</div>
          <div class="table-cell">
                <img src="${backendURL}/storage/${element.Document}" alt="Image" style="max-width: 100px; max-height: 100px;">
          </div>
          <div class="table-cell">${element.status}</div>
          <div class="table-cell">
            <button onclick="window.delete(${element.rapp_id})">Delete</button>
          </div>
          <!-- Add more cells if needed -->
        </div>`;
    });

    // Close the table container
    htmlContent += `</div>`;

    const jobsContainer = document.getElementById("reqsRej_container");
    jobsContainer.innerHTML = htmlContent;

    console.log(json);
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}
async function deleteRequest(rappId) {
  try {
    const response = await fetch(backendURL + "/api/rapp/" + rappId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.ok) {
      console.log(`Request with rapp_id ${rappId} deleted successfully.`);
    } else {
      const json = await response.json();
      console.error(`Failed to delete request with rapp_id ${rappId}. ${json.message}`);
    }
  } catch (error) {
    console.error(`Error while deleting request with rapp_id ${rappId}. ${error.message}`);
  }
}

async function approve(rappId) {
  try {
    const response = await fetch(backendURL + "/api/rapp/" + rappId, {
      method: "PUT", // Use PUT for update operations
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        status: "approve", // Include the new status in the request body
      }),
    });

    if (response.ok) {
      console.log(`Request with rapp_id ${rappId} approved successfully.`);
      // Optionally, update the status in the UI without making another request
    } else {
      const json = await response.json();
      console.error(`Failed to approve request with rapp_id ${rappId}. ${json.message}`);
    }
  } catch (error) {
    console.error(`Error while approving request with rapp_id ${rappId}. ${error.message}`);
  }
}

async function rejects(rappId) {
  try {
    const response = await fetch(backendURL + "/api/rapp/" + rappId, {
      method: "PUT", // Use PUT for update operations
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        status: "reject", // Include the new status in the request body
      }),
    });

    if (response.ok) {
      console.log(`Request with rapp_id ${rappId} rejected successfully.`);
      // Optionally, update the status in the UI without making another request
    } else {
      const json = await response.json();
      console.error(`Failed to reject request with rapp_id ${rappId}. ${json.message}`);
    }
  } catch (error) {
    console.error(`Error while reject request with rapp_id ${rappId}. ${error.message}`);
  }
}


// Add functions for Reject and Approve actions
function initialize() {
  // Your existing code here...

 // Add functions for Reject and Approve actions
 window.reject = async function(rappId) {
  await rejects(rappId);
  // Add any additional logic after rejecting
  refreshPage(); // Add this line to refresh the page
}

window.approve = async function(rappId) {
  await approve(rappId);
  // Add any additional logic after approving
  refreshPage(); // Add this line to refresh the page
}

window.delete = async function(rappId) {
  await deleteRequest(rappId);
  // Add any additional logic after deleting
  refreshPage(); // Add this line to refresh the page
}

function refreshPage() {
  // Reload the current page
  location.reload();
}

}


// Call the initialize function when the page is loaded
document.addEventListener("DOMContentLoaded", initialize);

document.addEventListener('DOMContentLoaded', function () {
  // Handle sidebar navigation clicks
  var sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = this.getAttribute('data-target');
      var target = document.querySelector(targetId);

      // Hide all content containers
      var contentContainers = document.querySelectorAll('.content-container');
      contentContainers.forEach(function (container) {
        container.classList.add('d-none');
      });

      // Show the selected content container
      if (target) {
        target.classList.remove('d-none');
      }
    });
  });
});