// script.js

const statusIndicator = document.getElementById('statusIndicator');
const serverStatusText = document.getElementById('serverStatus');

function updateServerStatusIndicator(status) {
    switch (status) {
        case 'online':
            statusIndicator.classList.remove('bg-yellow-500', 'bg-red-500');
            statusIndicator.classList.add('bg-green-500');
            break;
        case 'offline':
            statusIndicator.classList.remove('bg-yellow-500', 'bg-green-500');
            statusIndicator.classList.add('bg-red-500');
            break;
        case 'starting':
            statusIndicator.classList.remove('bg-green-500', 'bg-red-500');
            statusIndicator.classList.add('bg-yellow-500');
            break;
        default:
            statusIndicator.classList.remove('bg-green-500', 'bg-red-500', 'bg-yellow-500');
    }
}

async function fetchServerStatus() {
    try {
        const response = await fetch('/server-status');
        if (!response.ok) {
            throw new Error('Failed to fetch server status');
        }
        const data = await response.json();
        const { status } = data;
        serverStatusText.textContent = status.toUpperCase();
        updateServerStatusIndicator(status);
    } catch (error) {
        console.error('Error fetching server status:', error);
        serverStatusText.textContent = 'ERROR';
        statusIndicator.classList.remove('bg-green-500', 'bg-red-500', 'bg-yellow-500');
    }
}

// Initial fetch on page load
fetchServerStatus();

// Periodically fetch server status every 5 seconds
setInterval(fetchServerStatus, 5000);

// Event listeners for power on and power off buttons (dummy implementation)
document.getElementById('powerOnBtn').addEventListener('click', async () => {
    try {
        await fetch('/power-on', { method: 'POST' });
        console.log('IDRAC powered on successfully');
        fetchServerStatus(); // Update status immediately after action
    } catch (error) {
        console.error('Error powering on IDRAC:', error);
    }
});

document.getElementById('powerOffBtn').addEventListener('click', async () => {
    try {
        await fetch('/power-off', { method: 'POST' });
        console.log('IDRAC powered off successfully');
        fetchServerStatus(); // Update status immediately after action
    } catch (error) {
        console.error('Error powering off IDRAC:', error);
    }
});
