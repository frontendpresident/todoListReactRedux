import AddTask from './index';
import { connect } from 'react-redux';
import { addTaskThunk } from '../../redux/todoList/actions';
import { useState } from 'react';

const AddTaskContainer = (props) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addTask = () => {
        if (value) {
            props.addTaskThunk(value)
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
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTaskThunk: message => {
            dispatch(addTaskThunk(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);