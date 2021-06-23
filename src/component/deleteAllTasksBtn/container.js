import { connect } from 'react-redux';
import { deleteAllTasks } from '../../redux/reducers/todoListReducer';
import DeleteAll from './index';

const DeleteAllContainer = (props) => {
    return (
        <DeleteAll deleteAll={props.deleteAllAC} />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAllAC: () => {
            dispatch(deleteAllTasks())
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteAllContainer);