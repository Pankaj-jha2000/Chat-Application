import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: ${(props) => (props.isOwnMessage ? 'flex-end' : 'flex-start')};
`;

const Bubble = styled.div`
  background-color: ${(props) => (props.isOwnMessage ? '#4f9deb' : '#444')};
  padding: 15px;
  border-radius: 20px;
  max-width: 60%;
  color: #fff;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const TimeStamp = styled.span`
  font-size: 0.75rem;
  margin-top: 5px;
  color: #ccc;
  display: block;
`;

const MediaContainer = styled.div`
  margin-top: 10px;

  img {
    width: 100%;
    height: auto;
    max-width: 200px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  audio {
    width: 100%;
    margin-top: 10px;
  }
`;

function MessageBubble({ message }) {
  const isOwnMessage = message.username === 'Me';

  return (
    <MessageWrapper isOwnMessage={isOwnMessage}>
      <Bubble isOwnMessage={isOwnMessage}>
        <strong>{message.username}</strong>
        {message.text && <p>{message.text}</p>}
        {message.file && (
          <MediaContainer>
            {message.file.type.startsWith('image/') && (
              <img src={URL.createObjectURL(message.file)} alt="attachment" />
            )}
            {message.file.type.startsWith('audio/') && (
              <audio controls src={URL.createObjectURL(message.file)}>
                Your browser does not support the audio element.
              </audio>
            )}
          </MediaContainer>
        )}
        <TimeStamp>{message.time}</TimeStamp>
      </Bubble>
    </MessageWrapper>
  );
}

export default MessageBubble;
