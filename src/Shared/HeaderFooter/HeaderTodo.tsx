import { ChangeEventHandler,KeyboardEventHandler} from "react";
import styles from "../../App/Styles/HeaderTodo.module.css"
import { MdKeyboardArrowDown } from "react-icons/md";

interface HeaderTodoProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
    onKeyDown:KeyboardEventHandler<HTMLInputElement>;
    value:string
}
export const HeaderTodo = ({onChange , value, onKeyDown}: HeaderTodoProps) =>{
    return(
        <>
        <div className={styles.wrapHeader}>
            <div className={styles.wrapIcon}>
                <MdKeyboardArrowDown  size="50" color="rgba(128, 128, 128, 0.611)"/>
            </div>
            <label >
            <input type="text" 
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
                 className={styles.inputTodo} placeholder="What needs to be done?"/>
            </label>
      
        </div>
        </>
    )
}