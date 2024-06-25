
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"Before adding your iDRAC details and making them public, ensure you implement some form of login or access control. An easy option to set up is Cloudflare Access. Here is a link to Cloudflare Access: https://developers.cloudflare.com/cloudflare-one/identity/one-time-pin/


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






Changes to Make:

Find the following section in server.js:

javascript

// Replace with your IDRAC details
const IDRAC_HOST = '192.168.4.10'; // Replace with your IDRAC IP address
const IDRAC_USERNAME = 'asmin'; // Replace with your IDRAC username
const IDRAC_PASSWORD = 'pass'; // Replace with your IDRAC password

Instructions:

    IDRAC Host: Replace '192.168.4.10' with your IDRAC's IP address.

    IDRAC Username: Replace 'asmin' with your IDRAC username.

    IDRAC Password: Replace 'pass' with your IDRAC password.

Important Notes:

    Please ensure that you only modify the specified lines in server.js.
    Leave all other code unchanged unless you are familiar with its functionality.
    This configuration has been tested with a local IP address. If you encounter issues, a public IP configuration file will be provided soon.










Summary

    server.js: Sets up the Express server to handle power on/off requests and server status updates.
    public/index.html: Provides the HTML structure with Tailwind CSS classes for styling and interactive buttons.
    public/script.js: Handles client-side logic to send requests to the server for powering on/off and updating server status.














# IDRAC Web Panel

Project structure:

- `idrac-web-panel/`
  - `public/`
    - `index.html`
    - `style.css`
    - `script.js`
  - `server.js`
  - `README.md`

## Setup Instructions

### Setup Commands

```bash
# Update package index and install Node.js and npm
sudo apt update
sudo apt install nodejs npm

# Check Node.js and npm Versions
node -v
npm -v

# Initialize Node.js Project
mkdir idrac-web-panel
cd idrac-web-panel
npm init -y

# Install Required Packages
npm install express axios body-parser

# Create Public Directory and Files
mkdir public
cd public
touch index.html style.css script.js server.js






SIMPLY nano into all files 

index.html style.css script.js server.js
and paste the code in each of the files i made and save and it should work 




to start your project ---- COPY PASTE =   node server.js    

