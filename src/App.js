import logo from './logo.svg';
import './App.css';
import NoteState from './context/NoteState';
import About from './component/About';

function App() {
  return (
    <>
      <NoteState>
        <About />



      </NoteState>
    </>
  );
}

export default App;
