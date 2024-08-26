import React from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.8; }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #61dafb;
  border-radius: 50%;
  animation: ${typing} 1s infinite ease-in-out;
`;

const TypingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  justify-content: center;
`;

function TypingIndicator() {
  return (
    <TypingWrapper>
      <Dot />
      <Dot />
      <Dot />
    </TypingWrapper>
  );
}

export default TypingIndicator;
