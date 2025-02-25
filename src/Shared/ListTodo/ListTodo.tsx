import styles from "../../App/Styles/ListTodo.module.css";
import { ListItem } from "../ListItem/ListItem";
interface ListTodoProps {
  list: { id: number; name: string; completed: boolean }[];
  toggleTodoCompleted: (id: number) => void;
  all: boolean;
  active: boolean;
  completed: boolean;
}
export const ListTodo = ({
  list,
  toggleTodoCompleted,
  all,
  active,
  completed,
}: ListTodoProps) => {
  const filteredList = list.filter((item) => {
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
          filteredList.map((item) => (
            <ListItem
              key={item.id}
              name={item.name}
              id={item.id}
              completed={item.completed}
              toggleTodoCompleted={toggleTodoCompleted}
            />
          ))
        )}
      </ul>
    </div>
  );
};
