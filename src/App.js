import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, HashRouter, Routes } from "react-router-dom";
import React from 'react';
import {Home} from './Components/Home';
import {AboutUs} from './Components/AboutUs';
import { Profile } from './Components/Profile';
import { AuthProvider } from './utility/auth';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import {Media} from './Components/Media';
import {Membership} from './Components/Membership';


function App() {
  return(
    <AuthProvider>
     <HashRouter>
        <div>
        
            <>
            <Navbar/>
              </>
          
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/aboutUs" element={<AboutUs/>} />
              <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/media" element={<Media/>}/>
              <Route path="/membership" element={<Membership/>}/>

             
            </Routes>
          </div>
        </div>
      </HashRouter>
    </AuthProvider>
  )
  
  
}

export default App;
