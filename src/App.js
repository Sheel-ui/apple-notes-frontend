import './App.css';
import Folder from './components/Folder/Folder';
import List from './components/List/List';
import Preview from './components/Preview/Preview';
import { useState, useCallback } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(-1);
  const [newCreated, setNewCreated] = useState(false)

  const handleUserClick = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const handleCreateItem = () => {
    setNewCreated(!newCreated);
  };

  return (
    <div className="App h-[100vh] flex">
      <Folder />
      <List onUserClick={handleUserClick} newCreated={newCreated} />
      <Preview id={selectedId} onItemCreated={handleCreateItem} />
    </div>
  );
}

export default App;
