import './App.css';
import Folder from './components/Folder/Folder';
import List from './components/List/List';
import Preview from './components/Preview/Preview';
import { useState, useCallback } from "react";

function App() {

  const [userId, setuserId] = useState(-1);
  const handleUserClick = useCallback((id) => {
    setuserId(id);
  }, []);

  return (
    <div className="App h-[100vh] flex">
      <Folder></Folder>
      <List onUserClick={handleUserClick}></List>
      <Preview id={userId}></Preview>
    </div>
  );
}

export default App;
