import PropTypes from 'prop-types';
export const Transactions = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};
