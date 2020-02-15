import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import LeftImageUpload from './LeftImageUpload';
import RightImageUpload from './RightImageUpload';
import MiddleImageUpload from './MiddleImageUpload';
import ImageProvider from './context/imagecontext';

const initState = {
  left: null,
  middle: null,
  right: null
}

//main app
function App() {
  
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <ImageProvider values={initState}>
          <LeftImageUpload />
          <MiddleImageUpload />
          <RightImageUpload />
        </ImageProvider>
      </DndProvider>
     </div>
  );
}

export default App;
