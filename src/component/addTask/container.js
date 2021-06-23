import AddTask from './index';
import { connect } from 'react-redux';
import { addTaskAC } from '../../redux/reducers/todoListReducer';
import { useState } from 'react';

const AddTaskContainer = (props) => {
    const [value, setvalue] = useState('')

    const handleChange = (e) => {
        setvalue(e.target.value)
    }

    const addTask = () => {

        if (value) {
             props.addTask(value)
            return setvalue('')
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