import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import HomePage from "./pages/home";





function App() {

  return useRoutes([
    {
      path: "/home",
      index:true,
      element: <HomePage/>
    },
    {
      path: "*",
      element: <div>404</div>
    },

  ])
}

export default App;
