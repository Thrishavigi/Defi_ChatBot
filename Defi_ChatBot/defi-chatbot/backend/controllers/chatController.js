// backend/controllers/chatController.js
const sendMessage = async (req, res) => {
    try {
        // Example of processing message and returning response
        const message = req.body.message;
        const response = 'Received: ' + message;
        res.json({ response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { sendMessage };
