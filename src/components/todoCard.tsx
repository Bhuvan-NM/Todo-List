import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import Trash from '../assets/icons/trash';
import Edit from '../assets/icons/edit';
import Tick from '../assets/icons/tick';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ index, todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleEdit = (e: React.FormEvent, id: Number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        inputRef.current?.focus();

    }, [edit])


    return (
        <Draggable draggableId={todo.id.toString()} index={index}>

            {(provided, snapshot) => (
                <form className={`todoCard ${snapshot.isDragging ? 'drag' : ''} `} onSubmit={(e) => handleEdit(e, todo.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                    {edit ? (
                        <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todoCard__editText' ref={inputRef} />
                    ) : todo.isDone ? (
                        <s className='todoCard__text ' >{todo.todo}</s>
                    ) : (
                        <span className='todoCard__text'> {todo.todo}</span>
                    )}

                    <div>
                        <span
                            className={'todoCard__icon'}
                            onClick={() => {
                                handleDelete(todo.id);
                            }}
                        >
                            <Trash className={'todoCard__icon'} />
                        </span>

                        <span className={'todoCard__icon'} onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit)
                            }
                        }}>
                            <Edit className='todoCard__icon' />
                        </span>

                        <span
                            className={'todoCard__icon'}
                            onClick={() => {
                                handleDone(todo.id);
                            }}
                        >
                            <Tick className='todoCard__icon' />
                        </span>
                    </div>
                </form>

            )
            }

        </Draggable >
    );
};

export default TodoCard;
