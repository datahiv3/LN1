# DataHive LN1

## Overview

DataHive LN1 is designed to facilitate the deployment and management of legal data nodes on a decentralized network. This project serves as the foundation for integrating legal data indexing, compliance processes, and streamlined node management.

For a more detailed breakdown of the objectives, functionalities, and deployment strategies, please refer to the [DataHive's NodeOps Legalese Node document](https://docs.google.com/document/d/1MSpGgoHzQXVXKEzcrpB8agnMJHcKFk4CTl3maxre-kg/edit?usp=sharing) on Google Drive.

This document includes comprehensive information about the NodeOps Legalese Node's roadmap, technical specifications, and key objectives. Team members can request access through our Telegram group if needed.

## Table of Contents

1. [Overview](#overview)
2. [Branches](#branches)
3. [Developments](#developments)
4. [Installation](#installation)
5. [Start](#start)
6. [Usage](#usage)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [Troubleshooting](#troubleshooting)
10. [License](#license)

## Branches

- **`main` branch**: Represents the staging environment. Commits made to this branch trigger the CI/CD pipeline for staging deployment.
- **`releases/*` branches**: Represent production environments with each branch tied to a specific version.
- **`production` branch**: Represents the live production environment for final deployment, merged from specific `releases/*` branches.

## Developments

### Requirements

- [VSCode](https://code.visualstudio.com/) (recommended code editor)
- [NodeJS (v20.17.0)](https://nodejs.org/) (JavaScript runtime)
- [pnpm (v9.12.0)](https://pnpm.io/) (fast and efficient package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone --recurse-submodules https://github.com/datahive3/LN1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LN1
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Start

### Contracts

#### Building Contracts

To build the smart contracts, run:
```bash
pnpm compile
```

#### Testing Contracts

To run the tests for smart contracts:
```bash
pnpm test
```

#### Usage

### UI Setup

1. **Configure Environment Variables:**
   - Copy the example environment file:
     ```bash
     cp view/.env.example view/.env
     ```
   - Open the newly created `.env` file and fill in any necessary configuration details specific to your setup (e.g., API endpoints, authentication keys).

2. **Start the UI:**
   - From the root of the project directory, you can start the UI by running:
     ```bash
     pnpm start:view
     ```
   - Alternatively, navigate to the `view` directory and use the following command:
     ```bash
     pnpm start
     ```
   - **Expected Outcome:** This will launch the front-end interface of the application, typically accessible through `http://localhost:5173` or the specified port in your `.env` file.

3. **Verify the UI:**
   - Open a web browser and navigate to the local URL to ensure the UI is running as expected.

### Server Setup

1. **Configure Environment Variables for the Server:**
   - Copy the example environment file for the server:
     ```bash
     cp services/.env.example services/.env
     ```
   - Update the `.env` file with any required environment variables specific to the server configuration (e.g., database URLs, API tokens).

2. **Start the Server:**
   - From the root directory, start the server with:
     ```bash
     pnpm start:services
     ```
   - Alternatively, you can navigate directly to the `services` directory and start the server using:
     ```bash
     pnpm start
     ```
   - **Expected Outcome:** The server will start running, typically accessible through `http://localhost:3030` or another specified port.

3. **Check Server Status:**
   - Verify that the server is running properly by checking the server logs for any errors or issues during the startup process.
   - Use API testing tools like Postman or curl to test the server endpoints to ensure they respond correctly.

### Local Node Setup

cd to `contracts`

```bash
pnpm node
```

### Local Subgraph Setup

```bash
```

## Deployment

Detailed deployment steps using GitHub Actions:
- Refer to the `.github` directory for the CI/CD pipeline configurations.
- Make sure to merge changes from the staging environment to production carefully.

## Contributing

Private repo. Contibutors include: P10, NodeOps, and DataHive. 

### Communication and Coordination

- **Real-Time Collaboration:** Use our Telegram group for immediate discussions, task coordination, and updates.
- **Higher-Level Documentation:** All project-related documentation is available on our Google Drive. Request access through Telegram if needed.


## Troubleshooting

- **Issue**: Installation fails.
  - **Solution**: Ensure you have the correct versions of Node.js and pnpm installed.
- **Issue**: Server fails to start.
  - **Solution**: Check the `.env` file for proper configuration settings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.