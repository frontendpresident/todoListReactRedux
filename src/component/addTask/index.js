import style from './style.module.css';
import { Input, Button } from 'antd';

const AddTask = (props) => {
    return (
        <div className={style.wrapper}>
            <Input className={style.input} value={props.value} onChange={props.handleChange} placeholder='Введите задачу...' />
            <Button className={style.button} onClick={props.addTask} type='primary'>Добавить</Button>
        </div>
    )
}

export default AddTask;