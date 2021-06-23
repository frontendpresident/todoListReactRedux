import AddTask from './index';
import { connect } from 'react-redux';
import { addTaskAC } from '../../redux/reducers/todoListReducer';
import { useState } from 'react';

const AddTaskContainer = (props) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addTask = () => {

        if (value) {
             props.addTask(value)
            return setValue('')
        }
    }

    return (
        <AddTask
            value={value}
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
        addTask: message => {
            dispatch(addTaskAC(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);