const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'

const initialState = {
    changeText: '',
    todo: [],
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT: 
        return {
            ...state,
            changeText: action.text
        }
        case ADD_TASK:
            
            return {
                ...state,
                todo: [...state.todo, {id: state.todo.length, task: action.message, isDone: false}],
                changeText: ''
            }
        case DELETE_TASK: 
            return {
                ...state, 
                todo: [...state.todo.filter(item => item.id !== action.id)]
            }
       
        default:
            return state
    }
}

export const changeText = (text) => ({type: CHANGE_TEXT , text});
export const addTaskAC = (message) => ({type: ADD_TASK, message});
export const deleteTask = (id) => ({type: DELETE_TASK, id});


export default todoListReducer;



