import style from "./style.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
const Tasks = ({ filterTask, changeStateTask, deleteTask }) => {
  return filterTask().length === 0 ? (
    <div className={style.noneTasks}>
      <h2>Задач нет</h2>
    </div>
  ) : (
    filterTask().map((todo) => {
      return (
        <div key={todo._id} className={style.wrapper}>
          <p
            className={todo.isDone ? style.doneTask : style.task}
            onClick={() => changeStateTask(todo._id)}
          >
            {todo.todo}
          </p>
          <CloseCircleOutlined
            className={style.btn}
            onClick={() => deleteTask(todo._id)}
          />
        </div>
      );
    })
  );
};

export default Tasks;
