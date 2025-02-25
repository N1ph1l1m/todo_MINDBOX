import styles from "../../App/Styles/HeaderTodo.module.css"
import { MdKeyboardArrowDown } from "react-icons/md";
export const HeaderTodo = ()=>{
    return(
        <>
        <div className={styles.wrapHeader}>
            <div className={styles.wrapIcon}>
                <MdKeyboardArrowDown  size="50" color="rgba(128, 128, 128, 0.611)"/>
            </div>

            <label>
            <input type="text" className={styles.inputTodo} placeholder="What needs to be done?"/>
            </label>
      
        </div>
        </>
    )
}