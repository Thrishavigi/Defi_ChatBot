// frontend/src/components/Chat.js
import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

function Chat() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const data = await ApiService.sendMessage(message);
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        // Fetch initial messages
        // Example: ApiService.fetchInitialMessages()
    }, []);

    return (
        <div>
            <div>{response}</div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
