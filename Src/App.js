
import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MainPage from "./Components/MainPage";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Record from "./Components/Record";
import Upload from "./Components/Upload";
import DailyStats from "./Components/DailyStats";
import Cases from "./Components/Cases";

const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        <Route path="/main" element={<MainPage />} />{" "}
        <Route path="/signup" element={<SignUp/>} />{" "}
        <Route path="/record" element={<Record />} />{" "}
        <Route path="/upload" element={<Upload/>} />{" "} 
        <Route path="/dailystats" element={<DailyStats />} />{" "}
        <Route path="/cases" element={<Cases />} />
      </Routes>{" "}
    </>
    );

}
export default App;