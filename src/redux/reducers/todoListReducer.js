const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_STATE = 'CHANGE_STATE';
const DONE_TASK_FILTER = 'DONE_TASK_FILTER';
const NOT_DONE_TASK_FILTER = 'NOT_DONE_TASK_FILTER';
const ALL_TASK_FILTER = 'ALL_TASK_FILTER';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

const initialState = {
    changeText: '',
    todo: [],
    filter: [],
    filterStatus: false
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK:
            return {
                ...state,
                todo: [...state.todo, { id: state.todo.length, task: action.message, isDone: false }],
            }

        case DELETE_TASK:
            return {
                ...state,
                todo: [...state.todo.filter(item => item.id !== action.id)]
            }

        case CHANGE_STATE:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (item.id === action.id) {
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
                filter: state.todo.filter(item => item.isDone === true),
                filterStatus: true
            }

        case NOT_DONE_TASK_FILTER:
            return {
                ...state,
                filter: state.todo.filter(item => item.isDone === false),
                filterStatus: true
            }

        case ALL_TASK_FILTER:
            return {
                ...state,
                filterStatus: false
            }

        case DELETE_ALL_TASKS:
            return {
                ...state,
                todo: []
            }

        default:
            return state
    }
}

export const addTaskAC = (message) => ({ type: ADD_TASK, message });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const changeState = (id) => ({ type: CHANGE_STATE, id });
export const doneTaskFilter = () => ({ type: DONE_TASK_FILTER });
export const notDoneTaskFilter = () => ({ type: NOT_DONE_TASK_FILTER });
export const allTaskFilter = () => ({ type: ALL_TASK_FILTER });
export const deleteAllTasks = () => ({ type: DELETE_ALL_TASKS });


export default todoListReducer;



