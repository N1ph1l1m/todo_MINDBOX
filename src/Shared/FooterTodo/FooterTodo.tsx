
import styles from "../../App/Styles/Footer.module.css";
import { useDispatch, useSelector } from "react-redux";
import {clearCompleted} from "../../Store/Slice/listSlice/listSlice";



interface FooterTodoProps {
  toggleMenu: (menuType: string) => void; 
}

export const FooterTodo = ({  toggleMenu }: FooterTodoProps) => {
  const count  = useSelector(state => state.list.list)
  const dispatch = useDispatch();
  const clearComp  =  () => dispatch(clearCompleted())
  return (
    <div className={styles.wrapFooter}>
      <p>{count.length} items left</p>
      <ul className={styles.footerMenu}>
        <li onClick={() => toggleMenu("all")}>All</li>
        <li onClick={() => toggleMenu("active")}>Active</li>
        <li onClick={() => toggleMenu("completed")}>Completed</li>
      </ul>
      <button onClick={()=> clearComp()} className={styles.clearCompleted}>Clear Completed</button>
    </div>
  );
};
