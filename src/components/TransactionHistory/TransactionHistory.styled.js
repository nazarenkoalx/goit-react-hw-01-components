import styled from 'styled-components';

export const TransactionSection = styled.section`
  padding: 30px;
`;
export const Table = styled.table`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 400px;
`;
export const TableHead = styled.thead`
  border-radius: 10px;
`;

export const HeadRow = styled.th`
  background-color: lightblue;
  border-radius: 10px;
  padding: 10px;
`;

export const Row = styled.tr``;

export const TdType = styled.td`
  padding: 10px 20px;
  text-align: center;
  color: ${props => {
    let textColor;
    switch (props.type) {
      case 'invoice':
        textColor = 'orange';
        break;
      case 'payment':
        textColor = 'red';
        break;
      case 'withdrawal':
        textColor = 'green';
        break;
      case 'deposit':
        textColor = 'navy';
        break;
      default:
        textColor = 'teal';
    }
    return textColor;
  }};
`;

export const Td = styled.td`
  padding: 10px 20px;
  text-align: center;
  color: gray;
`;
