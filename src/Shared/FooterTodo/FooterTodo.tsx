
import { MouseEventHandler } from "react";
import styles from "../../App/Styles/Footer.module.css";


interface FooterTodoProps {
  count: number;
  clearCompleted:MouseEventHandler<HTMLButtonElement>,
  toggleMenu: (menuType: string) => void; 
}

export const FooterTodo = ({ count, clearCompleted,  toggleMenu }: FooterTodoProps) => {
  return (
    <div className={styles.wrapFooter}>
      <p>{count} items left</p>
      <ul className={styles.footerMenu}>
        <li onClick={() => toggleMenu("all")}>All</li>
        <li onClick={() => toggleMenu("active")}>Active</li>
        <li onClick={() => toggleMenu("completed")}>Completed</li>
      </ul>
      <button onClick={clearCompleted} className={styles.clearCompleted}>Clear Completed</button>
    </div>
  );
};
