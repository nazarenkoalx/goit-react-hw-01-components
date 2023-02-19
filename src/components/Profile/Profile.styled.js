import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin-bottom: 15px;
`;

// decription styles
export const Description = styled.div`
  margin-bottom: 15px;
`;

export const AvatarImage = styled.img`
  width: 300px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid white;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;

// stats styles
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: lightblue;
  border-radius: 4px;
  width: 25%;
`;

export const Label = styled.span`
  text-align: center;
`;

export const Quantity = styled.span`
  text-align: center;
`;
