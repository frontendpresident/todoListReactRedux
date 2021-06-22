import Tasks from "./tasks";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/reducers/todoListReducer";

const TasksContainer = (props) => {

  const deleteTask = (id) => {
      return props.deleteTaskAC(id)
  }
    return (
        <Tasks
         todo={props.todo}
         deleteTask={deleteTask}
          />
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