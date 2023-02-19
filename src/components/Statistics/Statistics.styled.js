import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const StatisticTitle = styled.h3`
  font-weight: 700;
  color: navy;
  text-align: center;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const StatsItem = styled.li`
  padding: 10px;
  background-color: getRandomHexColor();
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  min-width: 60px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
`;
