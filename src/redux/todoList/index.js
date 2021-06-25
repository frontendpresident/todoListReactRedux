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

const initialState = {
  changeText: '',
  tasks: [],
  filter: [],
  filterStatus: false,
  activeBtnStyle: '',
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.todo,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { _id: action._id, todo: action.message, isDone: false },
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((item) => item._id !== action.id)],
      };

    case CHANGE_STATE:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item._id === action.id) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          }
          return item;
        }),
      };

    case DONE_TASK_FILTER:
      return {
        ...state,
        filter: state.tasks.filter((item) => item.isDone === true),
        filterStatus: true,
        activeBtnStyle: 'done',
      };

    case NOT_DONE_TASK_FILTER:
      return {
        ...state,
        filter: state.tasks.filter((item) => item.isDone === false),
        filterStatus: true,
        activeBtnStyle: 'notDone',
      };

    case ALL_TASK_FILTER:
      return {
        ...state,
        filterStatus: false,
        activeBtnStyle: 'all',
      };

    case DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};

export default todoListReducer;
