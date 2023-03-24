import PropTypes from 'prop-types';
import React from 'react';
import styles from './Transactions.module.css';


function TransactionHistory({ items }) {
  return (
    <section className={styles.transact_main}>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <table className={styles.transact_tab}>
            <thead className={styles.transact_thead}>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody key={id} className={styles.transact_tbody}>
              <tr  className={styles.transact_tr}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </section>
  );
}
TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistory;