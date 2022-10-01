import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../UserMangement/Login/Login";
import Register from "../UserMangement/Register/Register";
import LandingPage from "../LandingPage/LandingPage";
import ForgotPassword from "../UserMangement/ForgotPassword/ForgotPassword";

import {   BrowserRouter as Router,
    Routes ,
    Route,
    Link} from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { AuthProvider } from '../../context/auth-context';
import { ThemeProvider } from "../../context/theme-context";
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from "../../Firebase/firebase-config";

function MainRoute(){

    const [ currentUser , setCurrentUser ] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
         })
    }, []);

    return (
        <>
            <Router>
                <AuthProvider>
                <ThemeProvider>
                <Header/>
                    <Routes>
                        <Route exact path="/" element={<LandingPage/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/register" element={<Register/>}/>
                        <Route exact path="/board/:id" element={<Home/>}/>
                        {/* <Route path="*" element={<NotFound/>}/> */}
                    </Routes>
                </ThemeProvider>
                </AuthProvider>
            </Router>
        </>
    )
}

export default MainRoute