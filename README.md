# IDRAC Web Panel
``├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
└── README.md```
## Setup Instructions

### Setup Commands

```bash
sudo apt update
sudo apt install nodejs npm


Check Node.js and npm Versions:
node -v
npm -v

Initialize Node.js Project
mkdir idrac-web-panel
cd idrac-web-panel
npm init -y


Install Required Packages

npm install express axios body-parser


Create Public Directory and Files

mkdir public
cd public
touch index.html style.css script.js



to start

node server.js
