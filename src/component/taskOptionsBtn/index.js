import style from './style.module.css';
import { Button } from 'antd';

const TaskOptions = (props) => {
    return (
        <div className={style.wrapper}>
            <Button className={props.activeBtn === 'all' ? style.activeBtn : style.btn} onClick={props.allTaskFilter}>Все задачи</Button>
            <Button className={props.activeBtn === 'done' ? style.activeBtn : style.btn} onClick={props.doneTaskFilter}>Выполненые</Button>
            <Button className={props.activeBtn === 'notDone' ? style.activeBtn : style.btn} onClick={props.notDoneTaskFilter}>Не выполненые</Button>
        </div>
    )
}

export default TaskOptions;