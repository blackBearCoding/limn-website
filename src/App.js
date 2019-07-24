import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import OurTeamPage from './Pages/OurTeamPage'
import OurCompanyPage from './Pages/OurCompanyPage'
import HeaderBar from './MainComponents/HeaderBar'
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import EventsPage from './Pages/EventsPage'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <HeaderBar />
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/our-team" component={OurTeamPage}></Route>
      <Route path="/our-company" component={OurCompanyPage}></Route>
      <Route path="/contact" component={ContactPage}></Route>
      <Route path="/blog" component={BlogPage}></Route>
      <Route path="/events" component={EventsPage}></Route>
    </Router>
  );
}

export default App;
