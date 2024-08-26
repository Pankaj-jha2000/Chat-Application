import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #f1f1f1;
  margin-right: 10px;
  font-size: 1rem;
`;

const AttachmentInput = styled.input`
  display: none;
`;

const AttachmentLabel = styled.label`
  cursor: pointer;
  margin-right: 10px;
  color: #444;
  font-size: 1.5rem;

  &:hover {
    color: #4f9deb;
  }
`;

const SendButton = styled.button`
  background-color: #4f9deb;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #3b8bdb;
  }
`;

function MessageInput({ onSendMessage }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSendMessage = () => {
    if (text || file) {
      onSendMessage({ text, file });
      setText('');
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <InputWrapper>
      <AttachmentLabel htmlFor="attachment">
        📎
      </AttachmentLabel>
      <AttachmentInput 
        id="attachment" 
        type="file" 
        onChange={handleFileChange} 
      />
      <TextInput 
        type="text" 
        placeholder="Type a message..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <SendButton onClick={handleSendMessage}>Send</SendButton>
    </InputWrapper>
  );
}

export default MessageInput;
