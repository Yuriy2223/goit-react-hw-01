import styles from "./TransactionHistory.module.css";

const Transaction = ({ type, amount, currency, sortString }) => (
  <tr className={sortString}>
    <td className={styles.string_border}>{type}</td>
    <td className={styles.string_border}>{amount}</td>
    <td className={styles.string_border}>{currency}</td>
  </tr>
);

export default Transaction;