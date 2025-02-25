import { useState } from "react";
import style from "../../App/Styles/WrapTodo.module.css";
import { FooterTodo } from "../../Shared/FooterTodo/FooterTodo";
import { HeaderTodo } from "../../Shared/HeaderFooter/HeaderTodo";
import { ListTodo } from "../../Shared/ListTodo/ListTodo";
interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
export const WrapTodo = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState<Todo[]>([
    {
    id: 1,
    name: 'Тестовое задание',
    completed: false,
  },
  {
    id: 2,
    name: 'Прекрасный код',
    completed: true,
  },
  {
    id: 3,
    name: 'Покрытие тестами',
    completed: false,
  },
]);
  const [nextId, setNextId] = useState(4);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && !e.shiftKey && todo.length > 0) {
      const newTask = {
        id: nextId,
        name: todo,
        completed: false,
      };
      setList([...list, newTask]);
      setTodo("");
      setNextId(nextId + 1);
    }
  };
  const toggleTodoCompleted = (id: number) => {
    setList((prevTodos) =>
      prevTodos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };
  function toggleMenu(menuType: string) {
    switch (menuType) {
      case "all":
        if(all) return 
        setAll(!all);
        setActive(false);
        setCompleted(false);
        break;
      case "active":
        setAll(false);
        setActive(!active);
        setCompleted(false);
        break;
      case "completed":
        setAll(false);
        setActive(false);
        setCompleted(!completed);
        break;
      default:
    }
  }
  function hadlerTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }
  function clearCompleted() {
    const updateList = list.filter((items) => !items.completed);
    setList(updateList);
    setAll(true);
  }
  return (
    <>
      <ul className={style.wrap}>
        <li className={style.item}>
          <HeaderTodo onChange={hadlerTodo} onKeyDown={addTask} value={todo} />
          <ListTodo
            all={all}
            active={active}
            completed={completed}
            list={list}
            toggleTodoCompleted={toggleTodoCompleted}
          />
          <FooterTodo
            clearCompleted={() => clearCompleted()}
            toggleMenu={toggleMenu}
            count={list.length}
          />
        </li>
        <li className={style.item}></li>
        <li className={style.item}></li>
      </ul>
    </>
  );
};
