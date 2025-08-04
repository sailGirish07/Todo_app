import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../features/todo/todoSlice";
import { markAsDone } from "../../features/todo/todoSlice";
import '../../styles/todo.css';

export default function Todo(){
    const todos = useSelector((state) => state.todos)
    // console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        // console.log("delete", id);
        dispatch(deleteTodo(id));
    }

    const clickMarkHandler = (id) => {
        // console.log("mark as done", id)
        dispatch(markAsDone(id));
    }

    return(
        <>
        <AddForm/>
        <h2 className="title">Todo List App</h2>
        <ul className="todo-list">
            {todos.map((todo) =>( <li  key={todo.id} className="todo-item">
                <span style={{textDecoration: todo.isDone ? "line-through" : "none"}}>
                    {todo.task}
                </span>&nbsp;&nbsp;
                <button onClick={() => clickHandler(todo.id)} className="todo-action">Delete</button>&nbsp; &nbsp;
                <button onClick={() => clickMarkHandler(todo.id)} className="todo-action">Mark As Done</button>
            </li>))}
        </ul>
        </> 
    )
}