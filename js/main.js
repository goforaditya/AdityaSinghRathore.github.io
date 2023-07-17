let current_page = "";
let projects_data = [
  {
    title: "PAR Technology Machine Learning Engineer",
    duration: "April 2021 - Present (2 years 4 months)",
    description: "Developed AI products for Punchh Customer Engagement and Loyalty Platform for Customer Segmentation and Churn Prediction, Time Optimizations for Engagement Communications. Facilitating end-to-end Machine Learning life cycle from data gathering, preprocessing, finding signals from noisy data, ML model training, performance evaluation, Model deployment, Data Pipelines for egressing data, and integration with the backend. The technology stack was Flask, Fast API, Airflow, Kubernetes, Python, and Data Science libraries like Scikit, XGB, TensorFlow, Pandas, and Databricks (Clusters, Workflows, Connect).",
    image: "img/project1.jpg"
  }
];
let contact_form_data = {};

function loadContent(page) {
  current_page = page;
  // Load the content based on the current page
}

function navigateToPage(page) {
  // Navigate to the specified page
  loadContent(page);
}

function displayProjectDetails(projectIndex) {
  // Display the details of the specified project
  let project = projects_data[projectIndex];
  // Display the project details
}

function formSubmissionSuccess() {
  // Display a success message after form submission
}

function formSubmissionFailure() {
  // Display a failure message after form submission
}

function navigationSuccess() {
  // Display a success message after successful navigation
}

function navigationFailure() {
  // Display a failure message after unsuccessful navigation
}