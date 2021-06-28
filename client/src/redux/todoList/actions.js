import {
  createTaskApi,
  getAllTasks,
  changeStateApi,
  deleteTaskApi,
  deleteAllTaskApi,
} from '../../api/api';
import {
  GET_ALL_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CHANGE_STATE,
  DONE_TASK_FILTER,
  NOT_DONE_TASK_FILTER,
  ALL_TASK_FILTER,
  DELETE_ALL_TASKS,
} from './types';

export const getAllTasksAC = (todo) => ({ type: GET_ALL_TASKS, todo });
export const addTaskAC = (message) => ({ type: ADD_TASK, message });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const changeState = (id) => ({ type: CHANGE_STATE, id });
export const doneTaskFilter = () => ({ type: DONE_TASK_FILTER });
export const notDoneTaskFilter = () => ({ type: NOT_DONE_TASK_FILTER });
export const allTaskFilter = () => ({ type: ALL_TASK_FILTER });
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS });

export const addTaskThunk = (message, todo) => (dispatch) => {
  return createTaskApi(message)
    .then(() => {
       dispatch(addTaskAC(message));
       dispatch(allTaskThunk())
       return
    })
    .catch((err) => {
      return alert(`Произошла ошибка: ${err}`);
    });
};

export const allTaskThunk = () => (dispatch) => {
  return getAllTasks()
    .then((data) => {
      return dispatch(getAllTasksAC(data));
    })
    .catch((err) => {
      return console.log(`Произошла ошибка: ${err}`);
    });
};

export const changeStateTaskThunk = (id) => (dispatch) => {
  return changeStateApi(id)
    .then(() => {
      return dispatch(changeState(id));
    })
    .catch((err) => {
      return console.log(`Произошла ошибка: ${err}`);
    });
};

export const deleteTaskThunk = (id) => (dispatch) => {
  return deleteTaskApi(id)
    .then(() => {
      return dispatch(deleteTask(id));
    })
    .catch((err) => {
      return console.log(`Произошла ошибка: ${err}`);
    });
};

export const deleteAllTasksThunk = () => (dispatch) => {
  return deleteAllTaskApi()
    .then(() => {
      return dispatch(deleteAllTasks());
    })
    .catch((err) => {
      return console.log(`Произошла ошибка: ${err}`);
    });
};
