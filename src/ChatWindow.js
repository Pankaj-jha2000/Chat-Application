import React from 'react';
import MessageBubble from './MessageBubble';
import './ChatWindow.css';
function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatWindow;
