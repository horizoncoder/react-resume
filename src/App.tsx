import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {HomePageContainer} from "./pages/HomePage/HomePageContainer";
import {ResumePageContainer} from "./pages/ResumePage/ResumePageContainer";
function App() {
  return (
      <div className="bg-gray-100">
      <div className="container mx-auto ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePageContainer/>} />
                <Route path="resume/:username" element={<ResumePageContainer/>} />
            </Routes>
          </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
