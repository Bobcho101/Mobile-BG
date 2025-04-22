import './index.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./home/Home";


export default function App() {
    return (
       <>
       <BrowserRouter>
            <Routes>
                <Route path='/'element={<Home/>} />
            </Routes>
       </BrowserRouter>
       </> 
    )
  }