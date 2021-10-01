import React from 'react';
//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import AuthContextProvider from './context';
import { GlobaleStyle } from './GlobalStyle';

 const App = () => 
  (
    <Router>
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobaleStyle />
      </AuthContextProvider>
    </Router>
  );


export default App;
