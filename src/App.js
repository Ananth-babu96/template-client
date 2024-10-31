import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
   const [data, setData] = useState([]);
   useEffect(() => {
      axios
         .get("https://template-api-4xkc.onrender.com")
         .then((res) => setData(res.data));
   }, []);
   return (
      <div className="App">
         {data?.map((item, index) => {
            return (
               <img
                  style={{ height: "200px" }}
                  src={`https://photography-project-7b9q.onrender.com/images/${item.image}`}
               />
            );
         })}
      </div>
   );
}

export default App;
