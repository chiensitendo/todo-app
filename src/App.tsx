import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path='/' Component={Home} />
              <Route path={'/:id'} Component={TodoDetail}/>
          </Routes>
      </div>
  );
}

export default App;
