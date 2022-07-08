import './App.css';
import AnalyticalDashboard from './components/AnalyticalDashboard';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <AnalyticalDashboard/>
      
       <TaskList/>
       
    </div>
  );
}

export default App;
