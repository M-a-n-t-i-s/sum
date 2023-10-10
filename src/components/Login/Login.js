import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [log, setLog] = useState('')
    const [pas, setPas] = useState('')
    const [trigger,setTrigger]= useState(false)

    useEffect(  ()=> {
        if (props.name !== 'false') {

            localStorage.setItem('name', props.name)
            localStorage.setItem('isLogin', 'true')
            navigate("/profile")
            setTrigger(false)
            window.location.reload()
        }
        else {
            if (trigger) {
                alert("Неверный логин или пароль")
                setTrigger(false)
            }
        }

    },[trigger])


    const handler = () => {
        if (log !== '' && pas !== '') {
            props.login(log, pas)
            setTrigger(true)

        } else {
            alert("Заполните все поля")
        }
    }


    return <>
        <h1>Log in</h1>
        <TextField
            onChange={event => setLog(event.target.value)}
            id="outlined-required"
            label="Login"

        />
        <TextField
            onChange={event => setPas(event.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />
        <Button variant="contained" onClick={handler}>Entry</Button>

    </>
}


export default Login