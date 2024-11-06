import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
function App() {
   const [data, setData] = useState([]);
   useEffect(() => {}, []);
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Homepage />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
