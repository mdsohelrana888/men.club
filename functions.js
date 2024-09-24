  // Function to show the correct game detail
  function showDetails(casinosId) {
    // Hide all details
    document.querySelectorAll('.game-details').forEach(function(detail) {
        detail.classList.remove('active');
    });

    // Show the specific detail
    const detailElement = document.getElementById('detail' + casinosId);
    if (detailElement) {
        detailElement.classList.add('active');
    }
}

// Check the URL to determine which button was clicked
const urlParams = new URLSearchParams(window.location.search);
const casinosId = urlParams.get('casinos');
if (casinosId) {
    showDetails(casinosId);
}