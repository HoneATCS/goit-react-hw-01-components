import PropTypes from 'prop-types';

import css from './Transactions.module.css';

function TransactionHistory({ transactions }) {
  console.log(transactions);
  return (
    <section className={css.transact_main}>
      {transactions.map(({ id, type, amount, currency }) => {
        console.log(id);
        return (
          <table className={css.transact_tab}>
            <thead className={css.transact_thead}>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody className={css.transact_tbody}>
              <tr key={id} className={css.transact_tr}>
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