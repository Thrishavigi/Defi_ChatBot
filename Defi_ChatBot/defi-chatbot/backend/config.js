// config.js
module.exports = {
    PORT: process.env.PORT || 3000, // Port number for the server
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/defi_chatbot', // MongoDB connection URI
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret' // Secret key for JWT authentication
  };
  