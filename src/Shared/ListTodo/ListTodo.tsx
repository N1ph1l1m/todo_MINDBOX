import styles from "../../App/Styles/ListTodo.module.css";
import { ListItem } from "../ListItem/ListItem";
import { useSelector } from "react-redux";
interface ListTodoProps {
  all: boolean;
  active: boolean;
  completed: boolean;
}
interface TodoItem { 
  id:number,
  name:string;
  completed:boolean
}
export const ListTodo = ({
  all,
  active,
  completed,
}: ListTodoProps) => {
  const list = useSelector(state => state.list.list);
  const filteredList = list.filter((item:TodoItem) => {
    if (all) return true;
    if (active) return !item.completed;
    if (completed) return item.completed;
    return false;
  });

  return (
    <div className={styles.wrapList}>
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
