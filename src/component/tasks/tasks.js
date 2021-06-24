import style from './style.module.css';
import { CloseCircleOutlined } from '@ant-design/icons';
const Tasks = ({ filterTask, changeStateTask, deleteTask }) => {
    
    return (
        filterTask().length === 0
            ? <div className={style.noneTasks}>
                <h2>Задач нет</h2>
            </div>
            : filterTask().map(todo => {
                return (
                    <div key={todo.id} className={style.wrapper} onClick={() => changeStateTask(todo.id)}>
                        <p className={todo.isDone ? style.doneTask : style.task}>
                            {todo.task}
                        </p>
                        <CloseCircleOutlined className={style.btn} onClick={() => deleteTask(todo.id)} />
                    </div>
                )
            })
    )
}

export default Tasks;