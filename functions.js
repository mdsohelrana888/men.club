  // Function to show the correct game detail
  function showDetails(websiteId) {
    // Hide all details
    document.querySelectorAll('.game-details').forEach(function(detail) {
        detail.classList.remove('active');
    });

    // Show the specific detail
    const detailElement = document.getElementById('detail' + websiteId);
    if (detailElement) {
        detailElement.classList.add('active');
    }
}

// Check the URL to determine which button was clicked
const urlParams = new URLSearchParams(window.location.search);
const websiteId = urlParams.get('website');
if (websiteId) {
    showDetails(websiteId);
}u