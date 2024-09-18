// Array containing button details
const buttonDetails = [
    {
        id: 'betfairButton',
        url: 'https://www.betfair.com/',
        title: 'Betfair',
        country: 'United Kingdom'
    },
    {
        id: 'exampleButton2',
        url: 'https://www.example2.com/',
        title: 'Example Site 2',
        country: 'USA'
    },
    {
        id: 'exampleButton3',
        url: 'https://www.example3.com/',
        title: 'Example Site 3',
        country: 'Canada'
    }
    // Add more objects as needed
];

// Function to update the details section
function updateDetails(buttonId) {
    const details = buttonDetails.find(btn => btn.id === buttonId);
    if (details) {
        document.getElementById('siteName').textContent = details.title;
        document.getElementById('countryName').textContent = `Country: ${details.country}`;
        const visitButton = document.getElementById('visitButton');
        visitButton.href = details.url;
        visitButton.textContent = `Visit ${details.title}`;
    }
}

// Event listener for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.golden-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonId = this.id;
            updateDetails(buttonId);
        });
    });
});
