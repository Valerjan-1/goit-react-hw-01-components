import css from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.title_name}>
        <tr className={css.title_items}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.t_items}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.items_children} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
