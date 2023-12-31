// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { 
  BrowserRouter, 
  Routes,
  Route 
} from "react-router-dom"
// import { BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/HomePage"
import UserPage from './pages/UserPage';
import Header from './pages/Header';

// import HeaderFooterPage from './pages/HeaderFooterPage';

import ExperiencePage from './pages/ExperiencePage';



import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Header />      
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/:id' Component={UserPage}/>
          <Route path='/experience' Component={ExperiencePage} />
        </Routes>    
        <footer>
                <p>&copy; Copyright 2023 - All Rights Reserved</p>
        </footer>
        {/* <HeaderFooterPage /> */}
    </div>

    </BrowserRouter>
    </>
  );
}

export default App;
