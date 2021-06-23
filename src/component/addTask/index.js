import style from './style.module.css';

const AddTask = (props) => {

    return (
        <div className={style.wrapper}>
            <input value={props.value} onChange={props.handleChange} />
            <button onClick={props.addTask}>Добавить</button>
        </div>
    )
}

export default AddTask;