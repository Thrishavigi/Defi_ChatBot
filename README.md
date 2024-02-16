# AI-Driven Chatbot for Decentralized Finance (DeFi) Services
## Project Description
The AI-driven chatbot project aims to streamline user access to decentralized finance (DeFi) services by leveraging cutting-edge technologies. Through seamless integration with the aeternity ecosystem, Sophia Smart Contracts, and the Superhero Wallet, the chatbot offers personalized recommendations, analysis of on-chain data, and intuitive conversational interfaces. This README provides a comprehensive overview of the project, including its objectives, technological stack, setup instructions, and contribution guidelines.
## Table of Contents
1. Project Description
2. Tech Stack
3. Installation
4. Usage
5. Deployment
   
## Tech Stack
**Frontend**: HTML5, CSS3, React.js or Angular

**Backend**: Python with Flask or Django frameworks

**Integration**: Superhero Wallet SDK for secure access to services, Matrix chat API for real-time communication

**Smart Contracts**: Utilization of Sophia Smart Contracts for secure and efficient execution of DeFi transactions

**Blockchain Interoperability**: Smart contracts facilitate interoperability with various blockchain platforms

**Cloud Infrastructure**: Deployment on cloud infrastructure ensures scalability, reliability, and security

## Installation

### Prerequisites 📋

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) installed for managing dependencies.


- [MongoDB](https://www.mongodb.com/) installed and running locally or accessible via a remote server.


- [Express.js](https://expressjs.com/) installed for building web applications with Node.js.

- [Sophia](https://aeternity.com/aepp-sophia/) compiler for compiling Ae contracts.

- A web browser (e.g., Google Chrome, Mozilla Firefox, Safari) installed on your device.

- An API service with endpoints for sending messages, such as `ApiService.sendMessage(message)`.

- React.js framework installed for building user interfaces.

- Aeternity node or a testnet environment to deploy and interact with the contract.

## Deployment

To deploy this project run

```bash
  npm run deploy
```

### Backend 
1. Install Dependencies:

```bash

npm install
```

2. Set Environment Variables:
Create a '.env' file in the root directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/defi_chatbot
JWT_SECRET=6kP#sZ!3M&T*8c$y@L#q2gF^xW!7bH@E
```
3. Run the Backend Server:

```bash
npm start
```
### Smart Contract 
1. Compile Smart Contract:
Compile your Sophia smart contract using the Sophia compiler or Æternity IDE.

2. Deploy Smart Contract:
Deploy the compiled contract on the Æternity blockchain using the provided deployment tools.


### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Run the frontend development server:
    ```bash
    npm start
    ```

4. Build for production:
    ```bash
    npm run build
    ```

5. Deploy the built files to a web server or use a service like Net

   ![](https://github.com/Thrishavigi/Defi_ChatBot/blob/main/Defi_ChatBot/defi-chatbot/1.jpg?raw=true)
   ![](/images/1.jpg)
   ![](/images/1.jpg)
   ![](/images/1.jpg)

## Usage
Once the project is set up, you can access the chatbot interface through the provided URL. Use the chat interface to interact with the chatbot, receive personalized recommendations, and access DeFi services seamlessly.
