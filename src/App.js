import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";


const App = ()=>{

    return(

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />}/>
                    <Route path="*" element={<h1>Page not found 🙅</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App