import Tasks from "./tasks";
import { connect } from "react-redux";
import { deleteTask, changeState } from "../../redux/reducers/todoListReducer";

const TasksContainer = (props) => {

    const deleteTask = (id) => {
        return props.deleteTaskAC(id)
    }

    const changeStateTask = id => {
        return props.changeStateAC(id)
    }

    const filterTask = () => {
        if (props.filterStatus === true) {
            return props.filter
        }
        return props.todo
    }

    return (
        <Tasks
            todo={props.todo}
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)