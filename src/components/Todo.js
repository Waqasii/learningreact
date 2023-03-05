import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        event.preventDefault();
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        setTodo("");



    }

    return (

        <div>

            <h3>Todo</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={todo}></input>
                <button type='submit'>Add</button>
            </form>

            {
                todoList.map((item) => {

                    return <ListItem key={item} name={item}> {item}</ListItem>
                })
            }


        </div >
    );
}