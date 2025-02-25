import styles from "../../App/Styles/Listitem.module.css";
interface ListItem {
  id: number;
  name: string;
  completed: boolean;
  toggleTodoCompleted: (id: number) => void;
}
export const ListItem = ({
  id,
  name,
  completed,
  toggleTodoCompleted,
}: ListItem) => {
  return (
    <>
      <div className={styles.listItemWrap}>
        <label className={styles.checkboxLabel}>
          <input
            checked={completed}
            onChange={() => toggleTodoCompleted(id)}
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
