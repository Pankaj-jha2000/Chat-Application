import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #444;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: bold;
  font-size: 1.2rem;
`;

function UserAvatar({ username }) {
  return <Avatar>{username.charAt(0).toUpperCase()}</Avatar>;
}

export default UserAvatar;
