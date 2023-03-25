import PropTypes from 'prop-types';
import React from 'react';
import styles from './Transactions.module.css';

let isOddRow = false;
const getRowColor = () => {
  isOddRow = !isOddRow;
  return isOddRow ? '#f0f0f0' : '#fff';
};

function TransactionHistory({ items }) {
  return (
    <section className={styles.transact_main}>
      <table className={styles.transact_tab}>
        <thead style={{ backgroundColor: '#524a4d' }}>
          <tr>
            <th className={styles.transact_thead}>Type</th>
            <th className={styles.transact_thead}>Amount</th>
            <th className={styles.transact_thead}>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.transact_tbody}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr
                key={id}
                style={{ backgroundColor: getRowColor() }}
                className={styles.transact_tr}
              >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionHistory;
