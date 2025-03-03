import styles from "../../App/Styles/Listitem.module.css";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { toggleTodo,deleteTodo } from "../../Store/Slice/listSlice/listSlice";
import { FaRegTrashAlt } from "react-icons/fa";
interface ListItem {
  id: number;
  name: string;
  completed: boolean;
}
export const ListItem = ({
  id,
  name,
  completed,

}: ListItem) => {
    const [isDeleteButton, setDeleteButton] = useState(false);
  const dispatch = useDispatch();
  const toogle = () => dispatch(toggleTodo(id));
  const deleteTask  = () => dispatch(deleteTodo(id));
  return (
    <>
      <div className={styles.listItemWrap}
      onMouseEnter={()=>{ setDeleteButton(true)}}
      onMouseLeave={()=>{setDeleteButton(false)}}>

        <label className={styles.checkboxLabel}>
          <input
            checked={completed}
            onChange={() => toogle()}
            type="checkbox"
            className={styles.hiddenCheckbox}
          />
          <span className={styles.customCheckbox}></span>
          <span
            className={styles.todoTittle}
            style={{
              textDecoration: completed === true ? "line-through" : "none",
              color:
                completed === true ? "rgba(128, 128, 128, 0.611)" : "black",
            }}
          >
            {name}{" "}
          </span>

        </label>
        <button
            className={styles.deleteTodo}
            style = {{display: isDeleteButton ? "block": "none"}}
            onClick={()=>{deleteTask()}}><FaRegTrashAlt  color="red" size="20"/></button>
      </div>
    </>
  );
};
