import './App.css';
import CREATE from "./create";
import READ from "./read";
import UPDATE from "./update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SELECTION from './selection'



function App() {
  return (<>
  
    <Routes>
    <Route exact path="/" element={<SELECTION />} />
    <Route path="./update" element={<UPDATE />} />
    <Route path="./create" element={<CREATE />} />
  </Routes>
  <div className="App">
              <SELECTION/>
    </div>
    </>
  );
}

export default App;
