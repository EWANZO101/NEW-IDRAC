# IDRAC Web Panel Setup

## Setup Commands

```bash
sudo apt update
sudo apt install nodejs npm

node -v
npm -v


mkdir idrac-web-panel
cd idrac-web-panel
npm init -y


npm install express axios body-parser


mkdir public
cd public
touch index.html style.css script.js




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IDRAC Web Panel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>IDRAC Web Panel</h1>
        <div class="buttons">
            <button id="powerOnBtn">Power On</button>
            <button id="powerOffBtn">Power Off</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>





/* style.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #333;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
}

button:hover {
    background-color: #ddd;
}









// server.js

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
const port = 3000; // Port on which your server will run
const IDRAC_HOST = '192.168.1.5'; // Replace with your IDRAC IP address
const IDRAC_USERNAME = 'user'; // Replace with your IDRAC username
const IDRAC_PASSWORD = 'pass'; // Replace with your IDRAC password

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Axios instance with https agent ignoring certificate errors
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

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

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




node server.js
