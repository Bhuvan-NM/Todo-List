import React, {useRef} from 'react';
import "./style.css"

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField:React.FC <Props> = ({todo, setTodo, handleAdd})  => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className={'input'}
              onSubmit={(e) =>{

                handleAdd(e)
                inputRef.current?.blur();

                }}>
            <input
                ref = {inputRef}
                    type="input"
                   placeholder={'Enter a task'}
                   className={'input__box'}
                   value = {todo}
                   onChange={
                       (e) => setTodo(e.target.value)
                   }
            />
            <button className={'input__submit'} type="submit">Add Task</button>
        </form>
    );
}

export default InputField;