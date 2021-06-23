import './App.css';
import Header from './component/header';
import AddTaskContainer from './component/addTask/container';
import TasksContainer from './component/tasks/container';
import TaskOptionsContainer from './component/taskOptionsBtn/container';
import DeleteAllContainer from './component/deleteAllTasksBtn/container';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <AddTaskContainer />
        <TasksContainer />
        <TaskOptionsContainer />
        <DeleteAllContainer />
      </Provider>
    </div>
  );
}

export default App;
