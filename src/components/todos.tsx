import React, { useContext } from "react";
import TodoItem from '../components/todoItem';
import { TodosContext } from '../store/todoContext';

import classes from '../components/Todos.module.css';

const Todos: React.FC = (props) => {

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}></TodoItem>
            ))}
        </ul>
    );

}
export default Todos;