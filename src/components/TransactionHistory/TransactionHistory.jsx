import Transaction from "./Transaction";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.header}>Type</th>
        <th className={styles.header}>Amount</th>
        <th className={styles.header}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <Transaction
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          sortString={index % 2 === 0 ? styles.evenRow : styles.oddRow}
        />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
