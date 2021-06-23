import './App.css';
import AddTaskContainer from './component/addTask/container';
import TasksContainer from './component/tasks/container';
import TaskOptionsContainer from './component/taskOptionsBtn/container';
import DeleteAllContainer from './component/deleteAllTasksBtn/container';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <div className='addTask'>
        <AddTaskContainer />
      </div>
    <div className='tasks'>
        <TasksContainer />
        <TaskOptionsContainer />
        <DeleteAllContainer />
    </div>
    </Provider>
    </div>
  );
}

export default App;
