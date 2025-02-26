import styles from "../../App/Styles/Listitem.module.css";
import { useDispatch} from "react-redux"; 
import {toggleTodo} from "../../Store/Slice/listSlice/listSlice"
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
  const dispatch = useDispatch();
  const toogle = () => dispatch(toggleTodo(id))
  return (
    <>
      <div className={styles.listItemWrap}>
        <label className={styles.checkboxLabel}>
          <input
            checked={completed}
            onChange={() => toogle()}
            type="checkbox"
            className={styles.hiddenCheckbox}
          />
          <span className={styles.customCheckbox}></span>
          <span
            style={{
              textDecoration: completed === true ? "line-through" : "none",
              color:
                completed === true ? "rgba(128, 128, 128, 0.611)" : "black",
            }}
          >
            {name}{" "}
          </span>
        </label>
      </div>
    </>
  );
};
