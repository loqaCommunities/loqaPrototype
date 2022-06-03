import './styles/main.css';
import SideBar from './components/sideBar';
import TopBar from './components/topBar';
import MainWindow from './components/mainWindow'

function App() {
  return (<div>

    <TopBar/>
    <div className="windowBody">

      <SideBar/>
      <MainWindow/>
    </div>
  </div>);
}

export default App;
