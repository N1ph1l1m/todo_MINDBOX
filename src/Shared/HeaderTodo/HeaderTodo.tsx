import React from "react";
import { useState } from "react";
import styles from "../../App/Styles/HeaderTodo.module.css";
import { useDispatch  , useSelector} from "react-redux";
import { handlerText,clearText } from "../../Store/Slice/textTodoSlice/textTodoSlice";
import { createTask } from "../../Store/Slice/listSlice/listSlice";
import { LuListTodo } from "react-icons/lu";
import { RootState } from "../../Store/index";

export const HeaderTodo = () =>{
    const [nextId, setNextId] = useState(0);


    const handlerInputText = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(handlerText(e.target.value));
    }
    const createTasks  = ()=>{
        dispatch(createTask({ id: nextId, name: textTodo }))
        dispatch(clearText())
        setNextId(nextId + 1);
    }
    const textTodo = useSelector((state:RootState)=> state.text.text)

    const dispatch = useDispatch();

    const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.code === "Enter" && !e.shiftKey && textTodo.length > 0) {
          createTasks();
        }
      };
    return(
        <>
        <div className={styles.wrapHeader}>
            <div className={styles.wrapIcon}>
            <LuListTodo  size="50" color="rgba(128, 128, 128, 0.611)"/>
            </div>
            <label >
            <input type="text"
                onChange={handlerInputText}
                onKeyDown={addTask}
                value={textTodo}
                 className={styles.inputTodo} placeholder="What needs to be done?"/>
            </label>

        </div>
        </>
    )
}
