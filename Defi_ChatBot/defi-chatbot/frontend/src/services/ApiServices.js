// frontend/src/services/ApiService.js
const ApiService = {
    async sendMessage(message) {
        // Example of sending message to backend
        const response = await fetch('/api/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        return response.json();
    }
};

export default ApiService;
