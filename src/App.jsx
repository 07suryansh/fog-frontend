import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Server from './Components/Server';
import Rightbar from "./Components/Rightbar";

function App() {

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Server />} />
          <Route path="/s" element={<Server />} />
        </Routes>
        <Rightbar/>
      </div>
    </Router>
  )
}

export default App
