import { backendURL, successNotification, errorNotification } from "../utils/utils.js";

// Logout Btn
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





getAvailaJobs();
async function getAvailaJobs(keyword = "") {

  // Access User Profile API Endpoint
  const response = await fetch(backendURL + "/api/job?keyword=" + keyword, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  
  // Get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();

    console.log(json.Description);

    let htmlContent = "";

    // Assuming json is an array containing job information
    json.forEach((element) => {
      // Customize the HTML structure based on your job data
      htmlContent += `
      <div class="col-lg-8 mx-auto col-md-5 mb-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="card shadow mx-auto">
          <div class="row">
            <div class="col-md-8">
              <!-- Content column -->
              <div class="card-body d-flex justify-content-between">
                <div class="text-left">
                  <h3 style="color: #07d5c0;">${element.job_name}</h3>
                  <p class="text-ellipsis">${element.Description}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <!-- Button column -->
              <div class="card-body d-flex justify-content-end">
              <button class="btn-buy align-self-end ml-3">
                Apply Now
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });


    // Append the HTML content to the container (e.g., a div with id "jobs-container")
    const jobsContainer = document.getElementById("jobs_container");
    jobsContainer.innerHTML = htmlContent;

    
      // Add event listeners to Apply Now buttons
      const applyButtons = document.querySelectorAll('.btn-buy');
      applyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

          let job_name = json[index].job_name;
          let job_desc = json[index].Description;
          let job_id = json[index].job_id;
           localStorage.setItem("job_name", job_name);
           localStorage.setItem("job_desc", job_desc);
           localStorage.setItem("job_id", job_id);
          window.location.pathname = '/reqapp.html';

        });
      });

  
  }
  // Get response if 400 or 500 status code
  else {
    const json = await response.json();

    errorNotification(json.message, 10);
  }
}



// Search Form
const message_search_form = document.getElementById("message_search_form");
message_search_form.onsubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(message_search_form);
  const keyword = formData.get("keyword");

  getAvailaJobs(keyword);
};





  






