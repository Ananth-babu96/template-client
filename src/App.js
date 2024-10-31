import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
   const [data, setData] = useState([]);
   useEffect(() => {
      axios
         .get("https://template-api-7jof.onrender.com")
         .then((res) => setData(res.data));
      console.log("test log");
   }, []);
   return (
      <div className="App">
         {data?.map((item, index) => {
            return (
               <img
                  style={{ height: "200px" }}
                  src={`https://template-api-7jof.onrender.com/images/${item.image}`}
               />
            );
         })}
      </div>
   );
}

export default App;
