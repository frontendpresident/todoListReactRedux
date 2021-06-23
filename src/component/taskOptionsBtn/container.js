import { connect } from 'react-redux';
import { allTaskFilter, doneTaskFilter, notDoneTaskFilter } from '../../redux/reducers/todoListReducer';
import TaskOptions from './index';

const TaskOptionsContainer = ({ doneTaskFilterAC, notDoneTaskFilterAC, allTaskFilterAC, activeBtn }) => {
    
    return (
        <TaskOptions
            doneTaskFilter={doneTaskFilterAC}
            notDoneTaskFilter={notDoneTaskFilterAC}
            allTaskFilter={allTaskFilterAC}
            activeBtn={activeBtn}
        />
    )
}

const mapStateToProps =(state) => {
    return {
        activeBtn: state.activeBtnStyle
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