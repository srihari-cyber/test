import React,{useState} from "react";
import {auth} from "./Firebase"

export const Userauth = () => {

    const [data,setdata] = useState({
        email:'',
        password:''
    })

    const {email,password} = data

    const changehandler = (e) => {
         setdata({...data,[e.target.name]:e.target.value}) 
    }

    // const signup = (e) => {
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }

    console.log(data)

    return(
        <center>
            <form autoComplete="off">
                <h1>Authentication</h1>
                <input type="email" name="email" value={email} placeholder="gmail" onChange={changehandler} /><br/>
                <input type="password" name="password" value={password} placeholder="password" onChange={changehandler} /><br/>
                <button onClick={signin}>Sign In</button>&nbsp;&nbsp;
                {/* <button onClick={signup}>Sign Up</button> */}
            </form>
        </center>
    )
}