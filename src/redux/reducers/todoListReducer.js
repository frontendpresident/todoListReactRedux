import { createTaskApi, getAllTasks, changeStateApi, deleteTaskApi, deleteAllTaskApi } from '../../api/api'

const GET_ALL_TASKS = 'GET_ALL_TASKS';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_STATE = 'CHANGE_STATE';
const DONE_TASK_FILTER = 'DONE_TASK_FILTER';
const NOT_DONE_TASK_FILTER = 'NOT_DONE_TASK_FILTER';
const ALL_TASK_FILTER = 'ALL_TASK_FILTER';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

const initialState = {
    changeText: '',
    tasks: [],
    filter: [],
    filterStatus: false,
    activeBtnStyle: ''
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.todo
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { todo: action.message, isDone: false }],
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(item => item._id !== action.id)]
            }

        case CHANGE_STATE:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item._id === action.id) {
                        return {
                            ...item,
                            isDone: !item.isDone
                        }
                    }
                    return item
                })
            }

        case DONE_TASK_FILTER:
            return {
                ...state,
                filter: state.tasks.filter(item => item.isDone === true),
                filterStatus: true,
                activeBtnStyle: 'done'
            }

        case NOT_DONE_TASK_FILTER:
            return {
                ...state,
                filter: state.tasks.filter(item => item.isDone === false),
                filterStatus: true,
                activeBtnStyle: 'notDone'
            }

        case ALL_TASK_FILTER:
            return {
                ...state,
                filterStatus: false,
                activeBtnStyle: 'all'
            }

        case DELETE_ALL_TASKS:
            return {
                ...state,
                tasks: []
            }

        default:
            return state
    }
}

export const getAllTasksAC = (todo) => ({ type: GET_ALL_TASKS, todo })
export const addTaskAC = (message) => ({ type: ADD_TASK, message });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const changeState = (id) => ({ type: CHANGE_STATE, id });
export const doneTaskFilter = () => ({ type: DONE_TASK_FILTER });
export const notDoneTaskFilter = () => ({ type: NOT_DONE_TASK_FILTER });
export const allTaskFilter = () => ({ type: ALL_TASK_FILTER });
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS });

export const addTaskThunk = (message) => (dispatch) => {
    return createTaskApi(message)
        .then(() => {
            dispatch(addTaskAC(message))
        })
        .catch(err => {
            return alert(`Произошла ошибка: ${err}`)
        })
}

export const allTaskThunk = () => (dispatch) => {
    return getAllTasks()
        .then(data => {
            return dispatch(getAllTasksAC(data))
        })
        .catch(err => {
            return alert(`Произошла ошибка: ${err}`)
        })
}

export const changeStateTaskThunk = (id) => (dispatch) => {
    return changeStateApi(id)
        .then(() => {
            return dispatch(changeState(id))
        })
        .catch(err => {
            return alert(`Произошла ошибка: ${err}`)
        })
}

export const deleteTaskThunk = (id) => (dispatch) => {
    return deleteTaskApi(id)
        .then(() => {
            dispatch(deleteTask(id))
        })
        .catch(err => {
            return alert(`Произошла ошибка: ${err}`)
        })
}

export const deleteAllTasksThunk = () => (dispatch) => {
    return deleteAllTaskApi()
        .then(() => {
            return dispatch(deleteAllTasks())
        })
        .catch(err => {
            console.log(err)
            return alert(`Произошла ошибка: ${err}`)
        })
}

export default todoListReducer;
