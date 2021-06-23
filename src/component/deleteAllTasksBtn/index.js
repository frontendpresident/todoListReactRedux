import style from './style.module.css'

const DeleteAll = (props) => {
    return (
        <div className={style.wrapper}>
            <button onClick={props.deleteAll}>Удалить все задачи</button>
        </div>
    )
}

export default DeleteAll;