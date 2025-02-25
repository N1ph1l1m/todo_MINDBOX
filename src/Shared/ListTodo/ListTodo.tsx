import styles from "../../App/Styles/ListTodo.module.css";
import { ListItem } from "../ListItem/ListItem";
export const ListTodo = () =>{
    return (<>
    <div className={styles.wrapList}>
        <ul>
        <ListItem name="First todo"/>
        <ListItem name="First todo"/>
        <ListItem name="First todo"/>
        <ListItem name="First todo"/>
        <ListItem name="First todo"/>
        </ul>
    </div>
    </>)
}