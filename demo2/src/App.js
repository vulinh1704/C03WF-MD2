import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import { List } from "./components2/List";
import { Add } from "./components2/Add";
import { Home } from "./components2/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/admin/students">
          <Route element={<List />} path="list"></Route>
          <Route element={<Add />} path="add"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;























// <Outlet> 

{/* <Route element={<Login/>} path="/"></Route>
        <Route element={<Register/>} path="/register"></Route>
        <Route element={<Home/>} path="/home"></Route>
        <Route element={<Info/>} path="/info/:id"></Route> */}