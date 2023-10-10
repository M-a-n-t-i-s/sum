import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";


const ProfileContainer =(props)=> {
    return <Profile name={props.name}/>
}

let mapDispatchToProps ={}

let mapStateToProps =(state)=> {
    return {
        name: state.authPage.name
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)