import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login/>} path="/"></Route>
        <Route element={<Register/>} path="/register"></Route>
        <Route element={<Home/>} path="/home"></Route>
        <Route element={<Info/>} path="/info/:id"></Route>
      </Routes>
    </>
  );
}

export default App;


// <Outlet> 