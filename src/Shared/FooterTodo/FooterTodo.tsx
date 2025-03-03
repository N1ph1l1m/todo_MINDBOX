
import { RootState } from "../../Store/index";
import styles from "../../App/Styles/Footer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../../Store/Slice/listSlice/listSlice";
import  {toggleAll,toggleActive,toggleCompleted, toggleTrash} from "../../Store/Slice/toggleMenu/toggleMenuSlice"




export const FooterTodo = () => {
  const count  = useSelector((state:RootState) => state.list.list)
  const dispatch = useDispatch();

  const clearComp  =  () => dispatch(clearCompleted())
  const menuAll = () => dispatch(toggleAll())
  const menuActive = () => dispatch(toggleActive())
  const menuCompleted = () => dispatch(toggleCompleted())
  const menuTrash = () => dispatch(toggleTrash())
  return (
    <div className={styles.wrapFooter}>
      <p>{count.length} items left</p>
      <ul className={styles.footerMenu}>
        <li onClick={() => menuAll() }>All</li>
        <li onClick={() => menuActive() }>Active</li>
        <li onClick={() => menuCompleted()}>Completed</li>
        <li onClick={() => menuTrash()}>Trash</li>
      </ul>
      <button onClick={()=> clearComp()} className={styles.clearCompleted}>Clear Completed</button>
    </div>
  );
};
