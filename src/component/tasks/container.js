import Tasks from "./tasks";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/reducers/todoListReducer";

const TasksContainer = (props) => {

   
    return (
        <Tasks todo={props.todo} deleteTask={deleteTask(props.todo.id)} />
    )
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTaskAC: id => {
            dispatch(deleteTask(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)