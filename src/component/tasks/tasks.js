import style from './style.module.css';
import {CloseCircleOutlined} from '@ant-design/icons';
const Tasks = (props) => {
    return (
        props.filterTask().length === 0
        ? <div className={style.noneTasks}><h2>Задач нет</h2></div>
        : props.filterTask().map(todo => {
            return (
                <div key={todo.id} className={style.wrapper} onClick={() => props.changeStateTask(todo.id)}>
                    <p className={todo.isDone ? style.doneTask : style.task}>
                        {todo.task}
                    </p>
                    <CloseCircleOutlined className={style.btn} onClick={() => props.deleteTask(todo.id)}/>
                </div>
            )

        })
    )
}

export default Tasks;