import Tasks from './tasks';
import { connect } from 'react-redux';
import { deleteTask, changeState } from '../../redux/reducers/todoListReducer';

const TasksContainer = ({ deleteTaskAC, changeStateAC, filterStatus, filter, todo }) => {
    const deleteTask = (id) => {
        return deleteTaskAC(id)
    }

    const changeStateTask = id => {
        return changeStateAC(id)
    }

    const filterTask = () => {
        if (filterStatus) {
            return filter
        }
        return todo
    }

    return (
        <Tasks
            todo={todo}
            deleteTask={deleteTask}
            changeStateTask={changeStateTask}
            filterTask={filterTask}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        filter: state.filter,
        filterStatus: state.filterStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTaskAC: id => {
            dispatch(deleteTask(id))
        },
        changeStateAC: id => {
            dispatch(changeState(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);