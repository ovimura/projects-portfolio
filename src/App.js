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
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './pages/Header';

import HeaderFooterPage from './pages/HeaderFooterPage';

import ExperiencePage from './pages/ExperiencePage';


import './App.css';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Header />
        <Routes>
          <Route path='/' Component={HomePage}/>
          {/* <Route path='/:id' Component={UserPage}/> */}
          <Route path='/experience' Component={ExperiencePage} />
          <Route path='/projects' Component={ProjectsPage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/contact' Component={ContactPage} />
        </Routes>
        {/* <footer>
                <p>&copy; Copyright 2023 - All Rights Reserved</p>
        </footer> */}
        <HeaderFooterPage />
    </div>

    </BrowserRouter>
    </>
  );
}

export default App;
