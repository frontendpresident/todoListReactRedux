import style from './style.module.css'
import { Button } from 'antd';

const DeleteAll = ({ deleteAll }) => {
    return (
        <div className={style.wrapper}>
            <Button
                className={style.btn}
                onClick={deleteAll}
                block={true}
                shape='round'
            >Удалить все задачи</Button>
        </div>
    )
}

export default DeleteAll;