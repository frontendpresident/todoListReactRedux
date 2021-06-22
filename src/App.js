import './App.css';
import Header from './component/header';
import AddTaskContainer from './component/addTask/container';
import TasksContainer from './component/tasks/container';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Header />
      <AddTaskContainer />
      <TasksContainer />
    </Provider>
    </div>
  );
}

export default App;
