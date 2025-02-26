import {useState } from "react";
import style from "../../App/Styles/WrapTodo.module.css";
import { FooterTodo } from "../../Shared/FooterTodo/FooterTodo";
import { HeaderTodo } from "../../Shared/HeaderFooter/HeaderTodo";
import { ListTodo } from "../../Shared/ListTodo/ListTodo";
export const WrapTodo = () => {

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

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

  return (
    <>
      <ul className={style.wrap}>
        <li className={style.item}>
          <HeaderTodo  />
          <ListTodo
            all={all}
            active={active}
            completed={completed}
          />
          <FooterTodo
            toggleMenu={toggleMenu}

          />
        </li>
        <li className={style.item}></li>
        <li className={style.item}></li>
      </ul>
    </>
  );
};
