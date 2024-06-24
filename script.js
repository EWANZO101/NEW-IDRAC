// script.js

document.addEventListener('DOMContentLoaded', () => {
    const powerOnBtn = document.getElementById('powerOnBtn');
    const powerOffBtn = document.getElementById('powerOffBtn');
    const serverStatusElem = document.getElementById('serverStatus');

    // Event listener for Power On button
    powerOnBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/power-on', { method: 'POST' });
            if (response.ok) {
                console.log('IDRAC powered on successfully');
                // Optionally update UI or show notification
            } else {
                console.error('Failed to power on IDRAC');
                // Optionally show error message or retry logic
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network or fetch errors
        }
    });

    // Event listener for Power Off button
    powerOffBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/power-off', { method: 'POST' });
            if (response.ok) {
                console.log('IDRAC powered off successfully');
                // Optionally update UI or show notification
            } else {
                console.error('Failed to power off IDRAC');
                // Optionally show error message or retry logic
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network or fetch errors
        }
    });

    // Function to fetch and update server status
    async function updateServerStatus() {
        try {
            const response = await fetch('/server-status');
            if (response.ok) {
                const data = await response.json();
                serverStatusElem.textContent = data.status.toUpperCase();
            } else {
                console.error('Failed to fetch server status');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Initial fetch for server status
    updateServerStatus();

    // Periodically update server status (every 10 seconds)
    setInterval(updateServerStatus, 10000);
});
