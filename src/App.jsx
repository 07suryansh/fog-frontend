import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Server from './Components/Server';

function App() {

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Server />} />
          <Route path="/server" element={<Server />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
