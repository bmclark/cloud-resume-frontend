// Make a GET request to the API endpoint
fetch(
  "https://ayekxuf816.execute-api.us-east-1.amazonaws.com/cloud-resume-visitors"
)
  .then((response) => response.json())
  .then((data) => {
    // Display the visitor count on the webpage
    const visitorCount = data.count;
    document.getElementById("visitor-count").textContent = visitorCount;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
