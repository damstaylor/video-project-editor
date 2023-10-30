import VideoProjectList from './components/VideoProjectList/VideoProjectList';
import mock from './services/mock.json';
import './App.css';
import 'holderjs';

function App() {
  return (
    <div className="App">
      <VideoProjectList list={mock.list} />
    </div>
  );
}

export default App;
