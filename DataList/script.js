// script.js
document.getElementById('submitBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;

    if (!username || !address) {
        alert('Please enter your name and address');
        return;
    }

    const cardContainer = document.getElementById('submittedData');

    // Create new card element
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;

    // Add the card to the container
    cardContainer.appendChild(card);

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('address').value = '';
});
