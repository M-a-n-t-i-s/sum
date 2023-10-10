import './App.module.css';
import Main from "./components/Main";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import s from './App.module.css'
import LoginContainer from "./components/Login/LoginContainer";
import Registration from "./components/Registration";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return <>
        <Navbar/>
        <div className={s.app}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/profile" element={<ProfileContainer />}/>
            </Routes>
        </div>
    </>

}

export default App;
