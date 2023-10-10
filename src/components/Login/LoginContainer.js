import React from "react"
import Login from "./Login";
import {login} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";

const LoginContainer= (props) =>{
    return <Login login={props.login} name={props.name}/>
}

let mapDispatchToProps = {
    login: login
}
let mapStateToProps =(state)=> {
    return {
        name: state.authPage.name
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)