import styles from "../../App/Styles/ListTodo.module.css";
import { ListItem } from "../ListItem/ListItem";
import { useSelector } from "react-redux";

interface TodoItem {
  id:number,
  name:string;
  completed:boolean,
  isDelete:boolean,
}
export const ListTodo = () => {
  const list = useSelector(state => state.list.list);
  const menu = useSelector(state => state.toggleMenu.menu)
  const filteredList = list.filter((item:TodoItem) => {
    switch (menu) {
      case "all":
        return !item.isDelete
        break;
      case "active":
        return !item.completed && !item.isDelete
        break;
      case "completed":
        return item.completed
        break;
      case "trash":
        return item.isDelete
        break;
      default:
    return false

  }
  });

  return (
    <div className={styles.wrapList}
      style={{overflowY:list.length=== 0  ?  "hidden": "auto"}}
    >
      <ul>
        {filteredList.length === 0 ? (
          <p className={styles.titleTodo}>Input todo....</p>
        ) : (
          filteredList.map((item:TodoItem) => (
            <ListItem
              key={item.id}
              name={item.name}
              id={item.id}
              completed={item.completed}
            />
          ))
        )}
      </ul>
    </div>
  );
};
