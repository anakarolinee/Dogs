import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectRouter from './Components/Helper/ProtectRouter';
import Photo from './Components/Photo/Photo';

const App = () => {
  return (
          
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login/*" element={<Login />} />
              <Route path="conta/*" element={<ProtectRouter><User/></ProtectRouter>} />
              <Route path="foto/:id" element={<ProtectRouter><Photo/></ProtectRouter>} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )

};

export default App;
