import style from './style.module.css';
import { Button } from 'antd';

const TaskOptions = ({
  allTaskFilter,
  doneTaskFilter,
  notDoneTaskFilter,
  activeBtn,
}) => {
  return (
    <div className={style.wrapper}>
      <Button
        onClick={allTaskFilter}
        type={activeBtn === 'all' ? 'success' : 'primary'}
        size="small"
      >
        Все задачи
      </Button>
      <Button
        onClick={doneTaskFilter}
        type={activeBtn === 'done' ? 'success' : 'primary'}
        size="small"
      >
        {' '}
        Выполненые
      </Button>
      <Button
        onClick={notDoneTaskFilter}
        type={activeBtn === 'notDone' ? 'success' : 'primary'}
        size="small"
      >
        Не выполненые
      </Button>
    </div>
  );
};

export default TaskOptions;
