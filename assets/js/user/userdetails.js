import { backendURL, successNotification, errorNotification } from "../utils/utils.js";

const btn_logout = document.getElementById("btn_logout");
btn_logout.onclick = async () => {
  // Access Logout API Endpoint
  const response = await fetch(backendURL + "/api/logout", {
    headers: {
      Accept: "application/json",
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

getUserDetails();
async function getUserDetails() {
  // Access User Profile API Endpoin

  const response = await fetch(backendURL + "/api/info/" + localStorage.getItem("acc_id"), {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  // Get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();

    // Display the data in HTML elements
    document.getElementById("fname").textContent = json.Fname;
    document.getElementById("lname").textContent = json.Lname;
    document.getElementById("age").textContent = json.Age;
    document.getElementById("gender").textContent = json.Gender;
    document.getElementById("email").textContent = json.Email;
    document.getElementById("address").textContent = json.Address;
    document.getElementById("birth_date").textContent = json.Birth_date;
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}

// Export the function to make it accessible in other files
