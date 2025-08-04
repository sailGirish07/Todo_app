import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import{useEffect, useRef} from 'react'

export default function AddForm(){
    const[task, setTask] = useState("");
    const dispatch = useDispatch();
    const addtaskRef = useRef();

    useEffect(() => {
        addtaskRef.current.focus();
    }, []);


    const submitHandler  = (evt) => {
        evt.preventDefault();
        // console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }

    return(
    <>
    <form onSubmit={submitHandler}>
        <input type="text" name="addtask" onChange={(e) => setTask(e.target.value)} ref={addtaskRef} value={task}></input>&nbsp; &nbsp;
        <button>Add Task</button>
    </form>
    </>
    )
}