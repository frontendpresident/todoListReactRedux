import style from './style.module.css'
import { Button } from 'antd';

const DeleteAll = (props) => {
    return (
        <div className={style.wrapper}>
            <Button
                className={style.btn}
                onClick={props.deleteAll}
                block={true}
                shape={'round'}
            >Удалить все задачи</Button>
        </div>
    )
}

export default DeleteAll;