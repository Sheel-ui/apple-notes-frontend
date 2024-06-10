import './App.css';
import Folder from './components/Folder/Folder';
import List from './components/List/List';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <div className="App h-[100vh] flex">
      <Folder></Folder>
      <List></List>
      <Preview></Preview>
    </div>
  );
}

export default App;
