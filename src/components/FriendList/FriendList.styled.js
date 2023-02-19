import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: hidden;
  gap: 10px;
  justify-content: center;
`;

export const FriendItem = styled.li`
  width: 70px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const FriendName = styled.p`
  font-weight: 500;
`;

// export const Status = styled.span`
//   border-radius: 50%;
//   background-color: gray;
//   width: 5px;
//   height: 5px;
// `;

// backgroundColor: isOnline ? 'green' : 'gray',
