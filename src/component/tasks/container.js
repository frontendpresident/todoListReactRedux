import Tasks from "./tasks";
import { connect } from "react-redux";
import {
  deleteTaskThunk,
  allTaskThunk,
  changeStateTaskThunk,
} from "../../redux/todoList/actions";
import { useEffect } from "react";

const TasksContainer = ({
  deleteTask,
  filterStatus,
  filter,
  tasks,
  allTaskThunk,
  changeStateTaskThunk,
}) => {
  useEffect(() => {
    allTaskThunk();
  }, []);

  const deleteTaskId = (id) => {
    return deleteTask(id);
  };

  const changeStateTask = (id) => {
    return changeStateTaskThunk(id);
  };

  const filterTask = () => {
    if (filterStatus) {
      return filter;
    }
    return tasks;
  };

  return (
    <Tasks
      tasks={tasks}
      deleteTask={deleteTaskId}
      changeStateTask={changeStateTask}
      filterTask={filterTask}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter,
    filterStatus: state.filterStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => {
      dispatch(deleteTaskThunk(id));
    },
    changeStateTaskThunk: (id) => {
      dispatch(changeStateTaskThunk(id));
    },
    allTaskThunk: () => {
      dispatch(allTaskThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
