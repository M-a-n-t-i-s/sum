import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {authApi} from "../api/api";

const Registration =()=>{
    const [log,setLog]=useState('')
    const [pas1,setPas1]=useState('')
    const [pas2,setPas2]=useState('')
    const navigate = useNavigate()

    const handler=async () => {
        if (log !== '' && pas1 !== '' &&  pas2 !== '') {

            if (pas1!==pas2) {
                alert("Пароли не совпадают")
            }
            else {

                const loginIsHave = await authApi.loginIsHave(log)
                if (loginIsHave) {
                    alert("Пользователь с таким логином уже зарегистрирован")
                }
                else {
                    //Код для регистрации
                    navigate("/")
                    alert('Зарегистрирован!')

                }
            }

        } else {
            alert("Заполните все поля")
        }
    }
    return <>
        <h1>Registration</h1>
        <TextField
            onChange={event => setLog(event.target.value)}
            id="outlined-required"
            label="Login"

        />
        <TextField
            onChange={event => setPas1(event.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />
        <TextField
            onChange={event => setPas2(event.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />
        <Button variant="contained" onClick={handler} >Entry</Button>

    </>
}


export default Registration