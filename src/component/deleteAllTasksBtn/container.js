import { connect } from "react-redux";
import { deleteAllTasksThunk } from "../../redux/todoList/actions";
import DeleteAll from "./index";

const DeleteAllContainer = ({ deleteAllTasks }) => {
  return <DeleteAll deleteAll={deleteAllTasks} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllTasks: () => {
      dispatch(deleteAllTasksThunk());
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteAllContainer);
