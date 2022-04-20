import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import {Home} from "./pages/home";

function App() {

  return useRoutes([
    {
      path: "/home",
      element: <Home/>
    },
  ])
}

export default App;
