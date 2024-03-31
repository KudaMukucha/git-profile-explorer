import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Searched from "./Searched";

export default function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results/:search" element={<Searched/>}/>
    </Routes>
  )
}
