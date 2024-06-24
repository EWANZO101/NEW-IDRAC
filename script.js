// script.js

document.addEventListener('DOMContentLoaded', () => {
    const powerOnBtn = document.getElementById('powerOnBtn');
    const powerOffBtn = document.getElementById('powerOffBtn');

    // Event listeners for buttons
    powerOnBtn.addEventListener('click', () => {
        fetch('/power-on', { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data
