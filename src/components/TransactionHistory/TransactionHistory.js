import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TransactionSection,
  Row,
  Td,
  TdType,
  HeadRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionSection>
      <Table>
        <TableHead>
          <Row>
            <HeadRow>Type</HeadRow>
            <HeadRow>Amount</HeadRow>
            <HeadRow>Currency</HeadRow>
          </Row>
        </TableHead>

        <tbody>
          {items.map(item => {
            const { id, type, amount, currency } = item;
            return (
              <Row key={id}>
                <TdType type={type}>{type}</TdType>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
              </Row>
            );
          })}
        </tbody>
      </Table>
    </TransactionSection>
  );
};

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };

// or
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
