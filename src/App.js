import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <FileUpload />
      </DndProvider>
     </div>
  );
}

export default App;
