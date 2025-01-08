import React from 'react';
import "./style.css"
import { Todo } from "../model";
import TodoCard from "./todoCard";
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodo: Todo[]
    setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodo, setCompletedTodo }) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>


                {
                    (provided, snapshot) => (

                        <div className={`todos ${snapshot.isDraggingOver ? 'dragActive' : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todoCard__heading"> Active Tasks</span>
                            {
                                todos.map((todo, index) => (
                                    <TodoCard todo={todo} todos={todos} key={todo.id} setTodos={setTodos} index={index} />
                                ))
                            }

                            {provided.placeholder}
                        </div>


                    )
                }
            </Droppable>

            <Droppable droppableId='TodosCompleted'>

                {
                    (provided, snapshot) => (
                        <div className={`todos ${snapshot.isDraggingOver ? 'dragCompleted' : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todoCard__heading">Completed Tasks</span>
                            {
                                completedTodo.map((todo, index) => (
                                    <TodoCard todo={todo} todos={completedTodo} key={todo.id} setTodos={setCompletedTodo} index={index} />
                                ))
                            }
                            {provided.placeholder}
                        </div>

                    )
                }

            </Droppable>



        </div>
    );
};

export default TodoList;
