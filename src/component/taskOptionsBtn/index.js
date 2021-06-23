import style from './style.module.css';

const TaskOptions = (props) => {
    return (
        <div className={style.wrapper}>
            <button onClick={props.allTaskFilter}>Все задачи</button>
            <button onClick={props.doneTaskFilter}>Выполненые</button>
            <button onClick={props.notDoneTaskFilter}>Не выполненые</button>
        </div>
    )
}

export default TaskOptions;