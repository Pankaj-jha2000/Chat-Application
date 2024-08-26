import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, {
      id: messages.length + 1,
      username: 'Me',
      text: newMessage.text || '',
      file: newMessage.file || null,
      time: new Date().toLocaleTimeString(),
    }]);
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
