import AddTask from './index'
import { connect } from 'react-redux'
import { addTaskAC, changeText } from '../../redux/reducers/todoListReducer'

const AddTaskContainer = (props) => {

    const handleChange = (e) => {
        return props.changeTextAC(e.target.value)
    }

    const addTask = () => {
        props.addTask(props.changeText)
    }

    return (
        <AddTask
            changeText={props.changeText}
            handleChange={handleChange}
            addTask={addTask}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        changeText: state.changeText,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextAC: text => {
            dispatch(changeText(text))
        },
        addTask: message => {
            dispatch(addTaskAC(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer)