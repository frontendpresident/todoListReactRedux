import { connect } from 'react-redux';
import { deleteAllTasks } from '../../redux/reducers/todoListReducer';
import DeleteAll from './index';

const DeleteAllContainer = ({ deleteAllAC }) => {
    return (
        <DeleteAll deleteAll={deleteAllAC} />
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