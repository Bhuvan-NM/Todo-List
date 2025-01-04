import React from 'react';
import {Todo} from "../model";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import AcademicCap from "../assets/icons/academic-cap";
import Trash from "../assets/icons/trash";

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const  TodoCard = ({todo, todos, setTodos} : Props) => {
    return (
        <form className={"todoCard"}>
            <span className={"todoCard__text"}>
                {todo.todo}
            </span>
            <div>
                <span className={"todoCard__icon"}>
                    <Trash className={"todoCard__icon"}/>
                </span>

                <span className={"todoCard__icon"}>

                </span>

                <span className={"todoCard__icon"}>

                </span>
            </div>

        </form>
    );
}

export default TodoCard;