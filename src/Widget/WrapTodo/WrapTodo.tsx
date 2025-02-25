import style from "../../App/Styles/WrapTodo.module.css";
import { FooterTodo } from "../../Shared/FooterTodo/FooterTodo";
import { HeaderTodo } from "../../Shared/HeaderFooter/HeaderTodo";
import { ListTodo } from "../../Shared/ListTodo/ListTodo";
export const WrapTodo = () =>{

    return(<>
    <ul className={style.wrap}>
       <li className={style.item}>
        <HeaderTodo/>
        <ListTodo/>
        <FooterTodo count={2}/>
       </li>
       <li className={style.item}></li>
       <li className={style.item}></li>
       </ul>
    </>
    )
}