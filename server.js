const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
const port = 3000; // Choose a port number

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Axios instance with https agent ignoring certificate errors
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

// Replace with your IDRAC details
const IDRAC_HOST = 'IP'; // Replace with your IDRAC IP address
const IDRAC_USERNAME = 'user'; // Replace with your IDRAC username
const IDRAC_PASSWORD = 'pass!'; // Replace with your IDRAC password

// Endpoint to power on IDRAC
app.post('/power-on', async (req, res) => {
    try {
        const response = await axiosInstance.post(
            `https://${IDRAC_HOST}/redfish/v1/Systems/System.Embedded.1/Actions/ComputerSystem.Reset`,
            {
                ResetType: 'On'
            },
            {
                auth: {
                    username: IDRAC_USERNAME,
                    password: IDRAC_PASSWORD
                }
            }
        );
        res.status(200).send('IDRAC powered on successfully');
    } catch (error) {
        console.error('Error powering on IDRAC:', error);
        res.status(500).send('Error powering on IDRAC');
    }
});

// Endpoint to power off IDRAC
app.post('/power-off', async (req, res) => {
    try {
        const response = await axiosInstance.post(
            `https://${IDRAC_HOST}/redfish/v1/Systems/System.Embedded.1/Actions/ComputerSystem.Reset`,
            {
                ResetType: 'ForceOff'
            },
            {
                auth: {
                    username: IDRAC_USERNAME,
                    password: IDRAC_PASSWORD
                }
            }
        );
        res.status(200).send('IDRAC powered off successfully');
    } catch (error) {
        console.error('Error powering off IDRAC:', error);
        res.status(500).send('Error powering off IDRAC');
    }
});

// Endpoint to get server status
app.get('/server-status', (req, res) => {
    // Simulating server status for demonstration
    const serverStatus = Math.random() < 0.8 ? 'online' : 'offline'; // Randomly set to online 80% of the time
    res.json({ status: serverStatus }); // Return server status as JSON
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
