import React from 'react';
import "./style.css"

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo} : Props)  => {
    return (
        <form className={'input'}>
            <input type="input" placeholder={'Enter a task'} className={'input__box'}/>
            <button className={'input__submit'} type="submit">Add Task</button>
        </form>
    );
}

export default InputField;