import "./App.css"
import { Home as Not, Login, Register } from "./Public";
import { Home as Good } from "./Private";
import { useContext } from "react";
import { Context } from "./Context";
import { Route, Routes } from "react-router";
function App() {
  const {token} = useContext(Context)
  return (
    <div className="App">
      <Routes>
      <Route path="/*" element={token !== null? <Good/>: <Not/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
