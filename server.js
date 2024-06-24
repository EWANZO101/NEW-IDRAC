// script.js

document.addEventListener('DOMContentLoaded', () => {
    const powerOnBtn = document.getElementById('powerOnBtn');
    const powerOffBtn = document.getElementById('powerOffBtn');
    const statusIndicator = document.getElementById('statusIndicator');
    const serverStatusElem = document.getElementById('serverStatus');

    // Event listener for Power On button
    powerOnBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/power-on', { method: 'POST' });
            if (response.ok) {
                console.log('IDRAC powered on successfully');
                updateServerStatus();
            } else {
                console.error('Failed to power on IDRAC');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Event listener for Power Off button
    powerOffBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/power-off', { method: 'POST' });
            if (response.ok) {
                console.log('IDRAC powered off successfully');
                updateServerStatus();
            } else {
                console.error('Failed to power off IDRAC');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Function to fetch and update server status
    async function updateServerStatus() {
        try {
            const response = await fetch('/server-status');
            if (response.ok) {
                const data = await response.json();
                displayServerStatus(data.status);
            } else {
                console.error('Failed to fetch server status');
                displayServerStatus('offline'); // Fallback to offline status
            }
        } catch (error) {
            console.error('Error:', error);
            displayServerStatus('offline'); // Fallback to offline status
        }
    }

    // Function to update UI based on server status
    function displayServerStatus(status) {
        let statusText = '';
        let statusClass = '';

        switch (status) {
            case 'online':
                statusText = 'Online';
                statusClass = 'status-green';
                break;
            case 'offline':
                statusText = 'Offline';
                statusClass = 'status-red';
                break;
            default:
                statusText = 'Starting';
                statusClass = 'status-yellow';
                break;
        }

        serverStatusElem.textContent = statusText;
        statusIndicator.className = `w-12 h-12 mx-auto mb-2 rounded-full ${statusClass}`;
    }

    // Initial fetch for server status
    updateServerStatus();

    // Periodically update server status (every 10 seconds)
    setInterval(updateServerStatus, 10000);
});
