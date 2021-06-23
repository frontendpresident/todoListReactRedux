import { connect } from 'react-redux';
import { allTaskFilter, doneTaskFilter, notDoneTaskFilter } from '../../redux/reducers/todoListReducer';
import TaskOptions from './index';

const TaskOptionsContainer = (props) => {

    return (
        <TaskOptions
            doneTaskFilter={props.doneTaskFilterAC}
            notDoneTaskFilter={props.notDoneTaskFilterAC}
            allTaskFilter={props.allTaskFilterAC}
        />
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doneTaskFilterAC: () => {
            dispatch(doneTaskFilter())
        },
        notDoneTaskFilterAC: () => {
            dispatch(notDoneTaskFilter())
        },
        allTaskFilterAC: () => {
            dispatch(allTaskFilter())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskOptionsContainer)