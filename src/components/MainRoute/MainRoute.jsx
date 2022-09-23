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

function MainRoute(){
    return (
        <>
            <Router>
            <Header />
                <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/board" element={<Home/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
                </Routes>

            </Router>
        </>
    )
}

export default MainRoute