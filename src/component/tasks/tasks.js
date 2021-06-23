import style from './style.module.css';

const Tasks = (props) => {
    return (
        props.filterTask().map(todo => {
            return (
                <div key={todo.id} className={style.wrapper} onClick={() => props.changeStateTask(todo.id)}>
                    <p className={todo.isDone ? style.doneTask : style.task}>
                        {todo.task}
                    </p>
                    <button onClick={() => props.deleteTask(todo.id)}>х</button>
                </div>
            )

        })
    )
}

export default Tasks;