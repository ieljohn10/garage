import StickNote from './components/StickyNote';
import './App.scss';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [showModal, setshowModal] = useState(false);
  
  const addSticky = () => {
    setshowModal(!showModal);
    console.log(showModal)
    showModal ? document.getElementById("myDiv").style.display = "flex" : document.getElementById("myDiv").style.display = "none";
  }
  
  return (
    <div className="App">
      <div className="NoteContainer">
        <Modal />
        <StickNote />
      </div>
      <button className="addNote" onClick={addSticky}>Add Note +</button>
    </div>
  );
}

export default App;
