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
touch index.html style.css script.js
