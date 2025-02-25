import styles from "../../App/Styles/Footer.module.css";
export const FooterTodo = ({count}:{count:number}) => {
  return (
    <>
      <div className={styles.wrapFooter}>
      <p>{count } items left</p>
      <ul className={styles.footerMenu}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button className={styles.clearCompleted}>Clear Completed</button>
      </div>
    </>
  );
};
